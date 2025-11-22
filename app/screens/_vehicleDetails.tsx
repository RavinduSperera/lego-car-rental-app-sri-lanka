import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
// importing images
import '../../assets/images/car_details_1.jpg';
import '../../assets/images/car_details_2.jpg';
import '../../assets/images/car_details_3.jpg';
import '../../assets/images/car_details_4.jpg';
import '../../assets/images/owner_avatar.jpeg';
import '../../assets/images/search_map.png';

const VehicleDetails: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
          <Text style={styles.headerTitle}>Car Details</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/* IMAGE SLIDER */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
          >
            {/* TODO: Replace with dynamic images */}
            <Image
              source={require('../../assets/images/car_details_1.jpg')}
              style={styles.sliderImage}
              resizeMode="cover"
            />
            <Image
              source={require('../../assets/images/car_details_2.jpg')}
              style={styles.sliderImage}
              resizeMode="cover"
            />
            <Image
              source={require('../../assets/images/car_details_3.jpg')}
              style={styles.sliderImage}
              resizeMode="cover"
            />
            <Image
              source={require('../../assets/images/car_details_4.jpg')}
              style={styles.sliderImage}
              resizeMode="cover"
            />
          </ScrollView>

          {/* TITLE + CATEGORY */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Corolla Axio Hybrid G</Text>

            <View style={styles.typeBadge}>
              <Text style={styles.typeBadgeText}>Car</Text>
            </View>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.description}>
            The Toyota Corolla Axio is a compact sedan version of the globally
            popular Toyota Corolla, primarily designed for the Japanese domestic
            market. Known for its fuel efficiency, comfortable ride, and
            durability, it is a popular choice for daily commuting and urban
            driving.
          </Text>

          {/* KEY FEATURES */}
          <Text style={styles.sectionHeader}>Key Features</Text>

          <View style={styles.featureGrid}>
            <FeatureBox icon="car-seat" label="5 Seats" />
            <FeatureBox icon="door" label="4 Doors" />
            <FeatureBox icon="steering" label="Manual" />
            <FeatureBox icon="gas-station" label="Petrol" />
          </View>

          {/* OWNER DETAILS */}
          <Text style={styles.sectionHeader}>Owner Details</Text>

          <View style={styles.ownerCard}>
            {/* TODO: replace avatar */}
            <Image
              source={require('../../assets/images/owner_avatar.jpeg')}
              style={styles.ownerImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.ownerName}>Jagath Wijesooriya</Text>

              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>4.7 (25 reviews)</Text>
              </View>
            </View>
          </View>

          {/* LOCATION */}
          <Text style={styles.sectionHeader}>Location</Text>

          <View style={styles.locationCard}>
            <Image
              source={require('../../assets/images/search_map.png')}
              style={styles.locationImage}
              resizeMode="cover"
            />

            <View style={styles.locationTextWrapper}>
              <Text style={styles.locationText}>Palawatte, Japura</Text>
            </View>
          </View>

          {/* CONTACT BUTTON */}
          <Pressable style={styles.contactButton} onPress={() => router.push('/screens/_contactDetails')}>
            <Text style={styles.contactButtonText}>View Contact Details</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VehicleDetails;

const FeatureBox = ({ icon, label }: { icon: string; label: string }) => (
  <View style={styles.featureBox}>
    <MaterialCommunityIcons name={icon as any} size={30} color="#35A7D6" />
    <Text style={styles.featureLabel}>{label}</Text>
  </View>
);

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

  sliderImage: {
    width: 300,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },

  titleRow: {
    marginTop: 12,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
  },

  typeBadge: {
    backgroundColor: '#E0F3FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 14,
  },

  typeBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: PRIMARY_BLUE,
  },

  description: {
    marginHorizontal: 16,
    marginTop: 8,
    fontSize: 13,
    lineHeight: 20,
    color: '#555',
  },

  sectionHeader: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '700',
  },

  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 16,
    gap: 12,
  },

  featureBox: {
    width: '46%',
    backgroundColor: '#F3F9FF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },

  featureLabel: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },

  ownerCard: {
    flexDirection: 'row',
    backgroundColor: '#F3F9FF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 16,
  },

  ownerImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 14,
  },

  ownerName: {
    fontSize: 15,
    fontWeight: '700',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },

  locationCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },

  locationImage: {
    width: '100%',
    height: 160,
  },

  locationTextWrapper: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },

  locationText: {
    backgroundColor: '#ffffff7d',
    fontSize: 15,
    fontWeight: '600',
  },

  contactButton: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 14,
    alignItems: 'center',
  },

  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
