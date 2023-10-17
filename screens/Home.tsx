import { useRef } from "react";
import { View } from "react-native";
import { Button, Spacer } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList>,
  NativeStackScreenProps<RootStackParamList, "HomeScreen">
>;
const Home = (props: Props) => {
  const handlePress = async () => {
    props.navigation.navigate("ShareScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Spacer flexGrow={1} />
        <Button onPress={handlePress}>Navigate to Share screen</Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
