import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import "../../global.css";
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          className="w-[250px] h-[450px] self-center"
        />
      }
    >
      <View className="items-center mt-4 mb-2">
        <Text className="text-3xl font-bold text-center">
          Welcome to Tailwind
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
