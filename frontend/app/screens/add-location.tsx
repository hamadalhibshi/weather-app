import React, { useCallback, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@/components";
import { router } from "expo-router";
import * as Location from "expo-location";

const DEFAULT_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function AddLocationScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const c = Colors[colorScheme ?? "light"];

  const [region, setRegion] = useState(DEFAULT_REGION);
  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [adding, setAdding] = useState(false);

  const handleMapPress = useCallback((e: MapPressEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarker({ latitude, longitude });
  }, []);

  const handleAddThisLocation = useCallback(() => {
    if (!marker) return;
    setAdding(true);
    // TODO: save location to api and navigate back
    setTimeout(() => {
      setAdding(false);
      Alert.alert(t("locations.addNewLocation"), t("locations.locationSaved"), [
        { text: t("locations.ok"), onPress: () => router.back() },
      ]);
    }, 400);
  }, [marker, t]);

  const handleMyLocation = () => {
    Location.requestForegroundPermissionsAsync().then(({ status }) => {
      if (status !== "granted") {
        Alert.alert(
          t("locations.myLocation"),
          "Location permission not granted.",
        );
        return;
      }
      Location.getCurrentPositionAsync().then(({ coords }) => {
        setRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarker({ latitude: coords.latitude, longitude: coords.longitude });
      });
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: c.background }]}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={DEFAULT_REGION}
        region={region}
        onRegionChangeComplete={setRegion}
        onPress={handleMapPress}
        mapType={Platform.OS === "android" ? "standard" : "mutedStandard"}
        showsUserLocation={false}
        showsMyLocationButton={false}
      >
        {marker && (
          <Marker
            coordinate={{
              longitude: marker.longitude,
              latitude: marker.latitude,
            }}
            pinColor={c.tint}
            draggable
            onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)}
          />
        )}
      </MapView>

      <View
        style={[
          styles.overlay,
          {
            paddingBottom: insets.bottom + 16,
            paddingHorizontal: 20,
            paddingTop: 16,
          },
        ]}
      >
        <View
          style={[
            styles.card,
            {
              backgroundColor: c.card,
              borderColor: c.cardBorder,
            },
          ]}
        >
          <Text style={[styles.hint, { color: c.textSecondary }]}>
            {t("locations.pickHint")}
          </Text>
          <View style={styles.actions}>
            {/* My Location Button */}
            <Pressable
              onPress={handleMyLocation}
              style={({ pressed }) => [
                styles.myLocationBtn,
                {
                  backgroundColor: c.cardBorder,
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="crosshairs-gps"
                size={22}
                color={c.text}
              />
              <Text style={[styles.myLocationLabel, { color: c.text }]}>
                {t("locations.myLocation")}
              </Text>
            </Pressable>

            {/* Add This Location Button */}
            <Pressable
              onPress={handleAddThisLocation}
              disabled={!marker || adding}
              style={({ pressed }) => [
                styles.addBtn,
                {
                  backgroundColor: marker && !adding ? c.tint : c.cardBorder,
                  opacity: pressed && marker && !adding ? 0.9 : 1,
                },
              ]}
            >
              {adding ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <>
                  <MaterialCommunityIcons
                    name="map-marker-plus"
                    size={22}
                    color={marker && !adding ? "#fff" : c.textSecondary}
                  />
                  <Text
                    style={[
                      styles.addBtnText,
                      {
                        color: marker && !adding ? "#fff" : c.textSecondary,
                      },
                    ]}
                  >
                    {t("locations.useThisLocation")}
                  </Text>
                </>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
  },
  hint: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
    textAlign: "left",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myLocationBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    width: "48%",
  },
  myLocationLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    width: "48%",
  },
  addBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
