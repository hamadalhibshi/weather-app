import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Mock saved locations – replace with real state/API later
const SAVED_LOCATIONS = [
  { id: '1', name: 'San Francisco', region: 'CA, USA', isDefault: true, temp: 22, condition: 'Partly cloudy' },
  { id: '2', name: 'New York', region: 'NY, USA', isDefault: false, temp: 18, condition: 'Cloudy' },
  { id: '3', name: 'London', region: 'UK', isDefault: false, temp: 12, condition: 'Rain' },
];

export default function LocationsScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const c = Colors[colorScheme ?? 'light'];

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
        <Text style={[styles.title, { color: c.text }]}>Locations</Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          Manage your saved locations for weather
        </Text>

        <View style={styles.list}>
          {SAVED_LOCATIONS.map((loc) => (
            <Pressable
              key={loc.id}
              style={({ pressed }) => [
                styles.card,
                {
                  backgroundColor: c.card,
                  borderColor: c.cardBorder,
                  opacity: pressed ? 0.9 : 1,
                },
              ]}
            >
              <View style={styles.cardLeft}>
                <View style={[styles.iconWrap, { backgroundColor: c.tint + '20' }]}>
                  <MaterialCommunityIcons name="map-marker" size={24} color={c.tint} />
                </View>
                <View style={styles.cardText}>
                  <View style={styles.nameRow}>
                    <Text style={[styles.locationName, { color: c.text }]}>{loc.name}</Text>
                    {loc.isDefault && (
                      <View style={[styles.defaultBadge, { backgroundColor: c.tint }]}>
                        <Text style={styles.defaultBadgeText}>Current</Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.region, { color: c.textSecondary }]}>{loc.region}</Text>
                  <Text style={[styles.weather, { color: c.textSecondary }]}>
                    {loc.temp}° · {loc.condition}
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={22} color={c.textSecondary} />
            </Pressable>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addCard,
            {
              backgroundColor: c.card,
              borderColor: c.cardBorder,
              borderStyle: 'dashed',
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <MaterialCommunityIcons name="plus-circle-outline" size={28} color={c.tint} />
          <Text style={[styles.addLabel, { color: c.tint }]}>Add location</Text>
        </Pressable>
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
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 24,
  },
  list: {
    gap: 12,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  locationName: {
    fontSize: 17,
    fontWeight: '700',
  },
  defaultBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  defaultBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
  },
  region: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  weather: {
    fontSize: 13,
    fontWeight: '500',
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
  },
  addLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});
