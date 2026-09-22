import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/theme";

const notifications = [
  {
    icon: "megaphone-outline",
    title: "Your token is approaching",
    text: "A-026 is now 5 positions away.",
    time: "2 min ago",
    unread: true,
  },
  {
    icon: "time-outline",
    title: "Waiting time updated",
    text: "Estimated waiting time is now 18 minutes.",
    time: "8 min ago",
    unread: true,
  },
  {
    icon: "ticket-outline",
    title: "Token created",
    text: "Your digital token A-026 was created successfully.",
    time: "20 min ago",
    unread: false,
  },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.small}>UPDATES</Text>

        <Text style={styles.title}>
          Notifications
        </Text>

        <Text style={styles.subtitle}>
          Stay updated about your queue.
        </Text>

        <View style={styles.list}>
          {notifications.map((item, index) => (
            <View
              key={index}
              style={[
                styles.card,
                item.unread && styles.unread,
              ]}
            >
              <View style={styles.icon}>
                <Ionicons
                  name={item.icon}
                  size={21}
                  color={COLORS.neon}
                />
              </View>

              <View style={styles.info}>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.text}>
                  {item.text}
                </Text>

                <Text style={styles.time}>
                  {item.time}
                </Text>
              </View>

              {item.unread && (
                <View style={styles.dot} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
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
    paddingTop: 58,
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
    marginTop: 5,
  },

  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 5,
  },

  list: {
    marginTop: 24,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    flexDirection: "row",
    marginBottom: 12,
  },

  unread: {
    borderColor: "rgba(32,230,210,0.18)",
  },

  icon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(32,230,210,0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  cardTitle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "800",
  },

  text: {
    color: COLORS.secondary,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 5,
  },

  time: {
    color: COLORS.muted,
    fontSize: 9,
    marginTop: 7,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.neon,
  },
});