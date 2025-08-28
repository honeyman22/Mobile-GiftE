import React from "react";import { Image, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
export default function SwipperBanner() {
  const images = [
    require("@/assets/images/banner/banner-one.jpg"),
    require("@/assets/images/banner/banner-two.jpg"),
    require("@/assets/images/banner/banner-three.jpg"),
  ];
  return (
    <View style={{ flex: 1 }}>
      <Swiper style={{ height: 300 }} loop autoplay showsPagination={false}>
        {images.map((image, index) => (
          <View key={index + 6} className="flex-1 items-center justify-center ">
            <TouchableOpacity className="w-full   shadow-lg bg-white">
              {/* Image */}
              <Image
                source={image}
                resizeMode="cover"
                className="w-full h-52"
              />
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </View>
  );
}
