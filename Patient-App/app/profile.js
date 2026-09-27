import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, fonts } from "../constants/theme";

export default function Profile() {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Ionicons
              name="arrow-back"
              size={21}
              color={colors.textPrimary}
            />
          </TouchableOpacity>

          <View style={styles.headerInfo}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.subtitle}>
              App preferences & information
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* App Identity */}
          <View style={styles.profileCard}>
            <View style={styles.logo}>
              <Ionicons name="medical" size={29} color={colors.primary} />
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.appName}>OptiQueue</Text>
              <Text style={styles.appDescription}>
                Smart Hospital Queue System
              </Text>

              <View style={styles.systemBadge}>
                <View style={styles.systemDot} />
                <Text style={styles.systemText}>DIGITAL QUEUE</Text>
              </View>
            </View>
          </View>

          {/* Preferences */}
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.optionCard}>
            {/* Notifications */}
            <View style={styles.optionRow}>
              <View style={styles.optionIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>

              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>Notifications</Text>
                <Text style={styles.optionSubtitle}>
                  Receive queue updates
                </Text>
              </View>

              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{
                  false: colors.switchTrackOff,
                  true: colors.switchTrackOn,
                }}
                thumbColor={
                  notifications ? colors.primary : colors.white
                }
              />
            </View>

            <View style={styles.divider} />

            {/* Language */}
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionIcon}>
                <Ionicons
                  name="language-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>

              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>Language</Text>
                <Text style={styles.optionSubtitle}>English</Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color={colors.chevron}
              />
            </TouchableOpacity>
          </View>

          {/* App Information */}
          <Text style={styles.sectionTitle}>App Information</Text>

          <View style={styles.optionCard}>
            {/* About */}
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionIcon}>
                <Ionicons
                  name="information-circle-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>

              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>About OptiQueue</Text>
                <Text style={styles.optionSubtitle}>
                  Smart digital hospital queue management
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color={colors.chevron}
              />
            </TouchableOpacity>

            <View style={styles.divider} />

            {/* Privacy */}
            <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
              <View style={styles.optionIcon}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>

              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>Privacy & Security</Text>
                <Text style={styles.optionSubtitle}>
                  Your queue information is protected
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color={colors.chevron}
              />
            </TouchableOpacity>

            <View style={styles.divider} />

            {/* Version */}
            <View style={styles.optionRow}>
              <View style={styles.optionIcon}>
                <Ionicons
                  name="code-slash-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>

              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>Version</Text>
                <Text style={styles.optionSubtitle}>1.0.0</Text>
              </View>

              <View style={styles.versionBadge}>
                <Text style={styles.versionText}>v1.0</Text>
              </View>
            </View>
          </View>

          {/* Support */}
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity style={styles.supportCard} activeOpacity={0.8}>
            <View style={styles.supportIcon}>
              <Ionicons
                name="help-circle-outline"
                size={23}
                color={colors.primary}
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Help & Support</Text>
              <Text style={styles.optionSubtitle}>
                Need help using OptiQueue?
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={19}
              color={colors.chevron}
            />
          </TouchableOpacity>

          <View style={{ height: 110 }} />
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          {/* Home */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/")}
          >
            <Ionicons
              name="home-outline"
              size={21}
              color={colors.textMuted}
            />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          {/* My Token */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/my-token")}
          >
            <Ionicons
              name="ticket-outline"
              size={21}
              color={colors.textMuted}
            />
            <Text style={styles.navText}>My Token</Text>
          </TouchableOpacity>

          {/* Alerts */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/notifications")}
          >
            <Ionicons
              name="notifications-outline"
              size={21}
              color={colors.textMuted}
            />
            <Text style={styles.navText}>Alerts</Text>
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
            <View style={styles.activeNavIcon}>
              <Ionicons name="person" size={20} color={colors.primary} />
            </View>
            <Text style={[styles.navText, styles.activeNavText]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  headerInfo: {
    flex: 1,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 21,
    fontFamily: fonts.bold,
  },

  subtitle: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 3,
    fontFamily: fonts.regular,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  profileCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  profileInfo: {
    flex: 1,
  },

  appName: {
    color: colors.textPrimary,
    fontSize: 19,
    fontFamily: fonts.bold,
  },

  appDescription: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.regular,
  },

  systemBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.infoBg,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 8,
  },

  systemDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 5,
  },

  systemText: {
    color: colors.primary,
    fontSize: 7,
    letterSpacing: 0.8,
    fontFamily: fonts.bold,
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    marginBottom: 11,
    fontFamily: fonts.bold,
  },

  optionCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    marginBottom: 24,
    overflow: "hidden",
  },

  optionRow: {
    minHeight: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  optionIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  optionText: {
    flex: 1,
  },

  optionTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontFamily: fonts.semiBold,
  },

  optionSubtitle: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 4,
    lineHeight: 15,
    fontFamily: fonts.regular,
  },

  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginLeft: 71,
  },

  versionBadge: {
    backgroundColor: colors.infoBg,
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  versionText: {
    color: colors.primary,
    fontSize: 8,
    fontFamily: fonts.bold,
  },

  supportCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  supportIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 65,
  },

  activeNavIcon: {
    width: 34,
    height: 28,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    color: colors.textMuted,
    fontSize: 9,
    marginTop: 4,
    fontFamily: fonts.medium,
  },

  activeNavText: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});