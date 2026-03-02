import React, { useCallback } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import { useLanguage } from "@/hooks/use-language";

export default function ScreensLayout() {
  const { t } = useTranslation();
  const router = useRouter();
  const theme = useTheme();
  const { isRTL } = useLanguage();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const backButton = (
    <Pressable onPress={handleBack} hitSlop={8} style={{ padding: 8 }}>
      <MaterialCommunityIcons
        name={isRTL ? "chevron-right" : "chevron-left"}
        size={28}
        color={theme.colors.text}
      />
    </Pressable>
  );

  return (
    <Stack
      screenOptions={{
        headerLeft: isRTL ? undefined : () => backButton,
        headerRight: isRTL ? () => backButton : undefined,
      }}
    >
      <Stack.Screen
        name="privacy-policy"
        options={{
          title: t("privacyPolicy.title"),
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: t("notifications.title"),
        }}
      />
      <Stack.Screen
        name="add-location"
        options={{
          title: t("titles.addLocation"),
        }}
      />
    </Stack>
  );
}
