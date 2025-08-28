import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import "../../global.css";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        headerRight: () => (
          <View className={"px-3 flex-row items-center gap-1"}>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <MaterialCommunityIcons
                name="cart-heart"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 16 }}>
              <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="flowers"
        options={{
          title: "Flowers",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Sports",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sports-esports" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gifts"
        options={{
          title: "Gifts",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gift" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
