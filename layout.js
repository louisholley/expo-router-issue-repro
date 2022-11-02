import { Stack, useLink } from "expo-router";
import { View, Text } from "react-native";

const Header = ({ canGoBack = true }) => {
  const { back } = useLink();
  return (
    <View
      style={{
        paddingTop: 64,
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "black",
      }}
    >
      {canGoBack && <Text onPress={back}>{`<- go back`}</Text>}
    </View>
  );
};

const renderScreenWithHeader = (ScreenComponent) => (
  <>
    <Stack.Screen
      options={{ header: () => <Header {...ScreenComponent.headerProps} /> }}
    />
    <ScreenComponent />
  </>
);

export { Header, renderScreenWithHeader };
