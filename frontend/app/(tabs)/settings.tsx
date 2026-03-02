import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { useTheme } from "@/context/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Switch, Text } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLanguage } from "@/hooks/use-language";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const c = Colors[colorScheme ?? "light"];
  const currentLang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const { isRTL, changeLanguage } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: c.text }]}>
          {t("settings.title")}
        </Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          {t("settings.subtitle")}
        </Text>

        {/* Units */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          {t("settings.units")}
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
              {
                borderColor: c.cardBorder,
              },
            ]}
          >
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="thermometer"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.temperature")}
              </Text>
            </View>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>
              {t("settings.celsius")}
            </Text>
          </View>

          <View
            style={[
              styles.row,
              styles.rowBorder,
              { borderColor: c.cardBorder },
            ]}
          >
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="speedometer"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.windSpeed")}
              </Text>
            </View>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>
              {t("settings.kmh")}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.innerRow}>
              <MaterialCommunityIcons name="ruler" size={22} color={c.tint} />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.pressure")}
              </Text>
            </View>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>
              {t("settings.mb")}
            </Text>
          </View>
        </View>

        {/* Appearance */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          {t("settings.appearance")}
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
                name="theme-light-dark"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.darkMode")}
              </Text>
            </View>
            <Switch
              value={colorScheme === "dark"}
              onValueChange={(value) =>
                theme?.setPreference(value ? "dark" : "light")
              }
              trackColor={{ false: c.cardBorder, true: c.tint }}
              thumbColor="#fff"
            />
          </View>

          <Pressable
            style={[styles.row, { borderColor: c.cardBorder }]}
            onPress={changeLanguage}
          >
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="translate"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.language")}
              </Text>
            </View>
            <View style={styles.innerRow}>
              <Text style={[styles.rowValue, { color: c.textSecondary }]}>
                {t(`languages.${currentLang}`)}
              </Text>
              <MaterialCommunityIcons
                name={isRTL ? "chevron-left" : "chevron-right"}
                size={22}
                color={c.textSecondary}
              />
            </View>
          </Pressable>
        </View>

        {/* Preferences */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          {t("settings.preferences")}
        </Text>
        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Link
            href="/(tabs)/locations"
            asChild
            style={[
              styles.row,
              styles.rowBorder,
              { borderColor: c.cardBorder },
            ]}
          >
            <Pressable>
              <View style={styles.innerRow}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={22}
                  color={c.tint}
                />
                <Text style={[styles.rowLabel, { color: c.text }]}>
                  {t("settings.defaultLocation")}
                </Text>
              </View>
              <MaterialCommunityIcons
                name={isRTL ? "chevron-left" : "chevron-right"}
                size={22}
                color={c.textSecondary}
              />
            </Pressable>
          </Link>

          <View style={styles.row}>
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.notifications")}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={isRTL ? "chevron-left" : "chevron-right"}
              size={22}
              color={c.textSecondary}
            />
          </View>
        </View>

        {/* About */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          {t("settings.about")}
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
                name="information-outline"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.version")}
              </Text>
            </View>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>
              1.0.0
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.innerRow}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={22}
                color={c.tint}
              />
              <Text style={[styles.rowLabel, { color: c.text }]}>
                {t("settings.privacyPolicy")}
              </Text>
            </View>
            <MaterialCommunityIcons
              name={isRTL ? "chevron-left" : "chevron-right"}
              size={22}
              color={c.textSecondary}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginVertical: 12,
    alignSelf: "flex-start",
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  rowValue: {
    fontSize: 15,
    fontWeight: "500",
  },
});
