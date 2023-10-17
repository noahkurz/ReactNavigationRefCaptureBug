import { RecoilRoot, useRecoilState } from "recoil";
import { useFonts } from "expo-font";
import { TamaguiProvider, XStack } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import ShareScreen from "./screens/ShareScreen";
import Login from "./screens/Login";
import { loggedInState } from "./RecoilStates/loggedInState";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

const Stack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

export type RootStackParamList = {
  Drawer: undefined;
  ShareScreen: undefined;
};

export type DrawerStackParamList = {
  HomeScreen: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

const MyStack = () => {
  const [loaded] = useFonts({
    Inter: require("./assets/Roboto-Medium.ttf"),
    InterBold: require("./assets/Roboto-Bold.ttf"),
  });

  const Auth = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Navigator>
    );
  };
  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
    const insets = useSafeAreaInsets();
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingBottom: insets.bottom,
        }}
      >
        <Image
          contentFit="contain"
          source={require("./assets/headerImage.png")}
          style={{ alignSelf: "center", width: "60%", height: 200 }}
        />
        <XStack width="60%" />
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => {
            setIsLoggedIn(false);
          }}
        />
      </DrawerContentScrollView>
    );
  };

  const DrawerStack = () => {
    return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTitleAlign: "center",
          drawerStyle: {
            width: "75%",
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={Home} />
      </Drawer.Navigator>
    );
  };

  const NavigationStack = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
    SplashScreen.hideAsync();
    if (!isLoggedIn) {
      return (
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerStack}
            options={{ headerShown: false }}
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
