import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  const { t } = useTranslation();
  return (
    <ThemedView style={styles.container}>
      <Text>{t("modal.title")}</Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text>{t("modal.goHome")}</Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
