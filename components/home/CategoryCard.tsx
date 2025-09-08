import React from "react";import { Image, Text, View } from "react-native";

const CategoryCard = ({
  image,
  title,
  id,
}: {
  image: any;
  title: string;
  id: string;
}) => {
  return (
    <View className="w-20 flex felx-col gap-1">
      <Image
        className="w-20 h-20 rounded-md overflow-hidden"
        source={image}
        resizeMode={"cover"}
      />
      <Text className="text-gray-500 text-sm font-medium">{title}</Text>
    </View>
  );
};

export default CategoryCard;
