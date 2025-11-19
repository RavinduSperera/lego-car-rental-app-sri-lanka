import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import "../assets/images/splash_logo.png";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/_onboarding'); // go to onboarding after 2.5s
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* LOGO IMAGE (blue slanted bars) */}
      {/* TODO: put your real image at assets/images/splash-logo.png */}
      <Image
        source={require('../assets/images/splash_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* APP NAME */}
      <Text style={styles.title}>LEGO</Text>

      {/* TAGLINE */}
      <Text style={styles.subtitle}>
        Pick your ideal ride and make every moment of your Sri Lankan journey
        unforgettable.
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    letterSpacing: 2,
    fontWeight: '700',
    color: '#2196C9',
    marginBottom: 8,
  },
  subtitle: {
    width: '70%',
    textAlign: 'center',
    fontSize: 12,
    color: '#B0B0B0',
    lineHeight: 18,
  },
});
