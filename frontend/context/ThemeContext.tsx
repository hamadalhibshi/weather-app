import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

const THEME_KEY = "@weather_app_theme";

type ThemePreference = "light" | "dark" | null;

type ThemeContextValue = {
  colorScheme: "light" | "dark";
  preference: ThemePreference;
  setPreference: (value: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useRNColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>(null);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((value: string | null) => {
      if (value === "light" || value === "dark") {
        setPreferenceState(value);
      }
    });
  }, []);

  const setPreference = useCallback((value: "light" | "dark") => {
    setPreferenceState(value);
    AsyncStorage.setItem(THEME_KEY, value);
  }, []);

  const colorScheme = (preference ?? systemScheme ?? "light") as
    | "light"
    | "dark";

  const value: ThemeContextValue = {
    colorScheme,
    preference,
    setPreference,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  return ctx;
}
