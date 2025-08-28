import React from "react";import { Image, Text, TouchableOpacity, View } from "react-native";

const ValentineBanner = () => {
  return (
    <View className="w-full shadow-2xl mt-16 h-40 rounded-3xl  flex-row items-center justify-between bg-white relative">
      {/* Image */}
      <View className="w-1/4 flex justify-center items-center mb-0 relative">
        <Image
          source={require("@/assets/images/flowers/valientine.png")}
          className="absolute -bottom-3 h-40 w-full rounded-lg"
          resizeMode="cover"
        />
      </View>

      {/* Text content */}
      <View className=" flex-1 pl-4 flex flex-col gap-2 text-left">
        <Text className="text-base font-semibold text-gray-800 ">
          Valentine&#39;s day amazing offer!
        </Text>
        <Text className="text-gray-500 text-sm ">
          Valentine&#39;s Day, also called Saint Valentine&#39;s Day or the
          Feast of Saint Valentine, is celebrated annually on February 14.
        </Text>

        {/* Button */}
        <TouchableOpacity className="w-32 h-10 rounded-md bg-pink-600 items-center justify-center">
          <Text className="text-white font-semibold">SHOP NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValentineBanner;
