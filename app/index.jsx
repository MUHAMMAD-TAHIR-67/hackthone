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
      <Link href={"/register"}>register</Link>
      <Link href={"/login"}>login</Link>
    </View>
  );
}
