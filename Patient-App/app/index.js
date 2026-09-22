import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { useToken } from '../context/TokenContext';
import { formatToken } from '../constants/services';
import { COLORS } from '../constants/theme';

export default function Home() {
  const {
    activeToken,
    unreadCount,
    getTokenPosition,
    getTokenStatus,
    getEstimatedWait,
    getServiceStats,
  } = useToken();

  const hasToken = !!activeToken;
  const position = hasToken ? getTokenPosition(activeToken) : 0;
  const status = hasToken ? getTokenStatus(activeToken) : null;
  const waitTime = hasToken
    ? getEstimatedWait(activeToken.serviceId, position)
    : '--';
  const tokenLabel = hasToken
    ? formatToken(activeToken.prefix, activeToken.number)
    : null;
  const stats = hasToken ? getServiceStats(activeToken.serviceId) : null;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>WELCOME TO</Text>
            <Text style={styles.logoText}>OptiQueue</Text>
          </View>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => router.push('/notifications')}
          >
            <Ionicons name="notifications-outline" size={23} color="#FFFFFF" />
            {unreadCount > 0 && <View style={styles.notificationDot} />}
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeCard}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeSmall}>SMART HOSPITAL</Text>
            <Text style={styles.welcomeTitle}>
              Skip the waiting.{'\n'}
              <Text style={styles.greenText}>Manage your time.</Text>
            </Text>
            <Text style={styles.welcomeDescription}>
              Get your digital token and track your queue in real time.
            </Text>
          </View>
          <View style={styles.pulseCircle}>
            <Ionicons name="pulse" size={34} color={COLORS.neon} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.tokenButton}
          activeOpacity={0.85}
          onPress={() => router.push('/get-token')}
        >
          <View style={styles.tokenIcon}>
            <Ionicons name="ticket" size={24} color="#080A0C" />
          </View>
          <View style={styles.tokenTextContainer}>
            <Text style={styles.tokenTitle}>Get Digital Token</Text>
            <Text style={styles.tokenSubtitle}>Join a hospital queue</Text>
          </View>
          <Ionicons name="arrow-forward" size={22} color="#080A0C" />
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Token</Text>
          {hasToken && (
            <TouchableOpacity onPress={() => router.push('/my-token')}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          )}
        </View>

        {hasToken ? (
          <>
            <TouchableOpacity
              style={styles.activeCard}
              activeOpacity={0.85}
              onPress={() => router.push('/my-token')}
            >
              <View style={styles.tokenBadge}>
                <Text style={styles.tokenBadgeText}>{tokenLabel}</Text>
              </View>
              <View style={styles.activeInfo}>
                <Text style={styles.serviceName}>{activeToken.serviceName}</Text>
                <Text style={styles.statusText}>
                  {status === 'serving' ? 'Your Turn!' : 'Waiting'}
                </Text>
              </View>
              <View style={styles.waitInfo}>
                <Text style={styles.positionLabel}>POSITION</Text>
                <Text style={styles.positionValue}>
                  {status === 'serving' ? 'Now' : `#${String(position).padStart(2, '0')}`}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <Ionicons name="time-outline" size={21} color={COLORS.neon} />
                <View style={styles.statText}>
                  <Text style={styles.statLabel}>EST. WAIT</Text>
                  <Text style={styles.statValue}>{waitTime}</Text>
                </View>
              </View>
              <View style={styles.statCard}>
                <Ionicons name="people-outline" size={21} color={COLORS.neon} />
                <View style={styles.statText}>
                  <Text style={styles.statLabel}>AHEAD</Text>
                  <Text style={styles.statValue}>
                    {position === 0 ? 'None' : `${position} people`}
                  </Text>
                </View>
              </View>
            </View>

            {stats && (
              <View style={styles.servingBanner}>
                <Ionicons name="pulse-outline" size={18} color={COLORS.neon} />
                <Text style={styles.servingBannerText}>
                  Now serving {stats.serving} · {activeToken.serviceName}
                </Text>
              </View>
            )}
          </>
        ) : (
          <View style={styles.emptyCard}>
            <Ionicons name="ticket-outline" size={32} color="#444" />
            <Text style={styles.emptyTitle}>No Active Token</Text>
            <Text style={styles.emptyText}>
              Get a digital token to join the queue and track your wait time.
            </Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.quickRow}>
          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/queue')}
          >
            <View style={styles.quickIcon}>
              <Ionicons name="list-outline" size={22} color={COLORS.neon} />
            </View>
            <Text style={styles.quickTitle}>Live Queue</Text>
            <Text style={styles.quickSubtitle}>View current queue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/services')}
          >
            <View style={styles.quickIcon}>
              <Ionicons name="grid-outline" size={22} color={COLORS.neon} />
            </View>
            <Text style={styles.quickTitle}>Services</Text>
            <Text style={styles.quickSubtitle}>Browse all services</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingHorizontal: 20, paddingTop: 55, paddingBottom: 30 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: '#777C82',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: '600',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 4,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#15181B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.neon,
  },
  welcomeCard: {
    backgroundColor: '#111518',
    borderWidth: 1,
    borderColor: '#252A2D',
    borderRadius: 22,
    padding: 20,
    minHeight: 190,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  welcomeContent: { flex: 1 },
  welcomeSmall: {
    color: COLORS.neon,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '800',
  },
  greenText: { color: COLORS.neon },
  welcomeDescription: {
    color: '#777C82',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 12,
    maxWidth: 245,
  },
  pulseCircle: {
    position: 'absolute',
    right: -18,
    bottom: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#10282C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenButton: {
    backgroundColor: COLORS.neon,
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 27,
  },
  tokenIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#5FFFE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenTextContainer: { flex: 1, marginLeft: 13 },
  tokenTitle: { color: '#080A0C', fontSize: 15, fontWeight: '800' },
  tokenSubtitle: { color: '#0A3D36', fontSize: 10, marginTop: 3 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
  },
  viewText: { color: COLORS.neon, fontSize: 11, fontWeight: '600' },
  activeCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#30372B',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tokenBadge: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#10282C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenBadgeText: { color: COLORS.neon, fontSize: 14, fontWeight: '800' },
  activeInfo: { flex: 1, marginLeft: 13 },
  serviceName: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  statusText: { color: COLORS.neon, fontSize: 10, marginTop: 5 },
  waitInfo: { alignItems: 'flex-end' },
  positionLabel: { color: '#666B70', fontSize: 8, letterSpacing: 1 },
  positionValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 3,
  },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  statCard: {
    flex: 1,
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: { marginLeft: 10 },
  statLabel: { color: '#666B70', fontSize: 8, letterSpacing: 1 },
  statValue: { color: '#FFFFFF', fontSize: 13, fontWeight: '700', marginTop: 4 },
  servingBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D171D',
    borderWidth: 1,
    borderColor: '#1B3439',
    borderRadius: 12,
    padding: 12,
    gap: 8,
    marginBottom: 25,
  },
  servingBannerText: { color: '#71808C', fontSize: 11, flex: 1 },
  emptyCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    marginBottom: 25,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 12,
  },
  emptyText: {
    color: '#666B70',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 17,
  },
  quickRow: { flexDirection: 'row', gap: 10 },
  quickCard: {
    flex: 1,
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 17,
    padding: 15,
  },
  quickIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#10282C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickTitle: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
  quickSubtitle: { color: '#666B70', fontSize: 9, marginTop: 4 },
});
