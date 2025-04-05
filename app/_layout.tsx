import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "WhatsApp",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
    </Stack>
  );
}
