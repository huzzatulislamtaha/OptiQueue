import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { colors, fonts } from "../constants/theme";

export default function Confirmation() {
  const { service, wait } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={21}
              color={colors.textDark}
            />
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Confirm Token</Text>
            <Text style={styles.headerSubtitle}>
              Review your queue details
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressRow}>
            <View style={styles.progressCircleDone}>
              <Ionicons name="checkmark" size={15} color={colors.white} />
            </View>

            <View style={styles.progressLineActive} />

            <View style={styles.progressCircleActive}>
              <Text style={styles.progressActiveNumber}>2</Text>
            </View>

            <View style={styles.progressLine} />

            <View style={styles.progressCircle}>
              <Text style={styles.progressNumber}>3</Text>
            </View>
          </View>

          <View style={styles.progressLabels}>
            <Text style={styles.progressDoneText}>Service</Text>
            <Text style={styles.progressActiveText}>Details</Text>
            <Text style={styles.progressText}>Token</Text>
          </View>
        </View>

        {/* Main */}
        <View style={styles.content}>
          <Text style={styles.title}>Almost there</Text>

          <Text style={styles.description}>
            Review your selected service and queue information before getting
            your token.
          </Text>

          {/* Service Card */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceTop}>
              <View style={styles.serviceIcon}>
                <Ionicons name="medical" size={24} color={colors.primary} />
              </View>

              <View style={styles.serviceInfo}>
                <Text style={styles.serviceLabel}>SELECTED SERVICE</Text>
                <Text style={styles.serviceName}>
                  {service || "General Consultation"}
                </Text>
              </View>

              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={15} color={colors.white} />
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <View style={styles.detailItem}>
                <View style={styles.detailIcon}>
                  <Ionicons
                    name="people-outline"
                    size={18}
                    color={colors.primary}
                  />
                </View>
                <View>
                  <Text style={styles.detailLabel}>PEOPLE IN QUEUE</Text>
                  <Text style={styles.detailValue}>5 people</Text>
                </View>
              </View>

              <View style={styles.detailItem}>
                <View style={styles.detailIcon}>
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={colors.primary}
                  />
                </View>
                <View>
                  <Text style={styles.detailLabel}>EST. WAIT</Text>
                  <Text style={styles.detailValue}>
                    {wait || "18 min"}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Queue Preview */}
          <View style={styles.previewCard}>
            <View style={styles.previewIcon}>
              <Ionicons
                name="pulse-outline"
                size={21}
                color={colors.primary}
              />
            </View>

            <View style={styles.previewContent}>
              <Text style={styles.previewTitle}>Live queue tracking</Text>
              <Text style={styles.previewText}>
                After confirmation, you'll receive a digital token and live
                queue position.
              </Text>
            </View>
          </View>

          {/* Important */}
          <View style={styles.noticeCard}>
            <View style={styles.noticeIcon}>
              <Ionicons
                name="information"
                size={17}
                color={colors.primary}
              />
            </View>

            <View style={styles.noticeContent}>
              <Text style={styles.noticeTitle}>Before you confirm</Text>
              <Text style={styles.noticeText}>
                Please make sure the selected service is correct. Your token
                will be generated immediately after confirmation.
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/my-token",
                params: {
                  service: service || "General Consultation",
                  wait: wait || "18 min",
                  token: "A-027",
                },
              })
            }
          >
            <Ionicons name="ticket-outline" size={20} color={colors.white} />
            <Text style={styles.confirmButtonText}>
              Confirm & Get Token
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.changeButton}
            onPress={() => router.back()}
          >
            <Text style={styles.changeText}>Change Service</Text>
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
    height: 72,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.softBg,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    marginLeft: 13,
  },

  headerTitle: {
    color: colors.textPrimary,
    fontSize: 19,
    fontFamily: fonts.bold,
  },

  headerSubtitle: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 3,
    fontFamily: fonts.regular,
  },

  progressSection: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingTop: 18,
    paddingBottom: 15,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressCircleDone: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  progressCircleActive: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  progressCircle: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: colors.progressInactiveBg,
    borderWidth: 1,
    borderColor: colors.progressInactiveBorder,
    alignItems: "center",
    justifyContent: "center",
  },

  progressActiveNumber: {
    color: colors.white,
    fontSize: 11,
    fontFamily: fonts.bold,
  },

  progressNumber: {
    color: colors.textMuted,
    fontSize: 11,
    fontFamily: fonts.semiBold,
  },

  progressLineActive: {
    flex: 1,
    height: 2,
    backgroundColor: colors.primary,
    marginHorizontal: 7,
  },

  progressLine: {
    flex: 1,
    height: 2,
    backgroundColor: colors.progressLine,
    marginHorizontal: 7,
  },

  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  progressDoneText: {
    color: colors.primary,
    fontSize: 9,
    fontFamily: fonts.semiBold,
  },

  progressActiveText: {
    color: colors.primary,
    fontSize: 9,
    fontFamily: fonts.bold,
  },

  progressText: {
    color: colors.textMuted,
    fontSize: 9,
    fontFamily: fonts.medium,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 130,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontFamily: fonts.bold,
  },

  description: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
    fontFamily: fonts.regular,
  },

  serviceCard: {
    backgroundColor: colors.white,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    padding: 17,
    marginTop: 19,
  },

  serviceTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },

  serviceInfo: {
    flex: 1,
    marginLeft: 13,
  },

  serviceLabel: {
    color: colors.textMuted,
    fontSize: 8,
    letterSpacing: 0.8,
    fontFamily: fonts.bold,
  },

  serviceName: {
    color: colors.textPrimary,
    fontSize: 15,
    marginTop: 4,
    fontFamily: fonts.bold,
  },

  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 17,
  },

  detailRow: {
    flexDirection: "row",
  },

  detailItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  detailIcon: {
    width: 37,
    height: 37,
    borderRadius: 11,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  detailLabel: {
    color: colors.textMuted,
    fontSize: 7,
    letterSpacing: 0.5,
    fontFamily: fonts.bold,
  },

  detailValue: {
    color: colors.textPrimary,
    fontSize: 13,
    marginTop: 3,
    fontFamily: fonts.bold,
  },

  previewCard: {
    marginTop: 13,
    backgroundColor: colors.previewBg,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  previewIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: colors.previewIconBg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  previewContent: {
    flex: 1,
  },

  previewTitle: {
    color: colors.textPrimary,
    fontSize: 12,
    fontFamily: fonts.bold,
  },

  previewText: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
    fontFamily: fonts.regular,
  },

  noticeCard: {
    marginTop: 12,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    padding: 14,
    flexDirection: "row",
  },

  noticeIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  noticeContent: {
    flex: 1,
  },

  noticeTitle: {
    color: colors.textPrimary,
    fontSize: 11,
    fontFamily: fonts.bold,
  },

  noticeText: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
    fontFamily: fonts.regular,
  },

  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 18,
    paddingTop: 11,
    paddingBottom: 17,
  },

  confirmButton: {
    height: 53,
    borderRadius: 15,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  confirmButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.bold,
  },

  changeButton: {
    alignItems: "center",
    paddingTop: 11,
  },

  changeText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontFamily: fonts.semiBold,
  },
});