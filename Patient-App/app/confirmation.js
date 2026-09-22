import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import { COLORS } from "../constants/theme";

export default function Confirmation() {
  const { service } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.success}>
          <Ionicons
            name="checkmark"
            size={34}
            color={COLORS.neon}
          />
        </View>

        <Text style={styles.small}>
          TOKEN CONFIRMED
        </Text>

        <Text style={styles.title}>
          You're in the queue
        </Text>

        <View style={styles.tokenCard}>
          <Text style={styles.tokenLabel}>
            YOUR TOKEN
          </Text>

          <Text style={styles.token}>A-026</Text>

          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>
              WAITING
            </Text>
          </View>

          <View style={styles.line} />

          <Text style={styles.service}>{service}</Text>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>
                POSITION
              </Text>

              <Text style={styles.value}>#05</Text>
            </View>

            <View>
              <Text style={styles.label}>
                EST. WAIT
              </Text>

              <Text style={styles.neon}>18 min</Text>
            </View>

            <View>
              <Text style={styles.label}>
                COUNTER
              </Text>

              <Text style={styles.value}>01</Text>
            </View>
          </View>
        </View>

        <View style={styles.qr}>
          <View style={styles.qrBox}>
            <Text style={styles.qrText}>QR</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.qrTitle}>
              Your digital token is ready
            </Text>

            <Text style={styles.qrSub}>
              Keep this token available while waiting.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Pressable
          style={styles.primary}
          onPress={() => router.replace("/my-token")}
        >
          <Text style={styles.primaryText}>
            View My Token
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondary}
          onPress={() => router.replace("/queue")}
        >
          <Text style={styles.secondaryText}>
            View Live Queue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    paddingTop: 65,
  },

  success: {
    width: 62,
    height: 62,
    borderRadius: 22,
    backgroundColor: "rgba(32,230,210,0.10)",
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  small: {
    color: COLORS.neon,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  title: {
    color: COLORS.white,
    fontSize: 29,
    fontWeight: "900",
    marginTop: 7,
  },

  tokenCard: {
    marginTop: 25,
    backgroundColor: COLORS.surface2,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.25)",
    alignItems: "center",
  },

  tokenLabel: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.3,
  },

  token: {
    color: COLORS.white,
    fontSize: 54,
    fontWeight: "900",
    marginTop: 3,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(39,230,165,0.08)",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 8,
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
    width: "100%",
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 20,
  },

  service: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  label: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
  },

  value: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 5,
  },

  neon: {
    color: COLORS.neon,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 5,
  },

  qr: {
    marginTop: 16,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  qrBox: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  qrText: {
    color: "#111",
    fontSize: 18,
    fontWeight: "900",
  },

  qrTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },

  qrSub: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 5,
    lineHeight: 15,
  },

  bottom: {
    padding: 20,
    gap: 10,
  },

  primary: {
    height: 54,
    borderRadius: 17,
    backgroundColor: COLORS.neon,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryText: {
    color: "#06100F",
    fontWeight: "900",
  },

  secondary: {
    height: 54,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    color: COLORS.white,
    fontWeight: "700",
  },
});