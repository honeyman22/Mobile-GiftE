import SwipperBanner from "@/components/home/SwipperBanner";import React from "react";
import { Text, View } from "react-native";

const Gifts = () => {
  return (
    <View className="p-4 flex h-full flex-col gap-8">
      <Text>Gifts</Text>
      <Text>Nishan dai</Text>

      <SwipperBanner />
    </View>
  );
};

export default Gifts;
