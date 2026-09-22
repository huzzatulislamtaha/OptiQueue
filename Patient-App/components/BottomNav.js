import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { COLORS } from "../constants/theme";

const items = [
  {
    label: "Home",
    route: "/",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    label: "Services",
    route: "/services",
    icon: "grid-outline",
    activeIcon: "grid",
  },
  {
    label: "My Token",
    route: "/my-token",
    icon: "ticket-outline",
    activeIcon: "ticket",
  },
  {
    label: "Queue",
    route: "/queue",
    icon: "pulse-outline",
    activeIcon: "pulse",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "person-outline",
    activeIcon: "person",
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        {items.map((item) => {
          const active =
            pathname === item.route ||
            (item.route !== "/" &&
              pathname.startsWith(item.route));

          return (
            <Pressable
              key={item.label}
              style={styles.item}
              onPress={() => router.push(item.route)}
            >
              <View
                style={[
                  styles.iconBox,
                  active && styles.activeIconBox,
                ]}
              >
                <Ionicons
                  name={active ? item.activeIcon : item.icon}
                  size={21}
                  color={
                    active
                      ? COLORS.neon
                      : COLORS.secondary
                  }
                />
              </View>

              <Text
                style={[
                  styles.label,
                  active && styles.activeLabel,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 14,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
  },

  nav: {
    height: 72,
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  iconBox: {
    width: 36,
    height: 32,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  activeIconBox: {
    backgroundColor: "rgba(32,230,210,0.10)",
  },

  label: {
    color: COLORS.secondary,
    fontSize: 10,
    marginTop: 3,
  },

  activeLabel: {
    color: COLORS.neon,
    fontWeight: "700",
  },
});
