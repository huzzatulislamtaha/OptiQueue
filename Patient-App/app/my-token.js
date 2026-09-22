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
import { router } from 'expo-router';
import { useToken } from '../context/TokenContext';
import { formatToken } from '../constants/services';
import BottomNav from '../components/BottomNav';

export default function MyToken() {
  const {
    activeToken,
    cancelToken,
    getTokenPosition,
    getTokenStatus,
    getEstimatedWait,
    getServiceStats,
  } = useToken();

  if (!activeToken) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerTitle}>My Token</Text>
              <Text style={styles.headerSubtitle}>No active token</Text>
            </View>
          </View>

          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons name="ticket-outline" size={40} color="#444" />
            </View>
            <Text style={styles.emptyTitle}>No Active Token</Text>
            <Text style={styles.emptyText}>
              Get a digital token to join the hospital queue and track your wait time
              in real time.
            </Text>
            <TouchableOpacity
              style={styles.getTokenButton}
              onPress={() => router.push('/get-token')}
            >
              <Ionicons name="add-circle-outline" size={20} color="#071014" />
              <Text style={styles.getTokenButtonText}>Get Digital Token</Text>
            </TouchableOpacity>
          </View>

          <BottomNav />
        </View>
      </SafeAreaView>
    );
  }

  const token = formatToken(activeToken.prefix, activeToken.number);
  const position = getTokenPosition(activeToken);
  const status = getTokenStatus(activeToken);
  const wait = getEstimatedWait(activeToken.serviceId, position);
  const stats = getServiceStats(activeToken.serviceId);
  const isServing = status === 'serving';

  const handleCancelToken = () => {
    Alert.alert('Cancel Token', `Are you sure you want to cancel token ${token}?`, [
      { text: 'Keep Token', style: 'cancel' },
      {
        text: 'Cancel Token',
        style: 'destructive',
        onPress: () => cancelToken(),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>My Token</Text>
            <Text style={styles.headerSubtitle}>Your active queue token</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={[styles.statusRow, isServing && styles.servingStatusRow]}>
            <View style={[styles.statusDot, isServing && styles.servingDot]} />
            <Text style={[styles.statusText, isServing && styles.servingStatusText]}>
              {isServing ? 'YOUR TURN' : 'WAITING'}
            </Text>
          </View>

          <View style={[styles.tokenCard, isServing && styles.servingTokenCard]}>
            <Text style={styles.tokenLabel}>YOUR TOKEN</Text>
            <Text style={styles.tokenNumber}>{token}</Text>
            <View style={styles.divider} />
            <Text style={styles.serviceLabel}>SERVICE</Text>
            <Text style={styles.serviceName}>{activeToken.serviceName}</Text>
            <Text style={styles.counterText}>{activeToken.counter}</Text>
          </View>

          <Text style={styles.sectionTitle}>Queue Status</Text>

          <View style={styles.queueCard}>
            <View style={styles.queueItem}>
              <View style={styles.iconBox}>
                <Ionicons name="people-outline" size={21} color="#20E6D2" />
              </View>
              <View>
                <Text style={styles.queueLabel}>YOUR POSITION</Text>
                <Text style={styles.queueValue}>
                  {isServing ? 'Now' : `#${String(position).padStart(2, '0')}`}
                </Text>
              </View>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.queueItem}>
              <View style={styles.iconBox}>
                <Ionicons name="time-outline" size={21} color="#20E6D2" />
              </View>
              <View>
                <Text style={styles.queueLabel}>EST. WAIT</Text>
                <Text style={styles.queueValue}>{wait}</Text>
              </View>
            </View>
          </View>

          <View style={styles.servingCard}>
            <View style={styles.servingIcon}>
              <Ionicons name="pulse-outline" size={22} color="#20E6D2" />
            </View>
            <View style={styles.servingInfo}>
              <Text style={styles.servingLabel}>CURRENTLY SERVING</Text>
              <Text style={styles.servingToken}>{stats.serving}</Text>
            </View>
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>

          {isServing ? (
            <View style={styles.turnCard}>
              <Ionicons name="checkmark-circle" size={24} color="#20E6D2" />
              <Text style={styles.turnText}>
                Please proceed to {activeToken.counter} now!
              </Text>
            </View>
          ) : (
            <View style={styles.messageCard}>
              <Ionicons name="notifications-outline" size={20} color="#20E6D2" />
              <Text style={styles.messageText}>
                {position <= 2
                  ? 'Almost your turn! Please stay nearby.'
                  : 'Your queue position updates automatically every few seconds.'}
              </Text>
            </View>
          )}

          <View style={{ height: 160 }} />
        </ScrollView>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.queueButton}
            activeOpacity={0.85}
            onPress={() => router.push('/queue')}
          >
            <Ionicons name="pulse-outline" size={20} color="#071014" />
            <Text style={styles.queueButtonText}>View Live Queue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelToken}>
            <Text style={styles.cancelText}>Cancel Token</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#070A0F' },
  container: { flex: 1, backgroundColor: '#070A0F' },
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
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  headerSubtitle: { color: '#7D8996', fontSize: 12, marginTop: 3 },
  content: { paddingHorizontal: 20, paddingTop: 8 },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingBottom: 100,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#101820',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  emptyText: {
    color: '#7D8996',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
  },
  getTokenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#20E6D2',
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 24,
    gap: 8,
  },
  getTokenButtonText: { color: '#071014', fontSize: 14, fontWeight: '900' },
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
  servingStatusRow: { backgroundColor: '#10282C', borderColor: '#20E6D2' },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#20E6D2',
    marginRight: 7,
  },
  servingDot: { backgroundColor: '#27E6A5' },
  statusText: { color: '#20E6D2', fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  servingStatusText: { color: '#27E6A5' },
  tokenCard: {
    backgroundColor: '#101820',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#1D2933',
    marginTop: 16,
    padding: 24,
    alignItems: 'center',
  },
  servingTokenCard: { borderColor: '#20E6D2' },
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
  counterText: { color: '#66737F', fontSize: 11, marginTop: 6 },
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
  queueItem: { flex: 1, flexDirection: 'row', alignItems: 'center' },
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
  queueValue: { color: '#FFFFFF', fontSize: 18, fontWeight: '900', marginTop: 3 },
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
  servingInfo: { flex: 1 },
  servingLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  servingToken: { color: '#FFFFFF', fontSize: 17, fontWeight: '900', marginTop: 3 },
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
  liveText: { color: '#20E6D2', fontSize: 8, fontWeight: '900' },
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
  turnCard: {
    marginTop: 14,
    padding: 16,
    borderRadius: 15,
    backgroundColor: '#10282C',
    borderWidth: 1,
    borderColor: '#20E6D2',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  turnText: { flex: 1, color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
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
  queueButtonText: { color: '#071014', fontSize: 14, fontWeight: '900' },
  cancelButton: { alignItems: 'center', paddingTop: 12 },
  cancelText: { color: '#7D8996', fontSize: 12, fontWeight: '700' },
});
