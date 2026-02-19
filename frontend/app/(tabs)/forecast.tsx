import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FORECAST = [
  {
    day: "Today",
    date: "Feb 17",
    high: 24,
    low: 16,
    icon: "weather-partly-cloudy" as const,
    condition: "Partly cloudy",
    precip: 10,
  },
  {
    day: "Wednesday",
    date: "Feb 18",
    high: 26,
    low: 15,
    icon: "weather-sunny" as const,
    condition: "Sunny",
    precip: 0,
  },
  {
    day: "Thursday",
    date: "Feb 19",
    high: 23,
    low: 14,
    icon: "weather-cloudy" as const,
    condition: "Cloudy",
    precip: 60,
  },
  {
    day: "Friday",
    date: "Feb 20",
    high: 25,
    low: 16,
    icon: "weather-partly-cloudy" as const,
    condition: "Partly cloudy",
    precip: 20,
  },
  {
    day: "Saturday",
    date: "Feb 21",
    high: 27,
    low: 17,
    icon: "weather-sunny" as const,
    condition: "Sunny",
    precip: 0,
  },
  {
    day: "Sunday",
    date: "Feb 22",
    high: 24,
    low: 15,
    icon: "weather-partly-cloudy" as const,
    condition: "Partly cloudy",
    precip: 30,
  },
  {
    day: "Monday",
    date: "Feb 23",
    high: 22,
    low: 14,
    icon: "weather-rainy" as const,
    condition: "Rain",
    precip: 80,
  },
];

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

export default function ForecastScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === "dark";
  const c = Colors[colorScheme ?? "light"];

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
        <Text style={[styles.title, { color: c.text }]}>7-Day Forecast</Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          San Francisco, CA
        </Text>

        <View style={styles.list}>
          {FORECAST.map((day, i) => (
            <View
              key={day.date}
              style={[
                styles.card,
                {
                  backgroundColor: c.card,
                  borderColor: c.cardBorder,
                },
              ]}
            >
              <View style={styles.cardTop}>
                <View style={styles.cardLeft}>
                  <Text style={[styles.dayName, { color: c.text }]}>
                    {day.day}
                  </Text>
                  <Text style={[styles.date, { color: c.textSecondary }]}>
                    {day.date}
                  </Text>
                </View>

                <View style={styles.cardCenter}>
                  <WeatherIcon
                    name={day.icon}
                    size={36}
                    color={c.tint}
                    style={styles.cardIcon}
                  />
                  <Text style={[styles.condition, { color: c.textSecondary }]}>
                    {day.condition}
                  </Text>
                </View>

                <View style={styles.tempBlock}>
                  <Text style={[styles.high, { color: c.text }]}>
                    {day.high}°
                  </Text>
                  <Text style={[styles.low, { color: c.textSecondary }]}>
                    {day.low}°
                  </Text>
                  <View style={styles.precipBadge}>
                    <MaterialCommunityIcons
                      name="water"
                      size={12}
                      color={c.textSecondary}
                    />
                    <Text
                      style={[styles.precipText, { color: c.textSecondary }]}
                    >
                      {day.precip}%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
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
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 24,
  },
  list: {
    gap: 12,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 18,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardLeft: {
    width: "33%",
  },
  dayName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  date: {
    fontSize: 13,
    fontWeight: "500",
  },
  cardCenter: {
    alignItems: "center",
    flex: 1,
    width: "33%",
  },
  cardIcon: {
    marginBottom: 4,
  },
  condition: {
    fontSize: 12,
    fontWeight: "500",
  },
  tempBlock: {
    alignItems: "flex-end",
    width: "33%",
  },
  high: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 2,
  },
  low: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  precipBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  precipText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
