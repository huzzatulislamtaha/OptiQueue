import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },

  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  subtitle: {
    color: COLORS.secondary,
    fontSize: 14,
    marginTop: 6,
  },
});
