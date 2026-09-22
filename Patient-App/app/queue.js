import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import BottomNav from "../components/BottomNav";
import QueueCard from "../components/QueueCard";
import { COLORS } from "../constants/theme";

export default function Queue() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.small}>REAL-TIME</Text>
        <Text style={styles.title}>Live Queue</Text>

        <Text style={styles.subtitle}>
          General Consultation · Counter 01
        </Text>

        <View style={styles.nowCard}>
          <Text style={styles.nowLabel}>
            NOW SERVING
          </Text>

          <Text style={styles.nowToken}>A-024</Text>

          <View style={styles.counter}>
            <Text style={styles.counterText}>
              Counter 01
            </Text>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>
              YOUR POSITION
            </Text>

            <Text style={styles.statValue}>#05</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statLabel}>
              EST. WAIT
            </Text>

            <Text style={styles.neon}>18 min</Text>
          </View>
        </View>

        <Text style={styles.section}>
          Upcoming
        </Text>

        <QueueCard
          token="A-025"
          position="04"
          status="NEXT"
        />

        <QueueCard
          token="A-026"
          position="05"
          status="YOU"
          current
        />

        <QueueCard
          token="A-027"
          position="06"
          status="WAITING"
        />

        <QueueCard
          token="A-028"
          position="07"
          status="WAITING"
        />
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

  nowCard: {
    marginTop: 24,
    backgroundColor: COLORS.surface2,
    borderRadius: 28,
    padding: 26,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.25)",
  },

  nowLabel: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  nowToken: {
    color: COLORS.neon,
    fontSize: 52,
    fontWeight: "900",
    marginTop: 5,
  },

  counter: {
    backgroundColor: "rgba(32,230,210,0.08)",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 15,
    marginTop: 8,
  },

  counterText: {
    color: COLORS.neon,
    fontSize: 10,
    fontWeight: "700",
  },

  stats: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
  },

  stat: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  statLabel: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
  },

  statValue: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },

  neon: {
    color: COLORS.neon,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },

  section: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 13,
  },
});