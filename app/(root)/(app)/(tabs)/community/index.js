import { Text, View } from "react-native";
import { Link } from "expo-router";
import { renderScreenWithHeader } from "../../../../../layout";

const CommunityHomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Community home screen</Text>
    <Link
      href="/community/questions/123"
      style={{ color: "blue", marginTop: 8 }}
    >
      Go to community question 123
    </Link>
  </View>
);

CommunityHomeScreen.headerProps = {
  canGoBack: false,
};

export default function CommunityHome() {
  return renderScreenWithHeader(CommunityHomeScreen);
}
