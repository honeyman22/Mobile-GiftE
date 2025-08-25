import ParallaxScrollView from "@/components/ParallaxScrollView";
import CustomInput from "@/components/reusable/CustomInput";
import { AuthSchema } from "@/schema/auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { Button, View } from "react-native";

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AuthSchema) });

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
          onPress={handleSubmit((data) => console.log(data))}
        />
      </View>
    </ParallaxScrollView>
  );
}
