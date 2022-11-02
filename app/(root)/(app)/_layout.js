import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
    />
  );
}
