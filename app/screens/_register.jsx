import { useRouter } from 'expo-router';
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

const RegisterScreen = () => {
  const router = useRouter();

  const handleCreateAccount = () => {
    // TODO: later navigate to home or verify email screen
  };

  const handleSignIn = () => {
    router.push('/screens/_login');
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
          {/* MAP IMAGE */}
          <View style={styles.mapWrapper}>
            <Image
              source={require('../../assets/images/map.png')}
              style={styles.mapImage}
              resizeMode="cover" 
            />
          </View>

          {/* CONTENT AREA */}
          <View style={styles.content}>
            <Text style={styles.heading}>Create your account</Text>

            {/* NAME */}
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="John Lock"
                placeholderTextColor="#C4C4C4"
              />
            </View>

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

            {/* CREATE ACCOUNT BUTTON */}
            <Pressable style={styles.button} onPress={handleCreateAccount}>
              <Text style={styles.buttonText}>Create account</Text>
            </Pressable>

            {/* SIGN IN TEXT */}
            <View style={styles.bottomTextRow}>
              <Text style={styles.bottomText}>Already have an account? </Text>
              <Pressable onPress={handleSignIn}>
                <Text style={styles.signInText}>sign in</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    marginBottom: 28,
    color: '#000000',
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
  button: {
    marginTop: 20,
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
  signInText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textDecorationLine: 'underline',
  },
});
