import CategorySwipper from "@/components/home/CategorySwipper";
import SwipperBanner from "@/components/home/SwipperBanner";
import ValentineBanner from "@/components/home/ValentineBanmner";
import { categories } from "@/constants/categories";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-col flex  gap-4">
      <View className="h-52">
        <SwipperBanner />
      </View>
      <CategorySwipper category={categories[0]} />
      <ValentineBanner />
      <CategorySwipper category={categories[1]} />
      <CategorySwipper category={categories[1]} />
      <CategorySwipper category={categories[2]} />
    </ScrollView>
  );
}
