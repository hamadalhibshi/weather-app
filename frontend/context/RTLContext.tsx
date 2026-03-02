import React from "react";
import { StyleSheet, View } from "react-native";

import { useLanguage } from "@/hooks/use-language";

// Wraps the app so layout direction follows the current language (RTL for Arabic).

export function RTLProvider({ children }: { children: React.ReactNode }) {
  const { isRTL } = useLanguage();

  return (
    <View style={[styles.root, { direction: isRTL ? "rtl" : "ltr" }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
