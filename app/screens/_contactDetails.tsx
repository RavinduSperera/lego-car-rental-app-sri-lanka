import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContactDetailsScreen: React.FC = () => {
  const router = useRouter();

  const handleCall = () => {
    // TODO: later use Linking.openURL(`tel:${phoneNumber}`)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
          <Text style={styles.headerTitle}>Contact Details</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* OWNER CARD */}
          <View style={styles.ownerCard}>
            {/* 👉 IMAGE PLACEHOLDER: owner avatar */}
            <Image
              source={require('../../assets/images/owner_avatar.jpeg')}
              style={styles.ownerAvatar}
            />

            <View style={styles.ownerInfoBox}>
              <Text style={styles.ownerName}>Jagath Wijesooriya</Text>

              <View style={styles.phoneRow}>
                <View style={styles.phoneTextBox}>
                  <Text style={styles.phoneLabel}>Phone Number</Text>
                  <Text style={styles.phoneValue}>(+94) 77 123 1234</Text>
                </View>

                <Pressable style={styles.callButton} onPress={handleCall}>
                  <Ionicons name="call" size={22} color="#FFFFFF" />
                </Pressable>
              </View>
            </View>
          </View>

          {/* PICKUP LOCATION */}
          <Text style={styles.sectionTitle}>Pickup Location</Text>

          <View style={styles.locationCard}>
            {/* 👉 IMAGE PLACEHOLDER: map snapshot with pin */}
            <Image
              source={require('../../assets/images/search_map.png')}
              style={styles.locationImage}
              resizeMode="cover"
            />

            <View style={styles.locationBottom}>
              <Text style={styles.locationName}>Palawatte, Japura</Text>
              <Text style={styles.locationNote}>
                Exact address will be provided upon booking confirmation.
              </Text>
            </View>
          </View>

          {/* NOTE */}
          <Text style={styles.sectionTitle}>Note</Text>

          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              Please feel free to call me 30 mins before you arrival for a
              smooth key handover. The car is parked in the driveway. Also,
              make sure to bring your driver&apos;s license for verification.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetailsScreen;

const PRIMARY_BLUE = '#35A7D6';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },

  ownerCard: {
    marginTop: 8,
    marginBottom: 18,
    alignItems: 'center',
  },
  ownerAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: -36, // overlap with white card
    zIndex: 1,
  },
  ownerInfoBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingTop: 42,
    paddingBottom: 18,
    paddingHorizontal: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  ownerName: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneTextBox: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  phoneLabel: {
    fontSize: 12,
    color: '#777',
    marginBottom: 2,
  },
  phoneValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  callButton: {
    marginLeft: 10,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },

  locationCard: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#EEE',
    marginBottom: 18,
  },
  locationImage: {
    width: '100%',
    height: 150,
  },
  locationBottom: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff8a',
  },
  locationName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationNote: {
    fontSize: 12,
    color: '#777',
  },

  noteBox: {
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#90CAF9',
    backgroundColor: '#E6F3FF',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  noteText: {
    fontSize: 13,
    color: '#4A4A4A',
    lineHeight: 20,
  },
});
