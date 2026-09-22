import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

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
              size={22}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerTitle}>
              Confirm Token
            </Text>

            <Text style={styles.headerSubtitle}>
              Review your queue details
            </Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progress}>
          <View style={styles.progressDone}>
            <Ionicons
              name="checkmark"
              size={16}
              color="#071014"
            />
          </View>

          <View style={styles.progressLine} />

          <View style={styles.progressActive}>
            <Text style={styles.progressNumber}>
              2
            </Text>
          </View>

          <View style={styles.progressLine} />

          <View style={styles.progressStep}>
            <Text style={styles.progressStepNumber}>
              3
            </Text>
          </View>
        </View>

        <View style={styles.progressLabels}>
          <Text style={styles.doneLabel}>Service</Text>
          <Text style={styles.activeLabel}>Details</Text>
          <Text style={styles.stepLabel}>Token</Text>
        </View>

        {/* Main */}
        <View style={styles.content}>

          <Text style={styles.title}>
            Almost there
          </Text>

          <Text style={styles.description}>
            Please confirm the following details before
            joining the queue.
          </Text>

          {/* Service Card */}
          <View style={styles.card}>

            <View style={styles.cardHeader}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="medical-outline"
                  size={25}
                  color="#20E6D2"
                />
              </View>

              <View style={styles.cardHeaderText}>
                <Text style={styles.smallLabel}>
                  SELECTED SERVICE
                </Text>

                <Text style={styles.serviceName}>
                  {service || 'General Consultation'}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailsRow}>

              <View style={styles.detail}>
                <Ionicons
                  name="people-outline"
                  size={18}
                  color="#20E6D2"
                />

                <View>
                  <Text style={styles.detailLabel}>
                    PEOPLE IN QUEUE
                  </Text>

                  <Text style={styles.detailValue}>
                    5 people
                  </Text>
                </View>
              </View>

              <View style={styles.detail}>
                <Ionicons
                  name="time-outline"
                  size={18}
                  color="#20E6D2"
                />

                <View>
                  <Text style={styles.detailLabel}>
                    EST. WAIT
                  </Text>

                  <Text style={styles.detailValue}>
                    {wait || '18 min'}
                  </Text>
                </View>
              </View>

            </View>
          </View>

          {/* Important Notice */}
          <View style={styles.notice}>

            <View style={styles.noticeIcon}>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color="#20E6D2"
              />
            </View>

            <View style={styles.noticeContent}>
              <Text style={styles.noticeTitle}>
                Before you confirm
              </Text>

              <Text style={styles.noticeText}>
                You will receive a digital token and your
                live queue position. Please arrive at the
                hospital before your turn.
              </Text>
            </View>

          </View>

          {/* Confirmation */}
          <View style={styles.confirmBox}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#20E6D2"
            />

            <Text style={styles.confirmText}>
              Your token will be generated instantly.
            </Text>
          </View>

        </View>

        {/* Bottom */}
        <View style={styles.bottom}>

          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: '/my-token',
                params: {
                  service:
                    service || 'General Consultation',
                  wait: wait || '18 min',
                  token: 'A-027',
                },
              })
            }
          >
            <Ionicons
              name="ticket-outline"
              size={20}
              color="#071014"
            />

            <Text style={styles.confirmButtonText}>
              Confirm & Get Token
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelText}>
              Change Service
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
    backgroundColor: '#070A0F',
  },

  container: {
    flex: 1,
    backgroundColor: '#070A0F',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 14,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#101720',
    borderWidth: 1,
    borderColor: '#1B2832',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#7D8996',
    fontSize: 12,
    marginTop: 3,
  },

  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 8,
  },

  progressDone: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#20E6D2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressActive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#20E6D2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121A22',
    borderWidth: 1,
    borderColor: '#26323C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressNumber: {
    color: '#071014',
    fontSize: 13,
    fontWeight: '800',
  },

  progressStepNumber: {
    color: '#66737F',
    fontSize: 13,
    fontWeight: '700',
  },

  progressLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#20E6D2',
    marginHorizontal: 8,
  },

  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 7,
  },

  doneLabel: {
    color: '#20E6D2',
    fontSize: 11,
    fontWeight: '700',
  },

  activeLabel: {
    color: '#20E6D2',
    fontSize: 11,
    fontWeight: '700',
  },

  stepLabel: {
    color: '#66737F',
    fontSize: 11,
    fontWeight: '600',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '900',
  },

  description: {
    color: '#7D8996',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 7,
    maxWidth: 480,
  },

  card: {
    backgroundColor: '#101820',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1D2933',
    padding: 18,
    marginTop: 22,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  cardHeaderText: {
    flex: 1,
  },

  smallLabel: {
    color: '#20E6D2',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  serviceName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#1D2933',
    marginVertical: 18,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    flex: 1,
  },

  detailLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.7,
  },

  detailValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 3,
  },

  notice: {
    flexDirection: 'row',
    backgroundColor: '#0D171D',
    borderWidth: 1,
    borderColor: '#1B3439',
    borderRadius: 16,
    padding: 15,
    marginTop: 16,
  },

  noticeIcon: {
    marginRight: 11,
  },

  noticeContent: {
    flex: 1,
  },

  noticeTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  noticeText: {
    color: '#71808C',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  confirmBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D141B',
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
    gap: 10,
  },

  confirmText: {
    color: '#84919C',
    fontSize: 11,
    flex: 1,
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: '#070A0F',
    borderTopWidth: 1,
    borderTopColor: '#111A22',
  },

  confirmButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: '#20E6D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  confirmButtonText: {
    color: '#071014',
    fontSize: 14,
    fontWeight: '900',
  },

  cancelButton: {
    alignItems: 'center',
    paddingTop: 12,
  },

  cancelText: {
    color: '#7D8996',
    fontSize: 12,
    fontWeight: '700',
  },
});