import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useToken } from '../context/TokenContext';
import { formatToken } from '../constants/services';
import BottomNav from '../components/BottomNav';

export default function Queue() {
  const {
    activeToken,
    getLiveQueue,
    getTokenPosition,
    getEstimatedWait,
    getServiceStats,
  } = useToken();

  const serviceId = activeToken?.serviceId || 'general';
  const queueData = getLiveQueue(serviceId);
  const stats = getServiceStats(serviceId);
  const position = activeToken ? getTokenPosition(activeToken) : 0;
  const wait = activeToken
    ? getEstimatedWait(activeToken.serviceId, position)
    : stats.waitTime;
  const yourToken = activeToken
    ? formatToken(activeToken.prefix, activeToken.number)
    : '--';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Live Queue</Text>
            <Text style={styles.headerSubtitle}>
              {activeToken ? activeToken.serviceName : 'General Consultation'}
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.liveHeader}>
            <View style={styles.liveIndicator}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
            <Text style={styles.updatedText}>Updating automatically</Text>
          </View>

          <View style={styles.currentCard}>
            <View style={styles.currentTop}>
              <View>
                <Text style={styles.currentLabel}>CURRENTLY SERVING</Text>
                <Text style={styles.currentToken}>{stats.serving}</Text>
              </View>
              <View style={styles.pulseIcon}>
                <Ionicons name="pulse-outline" size={28} color="#20E6D2" />
              </View>
            </View>

            <View style={styles.currentDivider} />

            <View style={styles.currentBottom}>
              <View>
                <Text style={styles.smallLabel}>YOUR TOKEN</Text>
                <Text style={styles.yourToken}>{yourToken}</Text>
              </View>
              <View style={styles.positionBox}>
                <Text style={styles.smallLabel}>POSITION</Text>
                <Text style={styles.positionValue}>
                  {activeToken
                    ? position === 0
                      ? 'Now'
                      : `#${String(position).padStart(2, '0')}`
                    : '--'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.waitCard}>
            <View style={styles.waitIcon}>
              <Ionicons name="time-outline" size={22} color="#20E6D2" />
            </View>
            <View style={styles.waitInfo}>
              <Text style={styles.waitLabel}>ESTIMATED WAIT</Text>
              <Text style={styles.waitValue}>{wait}</Text>
            </View>
            <Text style={styles.waitDescription}>Smart estimate</Text>
          </View>

          <View style={styles.queueHeader}>
            <Text style={styles.sectionTitle}>Queue</Text>
            <Text style={styles.peopleCount}>{queueData.length} tokens</Text>
          </View>

          <View style={styles.queueList}>
            {queueData.map((item, index) => {
              const isServing = item.status === 'Serving';
              const isYou = item.status === 'You';

              return (
                <View
                  key={item.token}
                  style={[
                    styles.queueRow,
                    isServing && styles.servingRow,
                    isYou && styles.youRow,
                  ]}
                >
                  <View style={styles.numberCircle}>
                    {isServing ? (
                      <Ionicons name="play" size={13} color="#071014" />
                    ) : (
                      <Text
                        style={[styles.numberText, isYou && styles.youNumberText]}
                      >
                        {index + 1}
                      </Text>
                    )}
                  </View>

                  <Text
                    style={[
                      styles.tokenText,
                      isServing && styles.servingTokenText,
                      isYou && styles.youTokenText,
                    ]}
                  >
                    {item.token}
                  </Text>

                  <View style={styles.rowSpacer} />

                  {isServing && (
                    <View style={styles.servingBadge}>
                      <Text style={styles.servingBadgeText}>SERVING</Text>
                    </View>
                  )}

                  {isYou && (
                    <View style={styles.youBadge}>
                      <Text style={styles.youBadgeText}>YOU</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          {!activeToken && (
            <TouchableOpacity
              style={styles.getTokenBanner}
              onPress={() => router.push('/get-token')}
            >
              <Ionicons name="ticket-outline" size={20} color="#20E6D2" />
              <Text style={styles.getTokenBannerText}>
                Get a token to track your position in this queue
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#20E6D2" />
            </TouchableOpacity>
          )}

          <View style={styles.infoCard}>
            <Ionicons name="information-circle-outline" size={20} color="#20E6D2" />
            <Text style={styles.infoText}>
              Queue advances automatically. You'll receive alerts when your turn
              is approaching.
            </Text>
          </View>

          <View style={{ height: 90 }} />
        </ScrollView>

        <BottomNav />
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
  content: { paddingHorizontal: 20, paddingTop: 5 },
  liveHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D211F',
    borderWidth: 1,
    borderColor: '#16423D',
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#20E6D2',
    marginRight: 6,
  },
  liveText: {
    color: '#20E6D2',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  updatedText: { color: '#66737F', fontSize: 10 },
  currentCard: {
    backgroundColor: '#101820',
    borderWidth: 1,
    borderColor: '#1D2933',
    borderRadius: 20,
    padding: 20,
  },
  currentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentLabel: {
    color: '#20E6D2',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  currentToken: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 4,
  },
  pulseIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDivider: {
    height: 1,
    backgroundColor: '#1D2933',
    marginVertical: 18,
  },
  currentBottom: { flexDirection: 'row', justifyContent: 'space-between' },
  smallLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.7,
  },
  yourToken: { color: '#FFFFFF', fontSize: 17, fontWeight: '900', marginTop: 4 },
  positionBox: { alignItems: 'flex-end' },
  positionValue: {
    color: '#20E6D2',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 4,
  },
  waitCard: {
    backgroundColor: '#0D171D',
    borderWidth: 1,
    borderColor: '#1B3439',
    borderRadius: 17,
    padding: 15,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  waitIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  waitInfo: { flex: 1 },
  waitLabel: {
    color: '#66737F',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  waitValue: { color: '#FFFFFF', fontSize: 17, fontWeight: '900', marginTop: 3 },
  waitDescription: { color: '#66737F', fontSize: 10 },
  queueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '800' },
  peopleCount: { color: '#66737F', fontSize: 10 },
  queueList: { gap: 8 },
  queueRow: {
    minHeight: 58,
    backgroundColor: '#101820',
    borderWidth: 1,
    borderColor: '#1D2933',
    borderRadius: 15,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  servingRow: { backgroundColor: '#10282C', borderColor: '#20E6D2' },
  youRow: { backgroundColor: '#10211F', borderColor: '#20E6D2' },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#18222B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  numberText: { color: '#7D8996', fontSize: 10, fontWeight: '800' },
  youNumberText: { color: '#20E6D2' },
  tokenText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  servingTokenText: { color: '#20E6D2' },
  youTokenText: { color: '#20E6D2' },
  rowSpacer: { flex: 1 },
  servingBadge: {
    backgroundColor: '#20E6D2',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  servingBadgeText: { color: '#071014', fontSize: 7, fontWeight: '900' },
  youBadge: {
    backgroundColor: '#143A36',
    borderWidth: 1,
    borderColor: '#20E6D2',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  youBadgeText: { color: '#20E6D2', fontSize: 7, fontWeight: '900' },
  getTokenBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D171D',
    borderWidth: 1,
    borderColor: '#1B3439',
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
    gap: 10,
  },
  getTokenBannerText: { flex: 1, color: '#71808C', fontSize: 11 },
  infoCard: {
    marginTop: 15,
    padding: 14,
    backgroundColor: '#0D141B',
    borderWidth: 1,
    borderColor: '#17242D',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    color: '#71808C',
    fontSize: 11,
    lineHeight: 17,
    marginLeft: 10,
  },
});
