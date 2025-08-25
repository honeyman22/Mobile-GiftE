import api from "@/api/api";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import CustomInput from "@/components/reusable/CustomInput";
import { AuthSchema } from "@/schema/auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useForm } from "react-hook-form";
import { Button, Platform, View } from "react-native";

async function save(key: string, value: string) {
  if (Platform.OS === "web") {
    localStorage.setItem(key, value); // fallback
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}
export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AuthSchema) });
  const router = useRouter();
  const handleLogin = async (data: any) => {
    const response = await api
      .post("login", data)
      .then((res) => res)
      .catch((err) => err.response);
    try {
      if (response.status === 201) {
        save("token", JSON.stringify(response.data.data.accessToken));
        router.replace("/explore");
      } else {
        console.log("Login failed:", response.data);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

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
        <CustomInput
          control={control}
          id="email"
          label="Email"
          error={errors}
          placeholder="Enter your email"
        />
        <CustomInput
          control={control}
          id="password"
          label="Password"
          error={errors}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button
          title="Submit"
          onPress={handleSubmit((data) => handleLogin(data))}
        />
      </View>
    </ParallaxScrollView>
  );
}
