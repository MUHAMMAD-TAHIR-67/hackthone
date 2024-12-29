import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import "../global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const InitialLayout = () => {
    const { authState } = useAuth();
    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
      console.log(authState?.authenticated);
      if (authState?.authenticated && segments[1] === "Login") {
        router.replace("/");
      } else {
        router.replace("(auth)/register");
      }
      console.log("User Changed");
    }, [authState]);
  };

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}></Stack>;
      <InitialLayout />
    </AuthProvider>
  );
}
