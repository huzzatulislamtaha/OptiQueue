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
import { useToken } from '../context/TokenContext';
import BottomNav from '../components/BottomNav';
import { COLORS } from '../constants/theme';

export default function Notifications() {
  const { notifications, markAllRead, unreadCount } = useToken();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Stay updated with your queue</Text>
        </View>

        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Ionicons name="pulse" size={24} color={COLORS.neon} />
          </View>
          <View style={styles.statusText}>
            <Text style={styles.statusTitle}>Queue is Live</Text>
            <Text style={styles.statusDescription}>
              Smart alerts are active for your token.
            </Text>
          </View>
          <View style={styles.liveDot} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          {unreadCount > 0 && (
            <TouchableOpacity onPress={markAllRead}>
              <Text style={styles.markText}>Mark all read</Text>
            </TouchableOpacity>
          )}
        </View>

        {notifications.length === 0 ? (
          <View style={styles.emptyCard}>
            <Ionicons name="notifications-off-outline" size={32} color="#444" />
            <Text style={styles.emptyText}>No notifications yet</Text>
          </View>
        ) : (
          notifications.map((item) => (
            <View
              key={item.id}
              style={[styles.notificationCard, item.unread && styles.unreadCard]}
            >
              <View style={styles.notificationIcon}>
                <Ionicons name={item.icon} size={21} color={COLORS.neon} />
              </View>

              <View style={styles.notificationContent}>
                <View style={styles.notificationTop}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  {item.unread && <View style={styles.unreadDot} />}
                </View>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          ))
        )}

        <View style={{ height: 30 }} />
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#15181B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  title: { color: '#FFFFFF', fontSize: 23, fontWeight: '700' },
  subtitle: { color: '#777C82', fontSize: 12, marginTop: 3 },
  badge: {
    marginLeft: 'auto',
    backgroundColor: COLORS.neon,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { color: '#071014', fontSize: 12, fontWeight: '800' },
  content: { paddingHorizontal: 20, paddingBottom: 100 },
  statusCard: {
    backgroundColor: '#111518',
    borderWidth: 1,
    borderColor: '#252A2D',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  statusIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#10282C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  statusText: { flex: 1 },
  statusTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  statusDescription: { color: '#777C82', fontSize: 11, marginTop: 4 },
  liveDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.neon,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  markText: { color: COLORS.neon, fontSize: 11, fontWeight: '600' },
  emptyCard: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#101316',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#202529',
  },
  emptyText: { color: '#666B70', fontSize: 13, marginTop: 12 },
  notificationCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 12,
  },
  unreadCard: { borderColor: '#1B3439' },
  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#10282C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  notificationContent: { flex: 1 },
  notificationTop: { flexDirection: 'row', alignItems: 'center' },
  notificationTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.neon,
    marginLeft: 8,
  },
  message: {
    color: '#90959A',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },
  time: { color: '#5F6469', fontSize: 10, marginTop: 7 },
});
