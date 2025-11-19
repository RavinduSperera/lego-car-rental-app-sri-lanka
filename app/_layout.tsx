import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Splash screen at root path / */}
      <Stack.Screen name="index" />

      {/* Onboarding screen at /onboarding */}
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}

// add a simple layout just for now