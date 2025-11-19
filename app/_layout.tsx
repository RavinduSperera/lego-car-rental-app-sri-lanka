import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash screen at root path / */}
        <Stack.Screen name="index" />

        {/* Onboarding screen at /onboarding */}
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="onboarding2" />

        <Stack.Screen name='register'/>
        <Stack.Screen name='login'/>
      </Stack>
    </SafeAreaProvider>
    
  );
}

// add a simple layout just for now