import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, fonts } from "../constants/theme";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>WELCOME TO</Text>
              <Text style={styles.logoText}>OptiQueue</Text>
            </View>

            <TouchableOpacity
              style={styles.notificationButton}
              onPress={() => router.push("/notifications")}
              activeOpacity={0.8}
            >
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.textPrimary}
              />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>

          {/* Welcome Card */}
          <View style={styles.welcomeCard}>
            <View style={styles.welcomeContent}>
              <View style={styles.smartBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.welcomeSmall}>SMART HOSPITAL</Text>
              </View>

              <Text style={styles.welcomeTitle}>
                Skip the waiting.{"\n"}
                <Text style={styles.greenText}>Manage your time.</Text>
              </Text>

              <Text style={styles.welcomeDescription}>
                Get your digital token and track your queue in real time.
              </Text>
            </View>

            <View style={styles.pulseCircle}>
              <Ionicons name="pulse" size={34} color={colors.primary} />
            </View>
          </View>

          {/* Get Digital Token */}
          <TouchableOpacity
            style={styles.tokenButton}
            activeOpacity={0.88}
            onPress={() => router.push("/get-token")}
          >
            <View style={styles.tokenIcon}>
              <Ionicons
                name="ticket-outline"
                size={23}
                color={colors.white}
              />
            </View>

            <View style={styles.tokenTextContainer}>
              <Text style={styles.tokenTitle}>Get Digital Token</Text>
              <Text style={styles.tokenSubtitle}>Join a hospital queue</Text>
            </View>

            <View style={styles.tokenArrow}>
              <Ionicons
                name="arrow-forward"
                size={19}
                color={colors.primary}
              />
            </View>
          </TouchableOpacity>

          {/* Active Token Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Token</Text>
            <TouchableOpacity onPress={() => router.push("/my-token")}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>

          {/* Active Token Card */}
          <TouchableOpacity
            style={styles.activeCard}
            activeOpacity={0.88}
            onPress={() => router.push("/my-token")}
          >
            <View style={styles.tokenBadge}>
              <Text style={styles.tokenBadgeSmall}>TOKEN</Text>
              <Text style={styles.tokenBadgeText}>A-027</Text>
            </View>

            <View style={styles.activeInfo}>
              <Text style={styles.serviceName}>General Consultation</Text>
              <View style={styles.waitingBadge}>
                <View style={styles.smallGreenDot} />
                <Text style={styles.statusText}>Waiting</Text>
              </View>
            </View>

            <View style={styles.waitInfo}>
              <Text style={styles.positionLabel}>POSITION</Text>
              <Text style={styles.positionValue}>#06</Text>
            </View>
          </TouchableOpacity>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="time-outline"
                  size={20}
                  color={colors.primary}
                />
              </View>
              <View style={styles.statText}>
                <Text style={styles.statLabel}>EST. WAIT</Text>
                <Text style={styles.statValue}>18 min</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="people-outline"
                  size={20}
                  color={colors.primary}
                />
              </View>
              <View style={styles.statText}>
                <Text style={styles.statLabel}>AHEAD</Text>
                <Text style={styles.statValue}>5 people</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.quickRow}>
            {/* Live Queue */}
            <TouchableOpacity
              style={styles.quickCard}
              activeOpacity={0.88}
              onPress={() => router.push("/queue")}
            >
              <View style={styles.quickIcon}>
                <Ionicons
                  name="list-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.quickTitle}>Live Queue</Text>
              <Text style={styles.quickSubtitle}>View current queue</Text>
              <View style={styles.quickArrow}>
                <Ionicons
                  name="arrow-forward"
                  size={14}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>

            {/* Alerts */}
            <TouchableOpacity
              style={styles.quickCard}
              activeOpacity={0.88}
              onPress={() => router.push("/notifications")}
            >
              <View style={styles.quickIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={21}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.quickTitle}>Alerts</Text>
              <Text style={styles.quickSubtitle}>Queue updates</Text>
              <View style={styles.quickArrow}>
                <Ionicons
                  name="arrow-forward"
                  size={14}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ height: 105 }} />
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          {/* Home */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/")}
          >
            <View style={styles.activeNavIcon}>
              <Ionicons name="home" size={20} color={colors.primary} />
            </View>
            <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
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
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/profile")}
          >
            <Ionicons
              name="person-outline"
              size={21}
              color={colors.textMuted}
            />
            <Text style={styles.navText}>Profile</Text>
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

  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  greeting: {
    color: colors.textMuted,
    fontSize: 9,
    letterSpacing: 1.8,
    fontFamily: fonts.semiBold,
  },

  logoText: {
    color: colors.textPrimary,
    fontSize: 25,
    marginTop: 3,
    fontFamily: fonts.bold,
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  welcomeCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 21,
    padding: 20,
    minHeight: 185,
    marginBottom: 15,
    flexDirection: "row",
    overflow: "hidden",
  },

  welcomeContent: {
    flex: 1,
    zIndex: 2,
  },

  smartBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: 7,
  },

  welcomeSmall: {
    color: colors.primary,
    fontSize: 9,
    letterSpacing: 1.4,
    fontFamily: fonts.bold,
  },

  welcomeTitle: {
    color: colors.textPrimary,
    fontSize: 24,
    lineHeight: 31,
    fontFamily: fonts.bold,
  },

  greenText: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },

  welcomeDescription: {
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 11,
    maxWidth: 245,
    fontFamily: fonts.regular,
  },

  pulseCircle: {
    position: "absolute",
    right: -18,
    bottom: -20,
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  tokenButton: {
    backgroundColor: colors.primary,
    borderRadius: 17,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },

  tokenIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: colors.primaryDark,
    justifyContent: "center",
    alignItems: "center",
  },

  tokenTextContainer: {
    flex: 1,
    marginLeft: 13,
  },

  tokenTitle: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.bold,
  },

  tokenSubtitle: {
    color: colors.primarySoftText,
    fontSize: 10,
    marginTop: 3,
    fontFamily: fonts.regular,
  },

  tokenArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 11,
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    marginBottom: 12,
    fontFamily: fonts.bold,
  },

  viewText: {
    color: colors.primary,
    fontSize: 11,
    fontFamily: fonts.semiBold,
  },

  activeCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  tokenBadge: {
    width: 61,
    height: 61,
    borderRadius: 16,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },

  tokenBadgeSmall: {
    color: colors.primary,
    fontSize: 7,
    letterSpacing: 1,
    fontFamily: fonts.bold,
  },

  tokenBadgeText: {
    color: colors.textPrimary,
    fontSize: 15,
    marginTop: 3,
    fontFamily: fonts.bold,
  },

  activeInfo: {
    flex: 1,
    marginLeft: 13,
  },

  serviceName: {
    color: colors.textPrimary,
    fontSize: 13,
    fontFamily: fonts.semiBold,
  },

  waitingBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  smallGreenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 5,
  },

  statusText: {
    color: colors.primary,
    fontSize: 10,
    fontFamily: fonts.semiBold,
  },

  waitInfo: {
    alignItems: "flex-end",
  },

  positionLabel: {
    color: colors.textMuted,
    fontSize: 8,
    letterSpacing: 1,
    fontFamily: fonts.regular,
  },

  positionValue: {
    color: colors.textPrimary,
    fontSize: 20,
    marginTop: 3,
    fontFamily: fonts.bold,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },

  statText: {
    marginLeft: 9,
  },

  statLabel: {
    color: colors.textMuted,
    fontSize: 8,
    letterSpacing: 1,
    fontFamily: fonts.regular,
  },

  statValue: {
    color: colors.textPrimary,
    fontSize: 13,
    marginTop: 4,
    fontFamily: fonts.bold,
  },

  quickRow: {
    flexDirection: "row",
    gap: 10,
  },

  quickCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 17,
    padding: 15,
    minHeight: 137,
  },

  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },

  quickTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontFamily: fonts.bold,
  },

  quickSubtitle: {
    color: colors.textMuted,
    fontSize: 9,
    marginTop: 4,
    fontFamily: fonts.regular,
  },

  quickArrow: {
    position: "absolute",
    right: 13,
    bottom: 13,
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: colors.infoBg,
    justifyContent: "center",
    alignItems: "center",
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