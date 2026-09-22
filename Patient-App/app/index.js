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

export default function Home() {
  return (
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
            onPress={() => router.push('/notifications')}
          >
            <Ionicons
              name="notifications-outline"
              size={23}
              color="#FFFFFF"
            />

            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Welcome Card */}
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
            <Ionicons
              name="pulse"
              size={34}
              color="#B8FF00"
            />
          </View>
        </View>

        {/* Get Token */}
        <TouchableOpacity
          style={styles.tokenButton}
          activeOpacity={0.85}
          onPress={() => router.push('/get-token')}
        >
          <View style={styles.tokenIcon}>
            <Ionicons
              name="ticket"
              size={24}
              color="#080A0C"
            />
          </View>

          <View style={styles.tokenTextContainer}>
            <Text style={styles.tokenTitle}>
              Get Digital Token
            </Text>

            <Text style={styles.tokenSubtitle}>
              Join a hospital queue
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#080A0C"
          />
        </TouchableOpacity>

        {/* Active Token */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Active Token
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/my-token')}
          >
            <Text style={styles.viewText}>
              View
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.activeCard}
          activeOpacity={0.85}
          onPress={() => router.push('/my-token')}
        >
          <View style={styles.tokenBadge}>
            <Text style={styles.tokenBadgeText}>
              A-027
            </Text>
          </View>

          <View style={styles.activeInfo}>
            <Text style={styles.serviceName}>
              General Consultation
            </Text>

            <Text style={styles.statusText}>
              Waiting
            </Text>
          </View>

          <View style={styles.waitInfo}>
            <Text style={styles.positionLabel}>
              POSITION
            </Text>

            <Text style={styles.positionValue}>
              #06
            </Text>
          </View>
        </TouchableOpacity>

        {/* Estimated Wait */}
        <View style={styles.statsRow}>

          <View style={styles.statCard}>
            <Ionicons
              name="time-outline"
              size={21}
              color="#B8FF00"
            />

            <View style={styles.statText}>
              <Text style={styles.statLabel}>
                EST. WAIT
              </Text>

              <Text style={styles.statValue}>
                18 min
              </Text>
            </View>
          </View>

          <View style={styles.statCard}>
            <Ionicons
              name="people-outline"
              size={21}
              color="#B8FF00"
            />

            <View style={styles.statText}>
              <Text style={styles.statLabel}>
                AHEAD
              </Text>

              <Text style={styles.statValue}>
                5 people
              </Text>
            </View>
          </View>

        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.quickRow}>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/queue')}
          >
            <View style={styles.quickIcon}>
              <Ionicons
                name="list-outline"
                size={22}
                color="#B8FF00"
              />
            </View>

            <Text style={styles.quickTitle}>
              Live Queue
            </Text>

            <Text style={styles.quickSubtitle}>
              View current queue
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => router.push('/notifications')}
          >
            <View style={styles.quickIcon}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#B8FF00"
              />
            </View>

            <Text style={styles.quickTitle}>
              Alerts
            </Text>

            <Text style={styles.quickSubtitle}>
              Queue updates
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{ height: 100 }} />

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        {/* Home */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/')}
        >
          <Ionicons
            name="home"
            size={22}
            color="#B8FF00"
          />

          <Text style={[styles.navText, styles.activeNavText]}>
            Home
          </Text>
        </TouchableOpacity>

        {/* My Token */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/my-token')}
        >
          <Ionicons
            name="ticket-outline"
            size={22}
            color="#777"
          />

          <Text style={styles.navText}>
            My Token
          </Text>
        </TouchableOpacity>

        {/* Alerts */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/notifications')}
        >
          <Ionicons
            name="notifications-outline"
            size={22}
            color="#777"
          />

          <Text style={styles.navText}>
            Alerts
          </Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/profile')}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color="#777"
          />

          <Text style={styles.navText}>
            Profile
          </Text>
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

  content: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 30,
  },

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
    backgroundColor: '#B8FF00',
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

  welcomeContent: {
    flex: 1,
  },

  welcomeSmall: {
    color: '#B8FF00',
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

  greenText: {
    color: '#B8FF00',
  },

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
    backgroundColor: '#1A2210',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tokenButton: {
    backgroundColor: '#B8FF00',
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
    backgroundColor: '#D2FF5A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tokenTextContainer: {
    flex: 1,
    marginLeft: 13,
  },

  tokenTitle: {
    color: '#080A0C',
    fontSize: 15,
    fontWeight: '800',
  },

  tokenSubtitle: {
    color: '#303800',
    fontSize: 10,
    marginTop: 3,
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
    marginBottom: 12,
  },

  viewText: {
    color: '#B8FF00',
    fontSize: 11,
    fontWeight: '600',
  },

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
    backgroundColor: '#1B2410',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tokenBadgeText: {
    color: '#B8FF00',
    fontSize: 14,
    fontWeight: '800',
  },

  activeInfo: {
    flex: 1,
    marginLeft: 13,
  },

  serviceName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  statusText: {
    color: '#B8FF00',
    fontSize: 10,
    marginTop: 5,
  },

  waitInfo: {
    alignItems: 'flex-end',
  },

  positionLabel: {
    color: '#666B70',
    fontSize: 8,
    letterSpacing: 1,
  },

  positionValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 3,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

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

  statText: {
    marginLeft: 10,
  },

  statLabel: {
    color: '#666B70',
    fontSize: 8,
    letterSpacing: 1,
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },

  quickRow: {
    flexDirection: 'row',
    gap: 10,
  },

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
    backgroundColor: '#191F15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  quickTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  quickSubtitle: {
    color: '#666B70',
    fontSize: 9,
    marginTop: 4,
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