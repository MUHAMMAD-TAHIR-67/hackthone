import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      className="bg-blue-600"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="flex gap-4">
        <Link className="bg-gray-200" href={"(auth)/register"}>register</Link>
        <Link className="bg-gray-200" href={"(auth)/login"}>login</Link>
        <Link className="bg-gray-200" href={"/frontend"}>Frontend</Link>
        <Link className="bg-gray-200" href={"/events/new"}>add Event</Link>
      </View>
    </View >
  );
}
