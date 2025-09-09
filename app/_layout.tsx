import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack initialRouteName="login">
      <Stack.Screen
      name="index"
      options={{ headerShown: false, animation: "default" }}
      />
      <Stack.Screen
      name="login"
      options={{ headerShown: false, animation: "simple_push" }}
      />
      <Stack.Screen
      name="display"
      options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
      name="detail"
      options={{ headerShown: true, animation: "slide_from_right" }}
      />
      <Stack.Screen
      name="counter"
      options={{ headerShown: true, animation: "flip" }}
      />
    </Stack>
  );
}
