import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
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
        <Text style={[styles.title, { color: c.text }]}>Settings</Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          Customize your weather experience
        </Text>

        {/* Units */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          Units
        </Text>
        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <View style={[styles.row, styles.rowBorder, { borderColor: c.cardBorder }]}>
            <MaterialCommunityIcons name="thermometer" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Temperature</Text>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>Celsius</Text>
          </View>
          <View style={[styles.row, styles.rowBorder, { borderColor: c.cardBorder }]}>
            <MaterialCommunityIcons name="speedometer" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Wind speed</Text>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>km/h</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="ruler" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Pressure</Text>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>mb</Text>
          </View>
        </View>

        {/* Appearance */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          Appearance
        </Text>
        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <View style={[styles.row, styles.rowBorder, { borderColor: c.cardBorder }]}>
            <MaterialCommunityIcons name="theme-light-dark" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Dark mode</Text>
            <Switch
              value={colorScheme === 'dark'}
              onValueChange={(value) => theme?.setPreference(value ? 'dark' : 'light')}
              trackColor={{ false: c.cardBorder, true: c.tint }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* Preferences */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          Preferences
        </Text>
        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <Link href="/(tabs)/locations" asChild style={[styles.row, styles.rowBorder, { borderColor: c.cardBorder }]}>
            <Pressable>
              <MaterialCommunityIcons name="map-marker" size={22} color={c.tint} />
              <Text style={[styles.rowLabel, { color: c.text }]}>Default location</Text>
              <MaterialCommunityIcons name="chevron-right" size={22} color={c.textSecondary} />
            </Pressable>
          </Link>
          <View style={styles.row}>
            <MaterialCommunityIcons name="bell-outline" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Notifications</Text>
            <MaterialCommunityIcons name="chevron-right" size={22} color={c.textSecondary} />
          </View>
        </View>

        {/* About */}
        <Text style={[styles.sectionTitle, { color: c.textSecondary }]}>
          About
        </Text>
        <View
          style={[
            styles.card,
            { backgroundColor: c.card, borderColor: c.cardBorder },
          ]}
        >
          <View style={[styles.row, styles.rowBorder, { borderColor: c.cardBorder }]}>
            <MaterialCommunityIcons name="information-outline" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Version</Text>
            <Text style={[styles.rowValue, { color: c.textSecondary }]}>1.0.0</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="file-document-outline" size={22} color={c.tint} />
            <Text style={[styles.rowLabel, { color: c.text }]}>Privacy policy</Text>
            <MaterialCommunityIcons name="chevron-right" size={22} color={c.textSecondary} />
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
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 12,
    marginTop: 8,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
  },
});
