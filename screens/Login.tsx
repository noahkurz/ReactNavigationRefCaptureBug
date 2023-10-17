import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import { loggedInState } from "../RecoilStates/loggedInState";
import { Button, Spacer, Stack } from "tamagui";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);
  const handlePress = async () => {
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack f={1}>
        <Spacer flexGrow={1} />
        <Button onPress={handlePress}>Log in!</Button>
      </Stack>
    </SafeAreaView>
  );
};

export default Login;
