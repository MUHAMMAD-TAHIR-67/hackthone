import { Link } from "expo-router";
import { Text, View } from "react-native";

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
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
