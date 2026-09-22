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

const notifications = [
  {
    id: 1,
    icon: 'notifications',
    title: 'Token Confirmed',
    message: 'Your token A-027 has been successfully confirmed.',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    icon: 'time',
    title: 'Queue Update',
    message: 'There are currently 5 patients ahead of you.',
    time: '5 min ago',
    unread: true,
  },
  {
    id: 3,
    icon: 'person',
    title: 'Now Serving',
    message: 'Currently serving token A-021.',
    time: '8 min ago',
    unread: false,
  },
  {
    id: 4,
    icon: 'checkmark-circle',
    title: 'Service Available',
    message: 'General Consultation service is currently available.',
    time: '15 min ago',
    unread: false,
  },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Stay updated with your queue</Text>
        </View>

        <TouchableOpacity style={styles.moreButton}>
          <Ionicons
            name="ellipsis-horizontal"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusIcon}>
            <Ionicons
              name="pulse"
              size={24}
              color="#B8FF00"
            />
          </View>

          <View style={styles.statusText}>
            <Text style={styles.statusTitle}>Queue is Live</Text>
            <Text style={styles.statusDescription}>
              Your queue information is being updated.
            </Text>
          </View>

          <View style={styles.liveDot} />
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>

          <TouchableOpacity>
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
            activeOpacity={0.8}
          >
            <View style={styles.notificationIcon}>
              <Ionicons
                name={item.icon}
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.notificationContent}>
              <View style={styles.notificationTop}>
                <Text style={styles.notificationTitle}>
                  {item.title}
                </Text>

                {item.unread && <View style={styles.unreadDot} />}
              </View>

              <Text style={styles.message}>
                {item.message}
              </Text>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Empty Bottom Space */}
        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/')}
        >
          <Ionicons
            name="home-outline"
            size={22}
            color="#777"
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/my-token')}
        >
          <Ionicons
            name="ticket-outline"
            size={22}
            color="#777"
          />
          <Text style={styles.navText}>My Token</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="notifications"
            size={22}
            color="#B8FF00"
          />
          <Text style={[styles.navText, styles.activeNavText]}>
            Alerts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/profile')}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color="#777"
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A0C',
  },

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

  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '700',
  },

  subtitle: {
    color: '#777C82',
    fontSize: 12,
    marginTop: 3,
  },

  moreButton: {
    marginLeft: 'auto',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#15181B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

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
    backgroundColor: '#1C2511',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  statusText: {
    flex: 1,
  },

  statusTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  statusDescription: {
    color: '#777C82',
    fontSize: 11,
    marginTop: 4,
  },

  liveDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#B8FF00',
  },

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
  },

  markText: {
    color: '#B8FF00',
    fontSize: 11,
    fontWeight: '600',
  },

  notificationCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 12,
  },

  unreadCard: {
    borderColor: '#303A24',
  },

  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#191F15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  notificationContent: {
    flex: 1,
  },

  notificationTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  unreadDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#B8FF00',
    marginLeft: 8,
  },

  message: {
    color: '#90959A',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  time: {
    color: '#5F6469',
    fontSize: 10,
    marginTop: 7,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#0D0F11',
    borderTopWidth: 1,
    borderTopColor: '#202326',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    color: '#666B70',
    fontSize: 10,
    marginTop: 4,
  },

  activeNavText: {
    color: '#B8FF00',
  },
});