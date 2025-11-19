import { StyleSheet, Text, View } from 'react-native';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding screens will come here 👋</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
