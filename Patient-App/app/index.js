import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import BottomNav from "../components/BottomNav";
import TokenCard from "../components/TokenCard";
import { COLORS } from "../constants/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>WELCOME BACK</Text>
            <Text style={styles.title}>Hello, Patient 👋</Text>
          </View>

          <Pressable
            style={styles.notification}
            onPress={() => router.push("/notifications")}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={COLORS.white}
            />

            <View style={styles.notificationDot} />
          </Pressable>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroGlow} />

          <Text style={styles.heroSmall}>
            SMART HOSPITAL QUEUE
          </Text>

          <Text style={styles.heroTitle}>
            Smart Queue.
            {"\n"}
            Less Waiting.
          </Text>

          <Text style={styles.heroText}>
            Get your digital token and track your queue
            in real time.
          </Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push("/services")}
          >
            <Text style={styles.primaryText}>
              Get Digital Token
            </Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#06100F"
            />
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Active Token
          </Text>

          <Pressable
            onPress={() => router.push("/my-token")}
          >
            <Text style={styles.link}>View</Text>
          </Pressable>
        </View>

        <TokenCard />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Quick Actions
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            style={styles.action}
            onPress={() => router.push("/services")}
          >
            <View style={styles.actionIcon}>
              <Ionicons
                name="ticket-outline"
                size={22}
                color={COLORS.neon}
              />
            </View>

            <Text style={styles.actionTitle}>
              Get Token
            </Text>

            <Text style={styles.actionText}>
              Join a queue
            </Text>
          </Pressable>

          <Pressable
            style={styles.action}
            onPress={() => router.push("/queue")}
          >
            <View style={styles.actionIcon}>
              <Ionicons
                name="pulse-outline"
                size={22}
                color={COLORS.blue}
              />
            </View>

            <Text style={styles.actionTitle}>
              Live Queue
            </Text>

            <Text style={styles.actionText}>
              Track position
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 58,
    paddingBottom: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 23,
    fontWeight: "800",
    marginTop: 5,
  },

  notification: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLORS.neon,
    top: 10,
    right: 11,
  },

  hero: {
    backgroundColor: COLORS.surface2,
    borderRadius: 28,
    padding: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.20)",
  },

  heroGlow: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: "rgba(32,230,210,0.06)",
    right: -50,
    top: -60,
  },

  heroSmall: {
    color: COLORS.neon,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "900",
    marginTop: 10,
  },

  heroText: {
    color: COLORS.secondary,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
    maxWidth: 290,
  },

  primaryButton: {
    height: 52,
    borderRadius: 16,
    backgroundColor: COLORS.neon,
    marginTop: 22,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  primaryText: {
    color: "#06100F",
    fontWeight: "900",
    fontSize: 14,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 12,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "800",
  },

  link: {
    color: COLORS.neon,
    fontSize: 12,
    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
  },

  action: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
  },

  actionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "rgba(32,230,210,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },

  actionTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 12,
  },

  actionText: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },
});