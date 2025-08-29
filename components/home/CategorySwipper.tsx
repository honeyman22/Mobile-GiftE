import React from "react";import { Dimensions, FlatList, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 4;
const CategorySwipper = ({
  category,
}: {
  category: {
    id: string;
    name: string;
    items: {
      id: string;
      name: string;
      image: any;
    }[];
  };
}) => {
  return (
    <View style={{ flex: 1 }} className="p-2">
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        {category.name}
      </Text>

      <FlatList
        data={category.items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        snapToInterval={CARD_WIDTH} // snap per card
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH, alignItems: "center" }}>
            <CategoryCard image={item.image} title={item.name} id={item.id} />
          </View>
        )}
      />
    </View>
  );
};

export default CategorySwipper;
