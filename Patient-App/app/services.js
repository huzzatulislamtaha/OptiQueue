import { View, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import { COLORS } from '../constants/theme';
import { useToken } from '../context/TokenContext';

export default function Services() {
  const { services, getServiceStats } = useToken();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header
          title="Services"
          subtitle="Choose a service to get your digital token"
        />

        {services.map((service) => {
          const stats = getServiceStats(service.id);

          return (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              waiting={stats.waiting}
              waitTime={stats.waitTime}
              onPress={() =>
                router.push({
                  pathname: '/get-token',
                  params: { preselect: service.id },
                })
              }
            />
          );
        })}
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { paddingHorizontal: 20, paddingTop: 58, paddingBottom: 20 },
});
