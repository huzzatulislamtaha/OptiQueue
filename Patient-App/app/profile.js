import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BottomNav from "../components/BottomNav";
import { COLORS } from "../constants/theme";

const menu = [
  {
    icon: "person-outline",
    title: "Personal Information",
  },
  {
    icon: "time-outline",
    title: "Token History",
  },
  {
    icon: "notifications-outline",
    title: "Notification Settings",
  },
  {
    icon: "help-circle-outline",
    title: "Help & Support",
  },
  {
    icon: "settings-outline",
    title: "App Settings",
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.small}>ACCOUNT</Text>

        <Text style={styles.title}>Profile</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>
              Patient User
            </Text>

            <Text style={styles.email}>
              patient@example.com
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color={COLORS.secondary}
          />
        </View>

        <View style={styles.menu}>
          {menu.map((item) => (
            <Pressable
              key={item.title}
              style={styles.menuItem}
            >
              <View style={styles.menuIcon}>
                <Ionicons
                  name={item.icon}
                  size={20}
                  color={COLORS.neon}
                />
              </View>

              <Text style={styles.menuText}>
                {item.title}
              </Text>

              <Ionicons
                name="chevron-forward"
                size={18}
                color={COLORS.secondary}
              />
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.logout}>
          <Ionicons
            name="log-out-outline"
            size={20}
            color={COLORS.danger}
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </Pressable>

        <Text style={styles.version}>
          OptiQueue Patient App · v1.0.0
        </Text>
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
    padding: 20,
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

  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "rgba(32,230,210,0.10)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  avatarText: {
    color: COLORS.neon,
    fontSize: 22,
    fontWeight: "900",
  },

  name: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "800",
  },

  email: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 4,
  },

  menu: {
    backgroundColor: COLORS.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    marginTop: 16,
  },

  menuItem: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "rgba(32,230,210,0.07)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  menuText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    flex: 1,
  },

  logout: {
    height: 54,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "rgba(255,102,122,0.18)",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: {
    color: COLORS.danger,
    fontSize: 13,
    fontWeight: "700",
  },

  version: {
    color: COLORS.muted,
    textAlign: "center",
    fontSize: 9,
    marginTop: 22,
  },
});