import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';

export default function RegisterScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Registration data:', formData);
    // router.push('/(tabs)/home');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1' }}
      className="flex-1"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <StatusBar style="light" />
        <ScrollView className="flex-1">
          <View className="flex-1 p-6 justify-center min-h-screen">
            {/* Card Container */}
            <BlurView intensity={60} tint="light" className="rounded-3xl overflow-hidden">
              <View className="p-8 bg-white bg-opacity-20">
                {/* Header */}
                <View className="items-center mb-8">
                  <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
                    <FontAwesome name="user-plus" size={32} color="#3b82f6" />
                  </View>
                  <Text className="text-3xl font-bold text-gray-800">Create Account</Text>
                  <Text className="text-gray-600 mt-2 text-center">Join us and start your journey</Text>
                </View>

                {/* Form */}
                <View className="space-y-4">
                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">Full Name</Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="user" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">Email Address</Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="envelope" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={formData.email}
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">Password</Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="lock" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) => setFormData({ ...formData, password: text })}
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  <View>
                    <Text className="text-gray-700 mb-2 font-semibold">Confirm Password</Text>
                    <View className="flex-row items-center bg-white bg-opacity-80 rounded-xl px-4">
                      <FontAwesome name="lock" size={20} color="#3b82f6" />
                      <TextInput
                        className="flex-1 p-4 ml-2"
                        placeholder="Confirm your password"
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                        placeholderTextColor="#64748b"
                      />
                    </View>
                  </View>

                  {error ? (
                    <Text className="text-red-500 text-center bg-red-100 p-3 rounded-lg">
                      {error}
                    </Text>
                  ) : null}

                  <TouchableOpacity
                    onPress={handleRegister}
                    className="bg-blue-500 p-4 rounded-xl mt-6 shadow-lg"
                  >
                    <Text className="text-white text-center font-semibold text-lg">
                      Create Account
                    </Text>
                  </TouchableOpacity>

                  <View className="flex-row justify-center mt-4">
                    <Text className="text-gray-600">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                      <Text className="text-blue-500 font-semibold">Sign In</Text>
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