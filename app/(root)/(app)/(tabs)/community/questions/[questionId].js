import { useHref } from "expo-router";
import { Text, View } from "react-native";
import { renderScreenWithHeader } from "../../../../../../layout";

const CommunityQuestionScreen = () => {
  const { href } = useHref();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen for question {href.split("/")[3]}</Text>
    </View>
  );
};

export default function CommunityQuestion() {
  return renderScreenWithHeader(CommunityQuestionScreen);
}
