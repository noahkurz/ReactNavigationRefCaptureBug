import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import ShareScreen from "./screens/ShareScreen";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  Drawer: undefined;
  ShareScreen: undefined;
};

const MyStack = () => {
  const [loaded] = useFonts({
    Inter: require("./assets/Roboto-Medium.ttf"),
    InterBold: require("./assets/Roboto-Bold.ttf"),
  });

  const DrawerStack = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={Home} />
      </Drawer.Navigator>
    );
  };

  const NavigationStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="ShareScreen"
            component={ShareScreen}
            options={{ title: "Share" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  if (loaded) {
    return (
      <TamaguiProvider config={tamaguiConfig}>
        <RecoilRoot>
          <NavigationStack />
        </RecoilRoot>
      </TamaguiProvider>
    );
  }
};

export default MyStack;
