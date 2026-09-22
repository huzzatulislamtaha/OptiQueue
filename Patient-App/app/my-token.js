import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import BottomNav from "../components/BottomNav";
import { COLORS } from "../constants/theme";

export default function MyToken() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>ACTIVE QUEUE</Text>
            <Text style={styles.title}>My Token</Text>
          </View>

          <Pressable
            onPress={() => router.push("/notifications")}
            style={styles.iconButton}
          >
            <Ionicons
              name="notifications-outline"
              size={21}
              color={COLORS.white}
            />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>
            CURRENT TOKEN
          </Text>

          <Text style={styles.token}>A-026</Text>

          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>
              WAITING
            </Text>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <View>
              <Text style={styles.meta}>SERVICE</Text>
              <Text style={styles.value}>
                General Consultation
              </Text>
            </View>

            <View>
              <Text style={styles.meta}>POSITION</Text>
              <Text style={styles.value}>#05</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.meta}>EST. WAIT</Text>
              <Text style={styles.neon}>18 min</Text>
            </View>

            <View>
              <Text style={styles.meta}>COUNTER</Text>
              <Text style={styles.value}>01</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={styles.queueButton}
          onPress={() => router.push("/queue")}
        >
          <Ionicons
            name="pulse-outline"
            size={20}
            color={COLORS.neon}
          />

          <Text style={styles.queueText}>
            Track Live Queue
          </Text>

          <Ionicons
            name="chevron-forward"
            size={18}
            color={COLORS.secondary}
          />
        </Pressable>

        <Text style={styles.sectionTitle}>
          Queue Timeline
        </Text>

        <View style={styles.timeline}>
          <Timeline
            icon="checkmark"
            title="Token Created"
            time="02:10 PM"
            done
          />

          <Timeline
            icon="people"
            title="Waiting in Queue"
            time="Current"
            active
          />

          <Timeline
            icon="megaphone-outline"
            title="Token Called"
            time="Pending"
          />

          <Timeline
            icon="medical-outline"
            title="Service"
            time="Pending"
          />
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

function Timeline({ icon, title, time, done, active }) {
  return (
    <View style={styles.timelineItem}>
      <View
        style={[
          styles.timelineIcon,
          active && styles.activeTimeline,
          done && styles.doneTimeline,
        ]}
      >
        <Ionicons
          name={icon}
          size={16}
          color={
            active || done
              ? COLORS.neon
              : COLORS.secondary
          }
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.timelineTitle}>
          {title}
        </Text>

        <Text style={styles.timelineTime}>
          {time}
        </Text>
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
    paddingHorizontal: 20,
    paddingTop: 58,
    paddingBottom: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  small: {
    color: COLORS.neon,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "900",
    marginTop: 4,
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    backgroundColor: COLORS.surface2,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(32,230,210,0.25)",
    alignItems: "center",
  },

  label: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.3,
  },

  token: {
    color: COLORS.white,
    fontSize: 54,
    fontWeight: "900",
    marginTop: 4,
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

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  meta: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: "700",
  },

  value: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 5,
  },

  neon: {
    color: COLORS.neon,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
  },

  queueButton: {
    height: 56,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 10,
  },

  queueText: {
    color: COLORS.white,
    fontWeight: "700",
    flex: 1,
    fontSize: 13,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 14,
  },

  timeline: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 13,
  },

  timelineIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: COLORS.surface2,
    alignItems: "center",
    justifyContent: "center",
  },

  activeTimeline: {
    backgroundColor: "rgba(32,230,210,0.10)",
  },

  doneTimeline: {
    backgroundColor: "rgba(39,230,165,0.08)",
  },

  timelineTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },

  timelineTime: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 4,
  },
});