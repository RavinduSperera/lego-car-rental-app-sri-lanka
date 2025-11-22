import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const FooterNav = () => {
  const router = useRouter();

  return (
    <View style={styles.navBar}>
      {/* HOME */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_home')}>
        <MaterialCommunityIcons name="home" size={28} color="#A0A0A0" />
      </Pressable>

      {/* SEARCH */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_search')}> 
        <MaterialCommunityIcons name="magnify" size={28} color="#A0A0A0" />
      </Pressable>

      {/* ADD / CREATE */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_add')}>
        <MaterialCommunityIcons name="plus-box-outline" size={28} color="#A0A0A0" />
      </Pressable>
    </View>
  );
};

export default FooterNav;

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    padding: 8,
  },
});
