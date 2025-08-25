import axios from "axios";import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const token =
      Platform.OS === "web"
        ? localStorage.getItem("token")
        : await SecureStore.getItemAsync("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(new Error(error.message ?? "An error occurred"));
  }
);

export default api;
