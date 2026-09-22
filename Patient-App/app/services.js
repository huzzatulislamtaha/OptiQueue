import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { COLORS } from "../constants/theme";

const services = [
  {
    icon: "medkit-outline",
    title: "General Consultation",
    waiting: 7,
    waitTime: "18 min",
  },
  {
    icon: "medical-outline",
    title: "Specialist Consultation",
    waiting: 12,
    waitTime: "32 min",
  },
  {
    icon: "flask-outline",
    title: "Diagnostic / Laboratory",
    waiting: 5,
    waitTime: "14 min",
  },
  {
    icon: "medkit-outline",
    title: "Pharmacy Service",
    waiting: 3,
    waitTime: "8 min",
  },
];

export default function Services() {
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

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            onPress={() =>
              router.push({
                pathname: "/get-token",
                params: {
                  service: service.title,
                  waiting: service.waiting,
                  waitTime: service.waitTime,
                },
              })
            }
          />
        ))}
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 58,
    paddingBottom: 20,
  },
});