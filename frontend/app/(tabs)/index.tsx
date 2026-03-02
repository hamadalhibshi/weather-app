import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { CURRENT, HOURLY, DAILY } from "@/constants/fakeData";

function WeatherIcon({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color: string;
  style?: object;
}) {
  return (
    <MaterialCommunityIcons
      name={name as never}
      size={size}
      color={color}
      style={style}
    />
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";
  const c = Colors[colorScheme ?? "light"];

  const heroBg = isDark ? c.gradientNight[0] : c.gradientSky[0];

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top, paddingBottom: insets.bottom + 80 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero: current weather */}
        <View style={[styles.hero, { backgroundColor: heroBg }]}>
          <Text style={[styles.location, { color: "rgba(255,255,255,0.9)" }]}>
            {CURRENT.location}
          </Text>
          <View style={styles.tempRow}>
            <Text style={styles.temp}>{CURRENT.temp}°</Text>
            <View style={styles.conditionBlock}>
              <WeatherIcon
                name="weather-partly-cloudy"
                size={56}
                color="rgba(255,255,255,0.95)"
              />
              <Text
                style={[styles.condition, { color: "rgba(255,255,255,0.95)" }]}
              >
                {t(`conditions.${CURRENT.conditionKey}`)}
              </Text>
            </View>
          </View>
          <Text style={[styles.feelsLike, { color: "rgba(255,255,255,0.8)" }]}>
            {t("common.feelsLike")} {CURRENT.feelsLike}° · {t("common.high")}:
            {CURRENT.high}° {t("common.low")}:{CURRENT.low}°
          </Text>
        </View>

        {/* Hourly strip */}
        <View style={[styles.section, { backgroundColor: c.background }]}>
          <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
            {t("sections.hourlyForecast")}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hourlyScroll}
          >
            {HOURLY.map((h, i) => (
              <View
                key={("timeKey" in h ? h.timeKey : h.timeFallback) ?? i}
                style={[
                  styles.hourCard,
                  {
                    backgroundColor: c.card,
                    borderColor: c.cardBorder,
                    marginStart: i === 0 ? 0 : 10,
                  },
                ]}
              >
                <Text style={[styles.hourTime, { color: c.textSecondary }]}>
                  {"timeKey" in h ? t(`common.${h.timeKey}`) : h.timeFallback}
                </Text>
                <WeatherIcon
                  name={h.icon}
                  size={28}
                  color={c.tint}
                  style={styles.hourIcon}
                />
                <Text style={[styles.hourTemp, { color: c.text }]}>
                  {h.temp}°
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Stats row */}
        <View style={[styles.statsRow, { backgroundColor: c.background }]}>
          <View
            style={[
              styles.statCard,
              { backgroundColor: c.card, borderColor: c.cardBorder },
            ]}
          >
            <MaterialCommunityIcons
              name="water"
              size={22}
              color={c.tint}
              style={styles.statIcon}
            />
            <Text style={[styles.statValue, { color: c.text }]}>
              {CURRENT.humidity}%
            </Text>
            <Text style={[styles.statLabel, { color: c.textSecondary }]}>
              {t("stats.humidity")}
            </Text>
          </View>
          <View
            style={[
              styles.statCard,
              { backgroundColor: c.card, borderColor: c.cardBorder },
            ]}
          >
            <MaterialCommunityIcons
              name="weather-windy"
              size={22}
              color={c.tint}
              style={styles.statIcon}
            />
            <Text style={[styles.statValue, { color: c.text }]}>
              {CURRENT.wind} {t("common.kmh")}
            </Text>
            <Text style={[styles.statLabel, { color: c.textSecondary }]}>
              {t("stats.wind")}
            </Text>
          </View>
        </View>

        {/* 7-day forecast */}
        <View style={[styles.section, { backgroundColor: c.background }]}>
          <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
            {t("sections.sevenDayForecast")}
          </Text>
          <View
            style={[
              styles.dailyCard,
              { backgroundColor: c.card, borderColor: c.cardBorder },
            ]}
          >
            {DAILY.map((d, i) => (
              <View
                key={d.dayKey}
                style={[
                  styles.dailyRow,
                  i < DAILY.length - 1 && styles.dailyRowBorder,
                  { borderColor: c.cardBorder },
                ]}
              >
                <Text style={[styles.dailyDay, { color: c.text }]}>
                  {t(`days.${d.dayKey}`)}
                </Text>
                <View style={styles.innerDailyRow}>
                  <WeatherIcon
                    name={d.icon}
                    size={24}
                    color={c.tint}
                    style={styles.dailyIcon}
                  />
                  <View style={styles.dailyTemps}>
                    <Text style={[styles.dailyHigh, { color: c.text }]}>
                      {d.high}°
                    </Text>
                    <Text style={[styles.dailyLow, { color: c.textSecondary }]}>
                      {d.low}°
                    </Text>
                  </View>
                </View>
              </View>
            ))}
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
  hero: {
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 24,
    marginBottom: 24,
    overflow: "hidden",
  },
  location: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 8,
    letterSpacing: 0.3,
    alignSelf: "flex-start",
  },
  tempRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  temp: {
    fontSize: 72,
    fontWeight: "200",
    color: "#fff",
    letterSpacing: -2,
  },
  conditionBlock: {
    alignItems: "center",
  },
  condition: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },
  feelsLike: {
    fontSize: 14,
    opacity: 0.9,
    alignSelf: "flex-start",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  hourlyScroll: {
    paddingVertical: 4,
  },
  hourCard: {
    width: 72,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
  },
  hourTime: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
  },
  hourIcon: {
    marginBottom: 6,
  },
  hourTemp: {
    fontSize: 17,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  dailyCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  dailyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  dailyRowBorder: {
    borderBottomWidth: 1,
  },
  dailyDay: {
    fontSize: 16,
    fontWeight: "600",
  },
  innerDailyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dailyIcon: {
    marginEnd: 12,
  },
  dailyTemps: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dailyHigh: {
    fontSize: 16,
    fontWeight: "700",
    minWidth: 28,
    textAlign: "right",
  },
  dailyLow: {
    fontSize: 15,
    fontWeight: "500",
    minWidth: 28,
    textAlign: "right",
  },
});
