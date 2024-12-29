import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { BlurView } from "expo-blur";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const CATEGORIES = [
  { id: "1", name: "Music", icon: "music" },
  { id: "2", name: "Sports", icon: "futbol-o" },
  { id: "3", name: "Art", icon: "paint-brush" },
  { id: "4", name: "Food", icon: "cutlery" },
  { id: "5", name: "Tech", icon: "laptop" },
];

const EVENTS = [
  {
    id: "1",
    title: "Summer Music Festival",
    date: "2024-06-15",
    location: "Central Park",
    category: "Music",
    image: "/api/placeholder/400/200",
    price: "$50",
    seats: "20",
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    date: "2024-07-20",
    location: "Convention Center",
    category: "Tech",
    image: "/api/placeholder/400/200",
    price: "$199",
    seats: "20",
  },
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const renderEventCard = ({ item }) => (
    <TouchableOpacity className="mr-4 bg-white rounded-2xl overflow-hidden shadow-lg w-72">
      <Image source={{ uri: item.image }} className="w-full h-40" />
      <View className="p-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-sm font-semibold text-blue-500">
            {item.category}
          </Text>
          <Text className="text-sm font-bold text-green-500">{item.price}</Text>
        </View>
        <Text className="text-lg font-bold text-gray-800 mb-1">
          {item.title}
        </Text>
        <View className="flex-row items-center mb-1">
          <FontAwesome name="calendar" size={12} color="#666" />
          <Text className="text-sm text-gray-600 ml-2">{item.date}</Text>
        </View>
        <View className="flex-row items-center">
          <FontAwesome name="map-marker" size={12} color="#666" />
          <Text className="text-sm text-gray-600 ml-2">{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/7794361/pexels-photo-7794361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      className="flex-1"
    >
      <StatusBar style="light" />
      <ScrollView className="flex-1">
        <View className="p-6 pt-12">
          <BlurView
            intensity={60}
            tint="light"
            className="rounded-3xl overflow-hidden mb-6"
          >
            <View className="p-6">
              <Text className="text-3xl font-bold text-gray-800 mb-2">
                Discover Events
              </Text>
              <Text className="text-gray-600">
                Find amazing events happening around you
              </Text>
            </View>
          </BlurView>
          <View className="flex-row items-center gap-3 mb-6">
          <Link href={"/events/new"}><AntDesign name="pluscircle" size={24} color="black" /></Link>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center bg-white rounded-xl px-4 shadow-sm">
              <FontAwesome name="search" size={20} color="#3b82f6" />
              <TextInput
                className="flex-1 p-4 ml-2"
                placeholder="Search events..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#64748b"
              />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6"
          >
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.name)}
                activeOpacity={0.7}
                className={`items-center ${
                  selectedCategory === category.name
                    ? "bg-blue-500"
                    : "bg-white"
                } p-4 mr-3 rounded-xl w-24 shadow-sm`}
              >
                <FontAwesome
                  name={category.icon}
                  size={24}
                  color={
                    selectedCategory === category.name ? "#fff" : "#3b82f6"
                  }
                />
                <Text
                  className={`mt-2 font-semibold text-center ${
                    selectedCategory === category.name
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Recent Events
            </Text>
            <FlatList
              data={EVENTS}
              renderItem={renderEventCard}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-800 mb-4">
              Popular Events
            </Text>
            <FlatList
              data={EVENTS.slice().reverse()}
              renderItem={renderEventCard}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
