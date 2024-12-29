import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import { login } from "../../api/auth";
import { useAuth } from "@/context/AuthContext";

export default function LoginScreen() {
  const router = useRouter();
  const { setAuthState } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      return alert("Fill all fields");
    }

    const response = login(formData.email, formData.password);

    if (!response.error) {
      setAuthState({ token: response.token, authenticated: true });
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1557683311-eac922347aa1",
      }}
      className="flex-1"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <StatusBar style="light" />
        <ScrollView className="flex-1">
          <View className="flex-1 p-6 justify-center min-h-screen">
            <BlurView
              intensity={60}
              tint="light"
              className="rounded-3xl overflow-hidden"
            >
              <View className="p-8 bg-white bg-opacity-20">
                <View className="items-center mb-8">
                  <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
                    <FontAwesome name="user" size={32} color="#3b82f6" />
                  </View>
                  <Text className="text-3xl font-bold text-gray-800">
                    Welcome Back
                  </Text>
                  <Text className="text-gray-600 mt-2 text-center">
                    Sign in to continue
                  </Text>
                </View>

                <View className="space-y-4">
                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">
                      Email Address
                    </Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="envelope" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={formData.email}
                        onChangeText={(text) =>
                          setFormData({ ...formData, email: text })
                        }
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">
                      Password
                    </Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="lock" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) =>
                          setFormData({ ...formData, password: text })
                        }
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  <TouchableOpacity className="items-end">
                    <Text className="text-blue-500 font-semibold">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-blue-500 p-4 rounded-xl mt-6 shadow-lg"
                  >
                    <Text className="text-white text-center font-semibold text-lg">
                      Sign In
                    </Text>
                  </TouchableOpacity>

                  <View className="mt-6">
                    <Text className="text-center text-gray-600 mb-4">
                      Or continue with
                    </Text>
                    <View className="flex-row justify-center space-x-4">
                      <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
                        <FontAwesome name="google" size={24} color="#DB4437" />
                      </TouchableOpacity>
                      <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
                        <FontAwesome name="apple" size={24} color="#000000" />
                      </TouchableOpacity>
                      <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
                        <FontAwesome
                          name="facebook"
                          size={24}
                          color="#4267B2"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View className="flex-row justify-center mt-4">
                    <Text className="text-gray-600">
                      Don't have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("(auth)/register")}
                    >
                      <Text className="text-blue-500 font-semibold">
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </BlurView>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
