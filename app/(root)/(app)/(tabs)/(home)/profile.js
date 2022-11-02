import { Text, View } from "react-native";
import { renderScreenWithHeader } from "../../../../../layout";

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profile screen</Text>
  </View>
);

export default function Profile() {
  return renderScreenWithHeader(ProfileScreen);
}
