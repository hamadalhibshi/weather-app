import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Mock data for the UI
const CURRENT = {
  temp: 22,
  feelsLike: 21,
  condition: 'Partly cloudy',
  location: 'San Francisco, CA',
  humidity: 65,
  wind: 12,
  high: 24,
  low: 16,
};

const HOURLY = [
  { time: 'Now', temp: 22, icon: 'weather-partly-cloudy' as const },
  { time: '2p', temp: 23, icon: 'weather-sunny' as const },
  { time: '4p', temp: 24, icon: 'weather-sunny' as const },
  { time: '6p', temp: 21, icon: 'weather-partly-cloudy' as const },
  { time: '8p', temp: 18, icon: 'weather-night-partly-cloudy' as const },
  { time: '10p', temp: 17, icon: 'weather-night' as const },
  { time: '12a', temp: 16, icon: 'weather-night' as const },
];

const DAILY = [
  { day: 'Today', high: 24, low: 16, icon: 'weather-partly-cloudy' as const },
  { day: 'Wed', high: 26, low: 15, icon: 'weather-sunny' as const },
  { day: 'Thu', high: 23, low: 14, icon: 'weather-cloudy' as const },
  { day: 'Fri', high: 25, low: 16, icon: 'weather-partly-cloudy' as const },
  { day: 'Sat', high: 27, low: 17, icon: 'weather-sunny' as const },
  { day: 'Sun', high: 24, low: 15, icon: 'weather-partly-cloudy' as const },
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
    <MaterialCommunityIcons name={name as never} size={size} color={color} style={style} />
  );
}

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const isDark = colorScheme === 'dark';
  const c = Colors[colorScheme ?? 'light'];

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
          <Text style={[styles.location, { color: 'rgba(255,255,255,0.9)' }]}>
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
              <Text style={[styles.condition, { color: 'rgba(255,255,255,0.95)' }]}>
                {CURRENT.condition}
              </Text>
            </View>
          </View>
          <Text style={[styles.feelsLike, { color: 'rgba(255,255,255,0.8)' }]}>
            Feels like {CURRENT.feelsLike}° · H:{CURRENT.high}° L:{CURRENT.low}°
          </Text>
        </View>

        {/* Hourly strip */}
        <View style={[styles.section, { backgroundColor: c.background }]}>
          <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
            Hourly forecast
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hourlyScroll}
          >
            {HOURLY.map((h, i) => (
              <View
                key={h.time}
                style={[
                  styles.hourCard,
                  {
                    backgroundColor: c.card,
                    borderColor: c.cardBorder,
                    marginLeft: i === 0 ? 0 : 10,
                  },
                ]}
              >
                <Text style={[styles.hourTime, { color: c.textSecondary }]}>
                  {h.time}
                </Text>
                <WeatherIcon
                  name={h.icon}
                  size={28}
                  color={c.tint}
                  style={styles.hourIcon}
                />
                <Text style={[styles.hourTemp, { color: c.text }]}>{h.temp}°</Text>
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
              Humidity
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
              {CURRENT.wind} km/h
            </Text>
            <Text style={[styles.statLabel, { color: c.textSecondary }]}>
              Wind
            </Text>
          </View>
        </View>

        {/* 7-day forecast */}
        <View style={[styles.section, { backgroundColor: c.background }]}>
          <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
            7-day forecast
          </Text>
          <View style={[styles.dailyCard, { backgroundColor: c.card, borderColor: c.cardBorder }]}>
            {DAILY.map((d, i) => (
              <View
                key={d.day}
                style={[
                  styles.dailyRow,
                  i < DAILY.length - 1 && styles.dailyRowBorder,
                  { borderColor: c.cardBorder },
                ]}
              >
                <Text style={[styles.dailyDay, { color: c.text }]}>{d.day}</Text>
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
    overflow: 'hidden',
  },
  location: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  tempRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  temp: {
    fontSize: 72,
    fontWeight: '200',
    color: '#fff',
    letterSpacing: -2,
  },
  conditionBlock: {
    alignItems: 'center',
  },
  condition: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  feelsLike: {
    fontSize: 14,
    opacity: 0.9,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  hourlyScroll: {
    paddingVertical: 4,
  },
  hourCard: {
    width: 72,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  hourTime: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  hourIcon: {
    marginBottom: 6,
  },
  hourTemp: {
    fontSize: 17,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  dailyCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  dailyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  dailyRowBorder: {
    borderBottomWidth: 1,
  },
  dailyDay: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  dailyIcon: {
    marginRight: 12,
  },
  dailyTemps: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dailyHigh: {
    fontSize: 16,
    fontWeight: '700',
    minWidth: 28,
    textAlign: 'right',
  },
  dailyLow: {
    fontSize: 15,
    fontWeight: '500',
    minWidth: 28,
    textAlign: 'right',
  },
});
