import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

export default function ServiceCard({
  icon,
  title,
  waiting,
  waitTime,
  onPress,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.85 },
      ]}
      onPress={onPress}
    >
      <View style={styles.icon}>
        <Ionicons
          name={icon}
          size={25}
          color={COLORS.neon}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.waiting}>
          {waiting} patients waiting
        </Text>

        <Text style={styles.time}>
          Estimated wait · {waitTime}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={COLORS.secondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "rgba(32,230,210,0.09)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  title: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "700",
  },

  waiting: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 4,
  },

  time: {
    color: COLORS.neon,
    fontSize: 11,
    marginTop: 4,
  },
});

