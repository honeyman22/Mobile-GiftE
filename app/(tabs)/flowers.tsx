import SwipperBanner from "@/components/home/SwipperBanner";import ValentineBanner from "@/components/home/ValentineBanmner";
import React from "react";
import { View } from "react-native";

const Flowers = () => {
  return (
    <View className="p-4 flex h-full flex-col gap-8">
      <ValentineBanner />
      <View className=" h-52">
        <SwipperBanner />
      </View>
    </View>
  );
};

export default Flowers;
