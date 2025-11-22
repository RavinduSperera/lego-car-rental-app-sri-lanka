import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// importing images
import '../../assets/images/avatar.png';
import '../../assets/images/car_pic.jpg';
import '../../assets/images/header_logo.png';
import '../../assets/images/home_banner.png';
import '../../assets/images/jeepImage.png';
import '../../assets/images/post_imge_1.png';
import '../../assets/images/post_imge_2.png';

// import footer nav bar
import FooterNav from '../../components/FooterNav';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const router = useRouter();

  // auto slider state for "Try more options"
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerScrollRef = useRef<ScrollView | null>(null);

  const banners = [0, 1]; // we have 2 images

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (bannerIndex + 1) % banners.length;
      setBannerIndex(next);

      if (bannerScrollRef.current) {
        bannerScrollRef.current.scrollTo({
          x: next * width,
          animated: true,
        });
      }
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, [bannerIndex, width]);

  // dummy data for horizontal sliders
  const mostDemanded = [0, 1, 2];
  const best4x4 = [0, 1];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TOP BAR: logo + user profile - Fixed Header */}
        <View style={styles.topBar}>
          {/* TODO: replace with your LEGO logo image */}
          <View style={styles.logoRow}>
            <Image
              source={require('../../assets/images/header_logo.png')}
              style={styles.logoMark}
              resizeMode="contain"
            />
          </View>

          <View style={styles.userRow}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>David Jay</Text>
              <Text style={styles.userEmail}>david@gmail.com</Text>
            </View>
            {/* TODO: replace with user avatar image */}
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatar}
            />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          // contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* HERO BANNER: "WELCOME TO SRI LANKA" with lady in saree */}
          {/* This whole section is a single IMAGE, as you requested */}
          <View style={styles.heroWrapper}>
            {/* TODO: export your full hero art and replace this path */}
            <Image
              source={require('../../assets/images/home_banner.png')}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>

          {/* MOST DEMANDS */}
          <Text style={styles.sectionTitle}>Most Demands</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            style={styles.horizontalScroll}
          >
            {mostDemanded.map((itemIndex) => (
              <View key={itemIndex} style={styles.carCard}>
                {/* TODO: car image for this card */}
                <Image
                  source={require('../../assets/images/car_pic.jpg')}
                  style={styles.carImage}
                  resizeMode="cover"
                />

                <View style={styles.carInfo}>
                  <View style={styles.titleRow}>
                    <Text style={styles.carTitle}>Corolla Axio Hybrid G</Text>
                    {/* status pill */}
                    <View style={[styles.statusPill, { backgroundColor: '#00C853' }]}>
                      <Text style={styles.statusText}>Available</Text>
                    </View>
                  </View>

                  {/* stars line – you can later replace with vector icons */}
                  <Text style={styles.starRow}>★★★★★</Text>

                  <Text style={styles.carMeta}>
                    Distance: <Text style={styles.carMetaBold}>50000km</Text>
                  </Text>
                  <Text style={styles.carMeta}>
                    Owner: <Text style={styles.carMetaBold}>Sajith Madawala</Text>
                  </Text>
                  <Text style={styles.carMeta}>
                    Location:{' '}
                    <Text style={styles.carMetaBold}>Maradana, Colombo</Text>
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* BEST 4x4s */}
          <Text style={styles.sectionTitle}>Best 4x4s</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            style={styles.horizontalScroll}
          >
            {best4x4.map((itemIndex) => (
              <View key={itemIndex} style={styles.carCard}>
                {/* TODO: 4x4 image for this card */}
                <Image
                  source={require('../../assets/images/jeepImage.png')}
                  style={styles.carImage}
                  resizeMode="cover"
                />

                <View style={styles.carInfo}>
                  <View style={styles.titleRow}>
                    <Text style={styles.carTitle}>Hybrid G SUV</Text>
                    {/* status pill – booked */}
                    <View style={[styles.statusPill, { backgroundColor: '#FF5252' }]}>
                      <Text style={styles.statusText}>Booked</Text>
                    </View>
                  </View>
                  <Text style={styles.starRow}>★★★★★</Text>

                  <Text style={styles.carMeta}>
                    Distance: <Text style={styles.carMetaBold}>50000km</Text>
                  </Text>
                  <Text style={styles.carMeta}>
                    Owner: <Text style={styles.carMetaBold}>Sajith Madawala</Text>
                  </Text>
                  <Text style={styles.carMeta}>
                    Location:{' '}
                    <Text style={styles.carMetaBold}>Maradana, Colombo</Text>
                  </Text>
                </View>

                {/* TODO: you can add bookmark icon as image here */}
              </View>
            ))}
          </ScrollView>

          {/* TRY MORE OPTIONS – auto-scrolling banner slider */}
          <Text style={styles.sectionTitle}>Try more options</Text>
          <View style={styles.bannerContainer}>
            <ScrollView
              ref={bannerScrollRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.bannerScrollContent}
            >
              {banners.map((_, idx) => (
                <View key={idx} style={styles.bannerSlide}>
                  <View style={styles.bannerCard}>
                    {/* TODO: 1st banner image (e.g. Tuk Tuk beach) */}
                    {idx === 0 && (
                      <Image
                        source={require('../../assets/images/post_imge_1.png')}
                        style={styles.bannerImage}
                        resizeMode="cover"
                      />
                    )}

                    {/* TODO: 2nd banner image */}
                    {idx === 1 && (
                      <Image
                        source={require('../../assets/images/post_imge_2.png')}
                        style={styles.bannerImage}
                        resizeMode="cover"
                      />
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* BOTTOM NAV BAR */}
        {/* footer */}
        <FooterNav />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const CARD_RADIUS = 22;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    zIndex: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoMark: {
    width: 100,
    height: 22,
    marginRight: 6,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginRight: 10,
    alignItems: 'flex-end',
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  userEmail: {
    fontSize: 11,
    color: '#888',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  heroWrapper: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 170,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    color: '#000',
  },
  horizontalScroll: {
    marginBottom: 8,
  },
  horizontalList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  carCard: {
    width: 290,
    borderRadius: CARD_RADIUS,
    backgroundColor: '#FFFFFF',
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 150,
  },
  carInfo: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    marginRight: 8,
  },
  starRow: {
    fontSize: 12,
    color: '#FFC107',
    marginBottom: 8,
  },
  carMeta: {
    fontSize: 12,
    color: '#777',
    marginBottom: 2,
  },
  carMetaBold: {
    fontWeight: '600',
    color: '#444',
  },
  statusPill: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bannerContainer: {
    marginBottom: 16,
  },
  bannerScrollContent: {
    paddingHorizontal: 0,
  },
  bannerSlide: {
    width: width,
    paddingHorizontal: 16,
  },
  bannerCard: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#EEE',
    height: 200,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});
