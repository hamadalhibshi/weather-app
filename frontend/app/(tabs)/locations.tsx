import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "react-i18next";
import { SAVED_LOCATIONS } from "@/constants/fakeData";
import { getConditionTranslation } from "@/utils/strings";

export default function LocationsScreen() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
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
        <Text style={[styles.title, { color: c.text }]}>
          {t("locations.title")}
        </Text>
        <Text style={[styles.subtitle, { color: c.textSecondary }]}>
          {t("locations.subtitle")}
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
                <View
                  style={[styles.iconWrap, { backgroundColor: c.tint + "20" }]}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={24}
                    color={c.tint}
                  />
                </View>
                <View>
                  <View style={styles.nameRow}>
                    <Text style={[styles.locationName, { color: c.text }]}>
                      {loc.name}
                    </Text>
                    {loc.isDefault && (
                      <View
                        style={[
                          styles.defaultBadge,
                          { backgroundColor: c.tint },
                        ]}
                      >
                        <Text style={styles.defaultBadgeText}>
                          {t("common.current")}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.region, { color: c.textSecondary }]}>
                    {loc.region}
                  </Text>
                  <Text style={[styles.weather, { color: c.textSecondary }]}>
                    {`${loc.temp}° · ${getConditionTranslation(loc.condition.toLowerCase(), t)}`}
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name={isRTL ? "chevron-left" : "chevron-right"}
                size={22}
                color={c.textSecondary}
              />
            </Pressable>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addCard,
            {
              backgroundColor: c.card,
              borderColor: c.cardBorder,
              borderStyle: "dashed",
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={28}
            color={c.tint}
          />
          <Text style={[styles.addLabel, { color: c.tint }]}>
            {t("locations.addLocation")}
          </Text>
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
  list: {
    gap: 12,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginEnd: 14,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  locationName: {
    fontSize: 17,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
  defaultBadge: {
    paddingStart: 8,
    paddingEnd: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  defaultBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#fff",
    alignSelf: "flex-start",
  },
  region: {
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "flex-start",
    marginBottom: 2,
  },
  weather: {
    fontSize: 13,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  addCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 18,
    paddingStart: 20,
    paddingEnd: 20,
    borderRadius: 20,
    borderWidth: 2,
  },
  addLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
});
