import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TokenProvider } from "../context/TokenContext";

export default function RootLayout() {
  return (
    <TokenProvider>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: {
            backgroundColor: "#070A0F",
          },
        }}
      />
    </TokenProvider>
  );
}