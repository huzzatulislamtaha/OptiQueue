import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function MyToken() {
  const params = useLocalSearchParams();

  const token = params.token || 'A-027';
  const service = params.service || 'General Consultation';
  const wait = params.wait || '18 min';

  const [cancelled, setCancelled] = React.useState(false);

  const handleCancelToken = () => {
    Alert.alert(
      'Cancel Token',
      `Are you sure you want to cancel token ${token}?`,
      [
        {
          text: 'Keep Token',
          style: 'cancel',
        },
        {
          text: 'Cancel Token',
          style: 'destructive',
          onPress: () => {
            setCancelled(true);
          },
        },
      ]
    );
  };

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
              My Token
            </Text>

            <Text style={styles.headerSubtitle}>
              {cancelled
                ? 'Token has been cancelled'
                : 'Your active queue token'}
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* Status */}
          <View
            style={[
              styles.statusRow,
              cancelled && styles.cancelledStatusRow,
            ]}
          >
            <View
              style={[
                styles.statusDot,
                cancelled && styles.cancelledDot,
              ]}
            />

            <Text
              style={[
                styles.statusText,
                cancelled && styles.cancelledStatusText,
              ]}
            >
              {cancelled ? 'CANCELLED' : 'WAITING'}
            </Text>
          </View>

          {/* Token Card */}
          <View
            style={[
              styles.tokenCard,
              cancelled && styles.cancelledTokenCard,
            ]}
          >
            <Text style={styles.tokenLabel}>
              YOUR TOKEN
            </Text>

            <Text
              style={[
                styles.tokenNumber,
                cancelled && styles.cancelledTokenNumber,
              ]}
            >
              {token}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.serviceLabel}>
              SERVICE
            </Text>

            <Text style={styles.serviceName}>
              {service}
            </Text>
          </View>

          {!cancelled ? (
            <>
              {/* Queue Status */}
              <Text style={styles.sectionTitle}>
                Queue Status
              </Text>

              <View style={styles.queueCard}>

                {/* Position */}
                <View style={styles.queueItem}>
                  <View style={styles.iconBox}>
                    <Ionicons
                      name="people-outline"
                      size={21}
                      color="#20E6D2"
                    />
                  </View>

                  <View>
                    <Text style={styles.queueLabel}>
                      YOUR POSITION
                    </Text>

                    <Text style={styles.queueValue}>
                      #06
                    </Text>
                  </View>
                </View>

                <View style={styles.verticalDivider} />

                {/* Wait */}
                <View style={styles.queueItem}>
                  <View style={styles.iconBox}>
                    <Ionicons
                      name="time-outline"
                      size={21}
                      color="#20E6D2"
                    />
                  </View>

                  <View>
                    <Text style={styles.queueLabel}>
                      EST. WAIT
                    </Text>

                    <Text style={styles.queueValue}>
                      {wait}
                    </Text>
                  </View>
                </View>

              </View>

              {/* Currently Serving */}
              <View style={styles.servingCard}>

                <View style={styles.servingIcon}>
                  <Ionicons
                    name="pulse-outline"
                    size={22}
                    color="#20E6D2"
                  />
                </View>

                <View style={styles.servingInfo}>
                  <Text style={styles.servingLabel}>
                    CURRENTLY SERVING
                  </Text>

                  <Text style={styles.servingToken}>
                    A-021
                  </Text>
                </View>

                <View style={styles.liveBadge}>
                  <View style={styles.liveDot} />

                  <Text style={styles.liveText}>
                    LIVE
                  </Text>
                </View>

              </View>

              {/* Message */}
              <View style={styles.messageCard}>

                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#20E6D2"
                />

                <Text style={styles.messageText}>
                  Please stay nearby. Your queue position
                  updates automatically.
                </Text>

              </View>
            </>
          ) : (
            <>
              {/* Cancelled Message */}
              <View style={styles.cancelledMessageCard}>

                <View style={styles.cancelledIcon}>
                  <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color="#FF6B6B"
                  />
                </View>

                <Text style={styles.cancelledTitle}>
                  Token Cancelled
                </Text>

                <Text style={styles.cancelledMessage}>
                  Your token has been cancelled successfully.
                  You can get a new digital token whenever you
                  need one.
                </Text>

              </View>

              {/* New Token Button */}
              <TouchableOpacity
                style={styles.newTokenButton}
                activeOpacity={0.85}
                onPress={() => router.push('/get-token')}
              >
                <Ionicons
                  name="ticket-outline"
                  size={20}
                  color="#071014"
                />

                <Text style={styles.newTokenButtonText}>
                  Get New Token
                </Text>
              </TouchableOpacity>
            </>
          )}

          <View style={{ height: 130 }} />

        </ScrollView>

        {/* Bottom */}
        {!cancelled && (
          <View style={styles.bottom}>

            <TouchableOpacity
              style={styles.queueButton}
              activeOpacity={0.85}
              onPress={() => router.push('/queue')}
            >
              <Ionicons
                name="pulse-outline"
                size={20}
                color="#071014"
              />

              <Text style={styles.queueButtonText}>
                View Live Queue
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              activeOpacity={0.8}
              onPress={handleCancelToken}
            >
              <Text style={styles.cancelText}>
                Cancel Token
              </Text>
            </TouchableOpacity>

          </View>
        )}

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
    marginRight: 14,
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

  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0D211F',
    borderWidth: 1,
    borderColor: '#16423D',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },

  cancelledStatusRow: {
    backgroundColor: '#241414',
    borderColor: '#4A2424',
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#20E6D2',
    marginRight: 7,
  },

  cancelledDot: {
    backgroundColor: '#FF6B6B',
  },

  statusText: {
    color: '#20E6D2',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  cancelledStatusText: {
    color: '#FF6B6B',
  },

  tokenCard: {
    backgroundColor: '#101820',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#1D2933',
    marginTop: 16,
    padding: 24,
    alignItems: 'center',
  },

  cancelledTokenCard: {
    borderColor: '#382326',
  },

  tokenLabel: {
    color: '#20E6D2',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  tokenNumber: {
    color: '#FFFFFF',
    fontSize: 64,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 6,
  },

  cancelledTokenNumber: {
    color: '#777F87',
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#1D2933',
    marginVertical: 18,
  },

  serviceLabel: {
    color: '#66737F',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  serviceName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 5,
    textAlign: 'center',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 24,
    marginBottom: 12,
  },

  queueCard: {
    backgroundColor: '#101820',
    borderWidth: 1,
    borderColor: '#1D2933',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  queueItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  queueLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.7,
  },

  queueValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 3,
  },

  verticalDivider: {
    width: 1,
    height: 42,
    backgroundColor: '#1D2933',
    marginHorizontal: 15,
  },

  servingCard: {
    marginTop: 14,
    backgroundColor: '#0D171D',
    borderWidth: 1,
    borderColor: '#1B3439',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  servingIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  servingInfo: {
    flex: 1,
  },

  servingLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  servingToken: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 3,
  },

  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#102522',
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#20E6D2',
    marginRight: 5,
  },

  liveText: {
    color: '#20E6D2',
    fontSize: 8,
    fontWeight: '900',
  },

  messageCard: {
    marginTop: 14,
    padding: 14,
    borderRadius: 15,
    backgroundColor: '#0D141B',
    borderWidth: 1,
    borderColor: '#17242D',
    flexDirection: 'row',
    alignItems: 'center',
  },

  messageText: {
    flex: 1,
    color: '#71808C',
    fontSize: 11,
    lineHeight: 17,
    marginLeft: 10,
  },

  cancelledMessageCard: {
    marginTop: 25,
    backgroundColor: '#151113',
    borderWidth: 1,
    borderColor: '#382326',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },

  cancelledIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#241619',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  cancelledTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  cancelledMessage: {
    color: '#7D8996',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 9,
  },

  newTokenButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: '#20E6D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    gap: 9,
  },

  newTokenButtonText: {
    color: '#071014',
    fontSize: 14,
    fontWeight: '900',
  },

  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#070A0F',
    borderTopWidth: 1,
    borderTopColor: '#111A22',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
  },

  queueButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: '#20E6D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  queueButtonText: {
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