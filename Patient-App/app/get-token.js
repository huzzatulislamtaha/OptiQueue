import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useToken } from '../context/TokenContext';

export default function GetToken() {
  const { preselect } = useLocalSearchParams();
  const { services, getServiceStats } = useToken();
  const validPreselect = services.some((s) => s.id === preselect)
    ? preselect
    : services[0].id;
  const [selectedService, setSelectedService] = useState(validPreselect);

  const selected = services.find((s) => s.id === selectedService);
  const stats = getServiceStats(selectedService);

  const handleContinue = () => {
    router.push({
      pathname: '/confirmation',
      params: {
        serviceId: selected.id,
        service: selected.title,
        wait: stats.waitTime,
        queue: stats.waiting,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Get Digital Token</Text>
            <Text style={styles.headerSubtitle}>Select a service to join the queue</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.stepRow}>
            <View style={styles.stepActive}>
              <Text style={styles.stepNumberActive}>1</Text>
            </View>
            <View style={styles.stepLine} />
            <View style={styles.step}>
              <Text style={styles.stepNumber}>2</Text>
            </View>
            <View style={styles.stepLine} />
            <View style={styles.step}>
              <Text style={styles.stepNumber}>3</Text>
            </View>
          </View>

          <View style={styles.stepLabels}>
            <Text style={styles.activeLabel}>Service</Text>
            <Text style={styles.label}>Details</Text>
            <Text style={styles.label}>Token</Text>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Choose a Service</Text>
            <Text style={styles.sectionDescription}>Select the service you need today.</Text>
          </View>

          <View style={styles.serviceList}>
            {services.map((service) => {
              const isSelected = selectedService === service.id;
              const serviceStats = getServiceStats(service.id);

              return (
                <TouchableOpacity
                  key={service.id}
                  activeOpacity={0.85}
                  style={[styles.serviceCard, isSelected && styles.serviceCardSelected]}
                  onPress={() => setSelectedService(service.id)}
                >
                  <View style={[styles.iconBox, isSelected && styles.iconBoxSelected]}>
                    <Ionicons
                      name={service.icon}
                      size={24}
                      color={isSelected ? '#071014' : '#20E6D2'}
                    />
                  </View>

                  <View style={styles.serviceInfo}>
                    <Text style={styles.serviceTitle}>{service.title}</Text>
                    <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
                    <View style={styles.serviceMeta}>
                      <View style={styles.metaItem}>
                        <Ionicons name="people-outline" size={14} color="#7D8996" />
                        <Text style={styles.metaText}>
                          {serviceStats.waiting} people
                        </Text>
                      </View>
                      <View style={styles.metaItem}>
                        <Ionicons name="time-outline" size={14} color="#7D8996" />
                        <Text style={styles.metaText}>~ {serviceStats.waitTime}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={[styles.radio, isSelected && styles.radioSelected]}>
                    {isSelected && <View style={styles.radioDot} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.previewCard}>
            <View style={styles.previewIcon}>
              <Ionicons name="checkmark-circle" size={22} color="#20E6D2" />
            </View>
            <View style={styles.previewInfo}>
              <Text style={styles.previewLabel}>SELECTED SERVICE</Text>
              <Text style={styles.previewTitle}>{selected.title}</Text>
              <Text style={styles.previewWait}>
                Estimated waiting time: {stats.waitTime}
              </Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Ionicons name="information-circle-outline" size={20} color="#20E6D2" />
            <Text style={styles.infoText}>
              Your digital token will be generated after confirming the selected service.
            </Text>
          </View>

          <View style={{ height: 110 }} />
        </ScrollView>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            activeOpacity={0.85}
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>Continue</Text>
            <Ionicons name="arrow-forward" size={20} color="#071014" />
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
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  headerSubtitle: { color: '#7D8996', fontSize: 12, marginTop: 3 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 8 },
  stepRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  stepActive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#20E6D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121A22',
    borderWidth: 1,
    borderColor: '#26323C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberActive: { color: '#071014', fontWeight: '800', fontSize: 13 },
  stepNumber: { color: '#66737F', fontWeight: '700', fontSize: 13 },
  stepLine: { flex: 1, height: 1, backgroundColor: '#24303A', marginHorizontal: 8 },
  stepLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginHorizontal: 2,
  },
  activeLabel: { color: '#20E6D2', fontSize: 11, fontWeight: '700' },
  label: { color: '#66737F', fontSize: 11, fontWeight: '600' },
  sectionHeader: { marginTop: 30, marginBottom: 16 },
  sectionTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '800' },
  sectionDescription: { color: '#7D8996', fontSize: 13, marginTop: 5 },
  serviceList: { gap: 12 },
  serviceCard: {
    minHeight: 108,
    backgroundColor: '#101820',
    borderWidth: 1,
    borderColor: '#1D2933',
    borderRadius: 17,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceCardSelected: { borderColor: '#20E6D2', backgroundColor: '#101D22' },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#12252B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  iconBoxSelected: { backgroundColor: '#20E6D2' },
  serviceInfo: { flex: 1 },
  serviceTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  serviceSubtitle: { color: '#778490', fontSize: 11, marginTop: 4 },
  serviceMeta: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 9 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { color: '#778490', fontSize: 10 },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#3B4650',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  radioSelected: { borderColor: '#20E6D2' },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#20E6D2' },
  previewCard: {
    marginTop: 18,
    backgroundColor: '#0D171D',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1B3439',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#10282C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  previewInfo: { flex: 1 },
  previewLabel: {
    color: '#20E6D2',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  previewTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '800', marginTop: 3 },
  previewWait: { color: '#7D8996', fontSize: 10, marginTop: 3 },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
    padding: 14,
    backgroundColor: '#0D141B',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#17242D',
    gap: 10,
  },
  infoText: { flex: 1, color: '#71808C', fontSize: 11, lineHeight: 17 },
  bottomContainer: {
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
  continueButton: {
    height: 54,
    borderRadius: 15,
    backgroundColor: '#20E6D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  continueText: { color: '#071014', fontSize: 14, fontWeight: '900' },
});
