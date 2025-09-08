import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack initialRouteName="login">
      <Stack.Screen
      name="login"
      options={{ headerShown: false, animation: "slide_from_right" }}
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
      options={{ headerShown: true, animation: "slide_from_bottom" }}
      />
    </Stack>
  );
}
