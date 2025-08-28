import SwipperBanner from "@/components/home/SwipperBanner";
import ValentineBanner from "@/components/home/ValentineBanmner";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className=" h-52">
        <SwipperBanner />
      </View>
      <ValentineBanner />
      <ValentineBanner />
      <ValentineBanner />
      <ValentineBanner />
    </ScrollView>
  );
}
