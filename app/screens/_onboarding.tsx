import { useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../assets/images/onBoard_1.gif';

const Onboarding = () => {
  const router = useRouter();

  const handleSkip = () => {
    // TODO: later navigate to login/home
    // example for later: router.replace('/login');
    router.push('/screens/_register');
  };

  const handleNext = () => {
    // go to second onboarding screen
    router.push('/screens/_onboarding2');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* SKIP BUTTON (top-right) */}
        <Pressable style={styles.skipWrapper} onPress={handleSkip}>
          <Text style={styles.skipText}>skip</Text>
        </Pressable>

        {/* ILLUSTRATION */}
        {/* ⬇️ Replace 'onboard-1.png' with your real image file */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/onBoard_1.gif')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* TEXT AREA */}
        <View style={styles.textBlock}>
          <Text style={styles.title}>
            Find the Right{'\n'}Vehicle for Your{'\n'}Journey
          </Text>

          <Text style={styles.subtitle}>
            Browse cars, vans, bikes, and tuk-tuks across Sri Lanka, all listed
            by trusted local owners.
          </Text>
        </View>

        {/* BOTTOM CONTROLS */}
        <View style={styles.bottomRow}>
          {/* DOT INDICATORS */}
          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
          </View>

          {/* NEXT BUTTON */}
          <Pressable style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const PRIMARY_BLUE = '#35A7D6';
const LIGHT_GREY = '#C8C8C8';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  skipWrapper: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  skipText: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  textBlock: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: PRIMARY_BLUE,
    marginBottom: 12,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 13,
    color: '#A0A0A0',
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: LIGHT_GREY,
  },
  dotActive: {
    backgroundColor: PRIMARY_BLUE,
  },
  nextButton: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: PRIMARY_BLUE,
  },
  nextText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
