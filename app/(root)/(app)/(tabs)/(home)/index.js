import { Text, View } from "react-native";
import { Link } from "expo-router";
import { renderScreenWithHeader } from "../../../../../layout";

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home screen</Text>
    <Link href="/profile" style={{ color: "blue", marginTop: 8 }}>
      Go to profile
    </Link>
  </View>
);

HomeScreen.headerProps = {
  canGoBack: false,
};

export default function Home() {
  return renderScreenWithHeader(HomeScreen);
}
