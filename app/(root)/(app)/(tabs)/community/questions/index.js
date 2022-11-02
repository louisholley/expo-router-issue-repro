import { Text, View } from "react-native";
import { renderScreenWithHeader } from "../../../../../../layout";

const CommunityQuestionsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Community questions screen</Text>
  </View>
);

export default function CommunityQuestions() {
  return renderScreenWithHeader(CommunityQuestionsScreen);
}
