import { Stack } from "expo-router";
import { Header } from "../../../../../../layout";

export default function QuestionsStack() {
  return (
    <>
      <Stack.Screen name="../" options={{ headerShown: false }} />
      <Stack screenOptions={{ header: () => <Header /> }} />
    </>
  );
}
