import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../assets/images/map.png';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
    // TODO: later navigate to home/dashboard after successful login
    router.push('/screens/_home');
  };

  const handleSignUp = () => {
    router.push('./_register');
  };

  const handleForgotPassword = () => {
    // TODO: later navigate to forgot-password screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* MAP BANNER */}
          <View style={styles.mapWrapper}>
            <Image
              source={require('../../assets/images/map.png')}
              style={styles.mapImage}
              resizeMode="cover"
            />
          </View>

          {/* CONTENT */}
          <View style={styles.content}>
            <Text style={styles.heading}>Welcome back,  Friend!</Text>
            <Text style={styles.subHeading}>Sign into your account</Text>

            {/* EMAIL */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>E-mail:</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#C4C4C4"
              />
            </View>

            {/* PASSWORD */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="6 characters or more"
                secureTextEntry
                placeholderTextColor="#C4C4C4"
              />
            </View>

            <Pressable
              style={styles.forgotWrapper}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotText}>Forget your password?</Text>
            </Pressable>

            {/* LOGIN BUTTON */}
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            {/* SIGN UP LINK */}
            <View className="bottomTextRow" style={styles.bottomTextRow}>
              <Text style={styles.bottomText}>
                Don&apos;t have an account?{' '}
              </Text>
              <Pressable onPress={handleSignUp}>
                <Text style={styles.signUpText}>sign up</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const PRIMARY_BLUE = '#35A7D6';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  mapWrapper: {
    width: '150%',
    height: 280,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  mapImage: {
    width: '150%',
    height: '148%',
    alignSelf: 'center',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
    color: '#000000',
  },
  subHeading: {
    fontSize: 13,
    textAlign: 'center',
    color: '#888888',
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
    color: '#555555',
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  forgotWrapper: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 18,
  },
  forgotText: {
    fontSize: 12,
    color: '#777777',
  },
  button: {
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  bottomTextRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  bottomText: {
    fontSize: 13,
    color: '#777777',
  },
  signUpText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textDecorationLine: 'underline',
  },
});
