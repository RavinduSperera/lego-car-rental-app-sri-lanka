import { useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../assets/images/onBoard_2.gif";

const Onboarding2 = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // goes back to first onboarding
  };

  const handleSkip = () => {
    // navigate to register page
    router.push('/screens/_register');
  };

  const handleNext = () => {
    // navigate to register page
    router.push('/screens/_register');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TOP BAR: back + skip */}
        <View style={styles.topRow}>
          <Pressable onPress={handleBack}>
            <Text style={styles.backArrow}>{'\u2190'}</Text>
          </Pressable>

          <Pressable onPress={handleSkip}>
            <Text style={styles.skipText}>skip</Text>
          </Pressable>
        </View>

        {/* ILLUSTRATION */}
        {/* ⬇️ replace onboard-2.png with your real file */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/onBoard_2.gif')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* TEXT BLOCK */}
        <View style={styles.textBlock}>
          <Text style={styles.title}>Connect &amp; Pick Up Easily</Text>

          <Text style={styles.subtitle}>
            Select a vehicle and instantly access the owner&apos;s contact and
            pickup location, keeping everything simple and hassle free.
          </Text>
        </View>

        {/* BOTTOM ROW: dots + Next */}
        <View style={styles.bottomRow}>
          {/* DOT INDICATORS – second one active now */}
          <View style={styles.dotsRow}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotActive]} />
          </View>

          <Pressable style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding2;

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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  backArrow: {
    fontSize: 22,
    color: '#9E9E9E',
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
