import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export default function QueueCard({
  token,
  position,
  status,
  current,
}) {
  return (
    <View
      style={[
        styles.card,
        current && styles.currentCard,
      ]}
    >
      <View>
        <Text style={styles.token}>{token}</Text>
        <Text style={styles.position}>
          Position #{position}
        </Text>
      </View>

      <View
        style={[
          styles.badge,
          current && styles.currentBadge,
        ]}
      >
        <Text
          style={[
            styles.badgeText,
            current && styles.currentText,
          ]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  currentCard: {
    borderColor: "rgba(32,230,210,0.35)",
  },

  token: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "800",
  },

  position: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "rgba(141,153,168,0.10)",
  },

  currentBadge: {
    backgroundColor: "rgba(32,230,210,0.10)",
  },

  badgeText: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "700",
  },

  currentText: {
    color: COLORS.neon,
  },
});