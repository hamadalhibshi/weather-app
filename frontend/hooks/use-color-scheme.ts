import { useColorScheme as useRNColorScheme } from "react-native";

import { useTheme } from "@/context/ThemeContext";

export function useColorScheme() {
  const theme = useTheme();
  const system = useRNColorScheme();

  if (theme) {
    return theme.colorScheme;
  }

  return system;
}
