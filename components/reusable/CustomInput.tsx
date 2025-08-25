import React from "react";import { Controller, FieldErrors } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

interface CustomInputProps extends React.ComponentProps<typeof TextInput> {
  control: any;
  id: string;
  label: string;
  error: FieldErrors;
}
const CustomInput = ({
  control,
  id,
  label,
  error,
  ...props
}: CustomInputProps) => {
  return (
    <View className="w-full flex felx-col gap-2">
      <Text className="text-gray-500 text-base font-medium">{label}</Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...props}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={"#999"}
            className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
          />
        )}
        name={id}
      />
      {error[id] && (
        <Text className="text-red-500 -mt-1 text-xs font-medium">
          {error[id]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
