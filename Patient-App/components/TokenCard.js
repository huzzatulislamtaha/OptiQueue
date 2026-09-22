import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

export default function TokenCard() {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View>
          <Text style={styles.label}>YOUR ACTIVE TOKEN</Text>

          <Text style={styles.token}>A-026</Text>
        </View>

        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>WAITING</Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.details}>
        <View>
          <Text style={styles.detailLabel}>SERVICE</Text>
          <Text style={styles.detailValue}>
            General Consultation
          </Text>
        </View>

        <View>
          <Text style={styles.detailLabel}>POSITION</Text>
          <Text style={styles.detailValue}>#05</Text>
        </View>

        <View>
          <Text style={styles.detailLabel}>EST. WAIT</Text>
          <Text style={styles.detailValue}>18 min</Text>
        </View>
      </View>

      <View style={styles.counter}>
        <Ionicons
          name="location-outline"
          size={16}
          color={COLORS.neon}
        />

        <Text style={styles.counterText}>
          Counter 01 · General Consultation
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface2,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.20)",
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  label: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  token: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: "900",
    marginTop: 4,
    letterSpacing: 1,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "rgba(39,230,165,0.08)",
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.success,
    marginRight: 6,
  },

  statusText: {
    color: COLORS.success,
    fontSize: 10,
    fontWeight: "800",
  },

  line: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 18,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  detailLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
  },

  detailValue: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },

  counter: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  counterText: {
    color: COLORS.secondary,
    fontSize: 11,
    marginLeft: 7,
  },
});