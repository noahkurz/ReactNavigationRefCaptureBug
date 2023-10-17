import { useRef } from "react";
import { View } from "react-native";
import { Button, Paragraph, Spacer, Square } from "tamagui";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { SafeAreaView } from "react-native-safe-area-context";
const ShareScreen = () => {
  const ref = useRef<View>(null);

  const handleShare = async () => {
    if (ref.current) {
      const uri = await captureRef(ref.current, {
        format: "jpg",
        quality: 0.8,
      });
      console.log("🚀 ~ file: ShareScreen.tsx:16 ~ handleShare ~ uri:", uri);
      Sharing.shareAsync(uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "red" }} ref={ref}>
          <Square backgroundColor={"blue"} fg={1} height={100}>
            <Paragraph>Share me!</Paragraph>
          </Square>
        </View>
        <Spacer f={1} />
        <Button onPress={handleShare}>Share!</Button>
      </View>
    </SafeAreaView>
  );
};

export default ShareScreen;
