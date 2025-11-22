import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const FooterNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const isHomeActive = pathname?.includes('/screens/_home') || pathname === '/screens/_home';
  const isSearchActive = pathname?.includes('/screens/_search') || pathname === '/screens/_search';
  const isAddActive = pathname?.includes('/screens/_add') || pathname === '/screens/_add';

  return (
    <View style={styles.navBar}>
      {/* HOME */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_home')}>
        <MaterialCommunityIcons 
          name={isHomeActive ? "home" : "home-outline"} 
          size={28} 
          color={isHomeActive ? "#4CAFD1" : "#A0A0A0"} 
        />
      </Pressable>

      {/* SEARCH */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_search')}> 
        <MaterialCommunityIcons 
          name={isSearchActive ? "magnify" : "magnify"} 
          size={28} 
          color={isSearchActive ? "#4CAFD1" : "#A0A0A0"} 
        />
      </Pressable>

      {/* ADD / CREATE */}
      <Pressable style={styles.navItem} onPress={() => router.push('/screens/_add')}>
        <MaterialCommunityIcons 
          name={isAddActive ? "plus-box" : "plus-box-outline"} 
          size={28} 
          color={isAddActive ? "#4CAFD1" : "#A0A0A0"} 
        />
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
