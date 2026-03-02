import React, { useCallback, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Switch, Text } from "@/components";

const NotificationsScreen = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const c = Colors[colorScheme ?? "light"];
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleDisable = useCallback(() => {
    setNotificationsEnabled(false);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: c.text }]}>
          {t("notifications.title")}
        </Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          {t("notifications.subtitle")}
        </Text>

        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <View
            style={[
              styles.row,
              styles.rowBorder,
              { borderColor: c.cardBorder },
            ]}
          >
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("notifications.enableLabel")}
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: c.cardBorder, true: c.tint }}
              thumbColor="#fff"
            />
          </View>
          <View style={[styles.descriptionRow, { borderColor: c.cardBorder }]}>
            <Text style={[styles.description, { color: c.textSecondary }]}>
              {t("notifications.description")}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={handleDisable}
          style={[
            styles.disableButton,
            {
              backgroundColor: notificationsEnabled ? c.card : c.cardBorder,
              borderColor: c.cardBorder,
            },
          ]}
          disabled={!notificationsEnabled}
        >
          <MaterialCommunityIcons
            name="bell-off-outline"
            size={22}
            color={notificationsEnabled ? c.text : c.textSecondary}
          />
          <Text
            style={[
              styles.disableButtonText,
              { color: notificationsEnabled ? c.text : c.textSecondary },
            ]}
          >
            {t("notifications.disableButton")}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  descriptionRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
  },
  disableButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: 1,
  },
  disableButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default NotificationsScreen;
