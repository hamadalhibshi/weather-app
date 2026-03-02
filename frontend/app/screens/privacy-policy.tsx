import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { Text } from "@/components";

const PrivacyPolicyScreen = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const c = Colors[colorScheme ?? "light"];

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
          {t("privacyPolicy.title")}
        </Text>
        <Text style={[styles.lastUpdated, { color: c.textSecondary }]}>
          {t("privacyPolicy.lastUpdated")}: {t("privacyPolicy.lastUpdatedDate")}
        </Text>
        <Text style={[styles.intro, { color: c.textSecondary }]}>
          {t("privacyPolicy.intro")}
        </Text>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.dataCollection.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.dataCollection.location")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.dataCollection.usage")}
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.dataUse.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.dataUse.content")}
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.dataSharing.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.dataSharing.content")}
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.security.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.security.content")}
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.yourRights.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.yourRights.content")}
          </Text>
        </View>

        <View
          style={[
            styles.section,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: c.text }]}>
            {t("privacyPolicy.contact.title")}
          </Text>
          <Text style={[styles.paragraph, { color: c.textSecondary }]}>
            {t("privacyPolicy.contact.content")}
          </Text>
        </View>
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
    textAlign: "left",
  },
  lastUpdated: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 16,
    textAlign: "left",
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
    textAlign: "left",
  },
  section: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "left",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: "left",
  },
});

export default PrivacyPolicyScreen;
