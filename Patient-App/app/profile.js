import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Profile() {
  const [notifications, setNotifications] = React.useState(true);

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
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>App preferences & information</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* App Identity */}
        <View style={styles.profileCard}>
          <View style={styles.logo}>
            <Ionicons
              name="medical"
              size={30}
              color="#B8FF00"
            />
          </View>

          <View>
            <Text style={styles.appName}>OptiQueue</Text>
            <Text style={styles.appDescription}>
              Smart Hospital Queue System
            </Text>
          </View>
        </View>

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.optionCard}>

          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Ionicons
                name="notifications-outline"
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Notifications
              </Text>
              <Text style={styles.optionSubtitle}>
                Receive queue updates
              </Text>
            </View>

            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{
                false: '#303438',
                true: '#536A1C',
              }}
              thumbColor={
                notifications ? '#B8FF00' : '#777'
              }
            />
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Ionicons
                name="language-outline"
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Language
              </Text>
              <Text style={styles.optionSubtitle}>
                English
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#555"
            />
          </TouchableOpacity>

        </View>

        {/* App Information */}
        <Text style={styles.sectionTitle}>App Information</Text>

        <View style={styles.optionCard}>

          <TouchableOpacity style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Ionicons
                name="information-circle-outline"
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                About OptiQueue
              </Text>
              <Text style={styles.optionSubtitle}>
                Smart digital hospital queue management
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#555"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Ionicons
                name="shield-checkmark-outline"
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Privacy & Security
              </Text>
              <Text style={styles.optionSubtitle}>
                Your queue information is protected
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#555"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Ionicons
                name="code-slash-outline"
                size={21}
                color="#B8FF00"
              />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>
                Version
              </Text>
              <Text style={styles.optionSubtitle}>
                1.0.0
              </Text>
            </View>
          </View>

        </View>

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>

        <TouchableOpacity style={styles.supportCard}>
          <View style={styles.supportIcon}>
            <Ionicons
              name="help-circle-outline"
              size={23}
              color="#B8FF00"
            />
          </View>

          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>
              Help & Support
            </Text>
            <Text style={styles.optionSubtitle}>
              Need help using OptiQueue?
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#555"
          />
        </TouchableOpacity>

        <View style={{ height: 110 }} />

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

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/notifications')}
        >
          <Ionicons
            name="notifications-outline"
            size={22}
            color="#777"
          />
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="person"
            size={22}
            color="#B8FF00"
          />
          <Text style={[styles.navText, styles.activeNavText]}>
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

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  profileCard: {
    backgroundColor: '#111518',
    borderWidth: 1,
    borderColor: '#252A2D',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#1B2410',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  appName: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },

  appDescription: {
    color: '#777C82',
    fontSize: 11,
    marginTop: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  optionCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 18,
    marginBottom: 25,
    overflow: 'hidden',
  },

  optionRow: {
    minHeight: 70,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#191F15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  optionText: {
    flex: 1,
  },

  optionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  optionSubtitle: {
    color: '#777C82',
    fontSize: 10,
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#202529',
    marginLeft: 71,
  },

  supportCard: {
    backgroundColor: '#101316',
    borderWidth: 1,
    borderColor: '#202529',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  supportIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#191F15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
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