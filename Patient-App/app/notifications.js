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

const notifications = [
  {
    id: 1,
    icon: "notifications",
    title: "Token Confirmed",
    message: "Your token A-027 has been successfully confirmed.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    icon: "time",
    title: "Queue Update",
    message: "There are currently 5 patients ahead of you.",
    time: "5 min ago",
    unread: true,
  },
  {
    id: 3,
    icon: "person",
    title: "Now Serving",
    message: "Currently serving token A-021.",
    time: "8 min ago",
    unread: false,
  },
  {
    id: 4,
    icon: "checkmark-circle",
    title: "Service Available",
    message: "General Consultation service is currently available.",
    time: "15 min ago",
    unread: false,
  },
];

export default function Notifications() {
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
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.subtitle}>
              Stay updated with your queue
            </Text>
          </View>

          <TouchableOpacity style={styles.moreButton} activeOpacity={0.8}>
            <Ionicons
              name="ellipsis-horizontal"
              size={21}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Live Queue Status */}
          <View style={styles.statusCard}>
            <View style={styles.statusIcon}>
              <Ionicons name="pulse" size={23} color={colors.primary} />
            </View>

            <View style={styles.statusText}>
              <Text style={styles.statusTitle}>Queue is Live</Text>
              <Text style={styles.statusDescription}>
                Your queue information is being updated.
              </Text>
            </View>

            <View style={styles.liveIndicator}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>

          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Updates</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.markText}>Mark all read</Text>
            </TouchableOpacity>
          </View>

          {/* Notifications */}
          {notifications.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.notificationCard,
                item.unread && styles.unreadCard,
              ]}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.notificationIcon,
                  item.unread && styles.unreadIcon,
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={20}
                  color={colors.primary}
                />
              </View>

              <View style={styles.notificationContent}>
                <View style={styles.notificationTop}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  {item.unread && <View style={styles.unreadDot} />}
                </View>

                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={16}
                color={colors.chevron}
                style={styles.chevron}
              />
            </TouchableOpacity>
          ))}

          <View style={{ height: 100 }} />
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
          <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
            <View style={styles.activeNavIcon}>
              <Ionicons
                name="notifications"
                size={20}
                color={colors.primary}
              />
            </View>
            <Text style={[styles.navText, styles.activeNavText]}>
              Alerts
            </Text>
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

  moreButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 100,
  },

  statusCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  statusIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  statusText: {
    flex: 1,
  },

  statusTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontFamily: fonts.bold,
  },

  statusDescription: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.regular,
  },

  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginRight: 5,
  },

  liveText: {
    color: colors.primary,
    fontSize: 8,
    fontFamily: fonts.bold,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    fontFamily: fonts.bold,
  },

  markText: {
    color: colors.primary,
    fontSize: 11,
    fontFamily: fonts.semiBold,
  },

  notificationCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 17,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  unreadCard: {
    borderColor: colors.unreadBorder,
    backgroundColor: colors.unreadBg,
  },

  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: colors.softBg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  unreadIcon: {
    backgroundColor: colors.primaryLight,
  },

  notificationContent: {
    flex: 1,
  },

  notificationTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  notificationTitle: {
    color: colors.textPrimary,
    fontSize: 14,
    fontFamily: fonts.bold,
  },

  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginLeft: 8,
  },

  message: {
    color: colors.textMuted,
    fontSize: 11.5,
    lineHeight: 18,
    marginTop: 5,
    fontFamily: fonts.regular,
  },

  time: {
    color: colors.timeText,
    fontSize: 9.5,
    marginTop: 7,
    fontFamily: fonts.regular,
  },

  chevron: {
    marginLeft: 7,
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