import { Stack } from "expo-router";
import GlobalProvider from "../contexts/GlobalProvider";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="spost" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="post" />
      </Stack>
    </GlobalProvider>
  );
}
