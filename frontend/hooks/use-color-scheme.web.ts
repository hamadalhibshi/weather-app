import { useEffect, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

import { useTheme } from "@/context/ThemeContext";

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const theme = useTheme();
  const system = useRNColorScheme();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (!hasHydrated) {
    return "light";
  }

  if (theme) {
    return theme.colorScheme;
  }

  return system;
}
