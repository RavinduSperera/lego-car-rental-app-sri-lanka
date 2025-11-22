import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterNav from '../../components/FooterNav';
// importing images
import '../../assets/images/avatar.png';
import '../../assets/images/header_logo.png';
import '../../assets/images/search_map.png';
import '../../assets/images/vehicle_bike.png';
import '../../assets/images/vehicle_car.png';
import '../../assets/images/vehicle_cycle.png';
import '../../assets/images/vehicle_van.png';

type VehicleType = 'car' | 'van' | 'bike' | 'cycle' | 'scooty' | 'tuktuk' | 'suv';
type DriverOption = 'with' | 'without';

const SearchScreen: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const [driverOption, setDriverOption] = useState<DriverOption>('with');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TOP BAR – same as home (logo + user) - Fixed Header */}
        <View style={styles.topBar}>
          <View style={styles.logoRow}>
            {/* TODO: replace with real LEGO logo image */}
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
            {/* TODO: replace with real avatar image */}
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatar}
            />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          // contentContainerStyle={styles.scrollContent} - this is the cause of bellow space in the screen
          showsVerticalScrollIndicator={false}
        >
          {/* SEARCH BAR */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchInputWrapper}>
              <MaterialCommunityIcons
                name="magnify"
                size={22}
                color="#B0B0B0"
                style={{ marginHorizontal: 10 }}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="search here"
                placeholderTextColor="#C8C8C8"
              />
              <Pressable style={styles.filterIconWrapper}>
                <MaterialCommunityIcons
                  name="tune-variant"
                  size={22}
                  color="#A0A0A0"
                />
              </Pressable>
            </View>
          </View>

          {/* VEHICLE TYPE */}
          <Text style={styles.sectionTitle}>Select vehicle type</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.vehicleRow}
          >
            {/* Each of these cards uses an IMAGE at top */}
            <VehicleCard
              label="Car"
              isActive={vehicleType === 'car'}
              onPress={() => setVehicleType('car')}
              // TODO: replace with your car icon illustration
              image={require('../../assets/images/vehicle_car.png')}
            />
            <VehicleCard
              label="Van"
              isActive={vehicleType === 'van'}
              onPress={() => setVehicleType('van')}
              // TODO: replace with your van illustration
              image={require('../../assets/images/vehicle_van.png')}
            />
            <VehicleCard
              label="Bike"
              isActive={vehicleType === 'bike'}
              onPress={() => setVehicleType('bike')}
              // TODO: replace with your bike illustration
              image={require('../../assets/images/vehicle_bike.png')}
            />
            <VehicleCard
              label="Cycle"
              isActive={vehicleType === 'cycle'}
              onPress={() => setVehicleType('cycle')}
              // TODO: replace with your cycle illustration
              image={require('../../assets/images/vehicle_cycle.png')}
            />
            <VehicleCard
              label="Scooty"
              isActive={vehicleType === 'scooty'}
              onPress={() => setVehicleType('scooty')}
              // TODO: replace with your cycle illustration
              image={require('../../assets/images/vehicle_scooty.png')}
            />
            <VehicleCard
              label="Tuktuk"
              isActive={vehicleType === 'tuktuk'}
              onPress={() => setVehicleType('tuktuk')}
              // TODO: replace with your cycle illustration
              image={require('../../assets/images/vehicle_tuktuk.png')}
            />
            <VehicleCard
              label="Suv"
              isActive={vehicleType === 'suv'}
              onPress={() => setVehicleType('suv')}
              // TODO: replace with your cycle illustration
              image={require('../../assets/images/vehicle_suv.png')}
            />
          </ScrollView>

          {/* DRIVER OPTION */}
          <Text style={styles.sectionTitle}>Do you need a driver ?</Text>
          <View style={styles.driverRow}>
            <Pressable
              style={[
                styles.driverOption,
                driverOption === 'with' && styles.driverOptionActive,
              ]}
              onPress={() => setDriverOption('with')}
            >
              <Text
                style={[
                  styles.driverText,
                  driverOption === 'with' && styles.driverTextActive,
                ]}
              >
                With Driver
              </Text>
              <Ionicons
                name="person-outline"
                size={18}
                color={driverOption === 'with' ? '#35A7D6' : '#777'}
              />
            </Pressable>

            <Pressable
              style={[
                styles.driverOption,
                driverOption === 'without' && styles.driverOptionActive,
              ]}
              onPress={() => setDriverOption('without')}
            >
              <Text
                style={[
                  styles.driverText,
                  driverOption === 'without' && styles.driverTextActive,
                ]}
              >
                Without Driver
              </Text>
              <Ionicons
                name="person-outline"
                size={18}
                color={driverOption === 'without' ? '#35A7D6' : '#777'}
              />
            </Pressable>
          </View>

          {/* TIME DURATION (static calendar UI) */}
          <Text style={styles.sectionTitle}>Select Time Duration</Text>
          <View style={styles.calendarCard}>
            <Text style={styles.calendarHeaderDate}>Mon, Aug 17</Text>
            <View style={styles.calendarDivider} />

            <View style={styles.calendarMonthRow}>
              <Text style={styles.calendarMonth}>August 2025</Text>
              <View style={styles.calendarArrows}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={22}
                  color="#777"
                />
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color="#777"
                />
              </View>
            </View>

            {/* Simple 7-column calendar grid – static layout */}
            <View style={styles.calendarGrid}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                <Text key={d} style={styles.calendarDayLabel}>
                  {d}
                </Text>
              ))}

              {/* Row of days – you can adjust numbers to match your design */}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                const isSelected = day === 17;
                const isOutlined = day === 5;

                return (
                  <View
                    key={day}
                    style={[
                      styles.calendarDayCell,
                      isSelected && styles.calendarDaySelected,
                      isOutlined && styles.calendarDayOutlined,
                    ]}
                  >
                    <Text
                      style={[
                        styles.calendarDayText,
                        isSelected && styles.calendarDayTextSelected,
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* LOCATION SECTION */}
          <Text style={styles.sectionTitle}>Select Location</Text>

          {/* Map image card */}
          <View style={styles.mapCard}>
            {/* TODO: replace with your real map snapshot image with pin */}
            <Image
              source={require('../../assets/images/search_map.png')}
              style={styles.mapImage}
              resizeMode="cover"
            />
          </View>

          {/* Location input row */}
          <View style={styles.locationInputWrapper}>
            <View style={styles.locationIconBox}>
              <MaterialCommunityIcons
                name="map-search-outline"
                size={20}
                color="#35A7D6"
              />
            </View>
            <TextInput
              style={styles.locationInput}
              placeholder="75/B, Jacob Avn, Colombo 05"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          {/* SEARCH BUTTON */}
          <Pressable style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </Pressable>
        </ScrollView>

        {/* FOOTER NAV */}
        <FooterNav />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

// Reusable vehicle card component
type VehicleCardProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
  image: any; // ImageSourcePropType, but 'any' is ok for quick typing
};

const VehicleCard: React.FC<VehicleCardProps> = ({
  label,
  isActive,
  onPress,
  image,
}) => {
  return (
    <Pressable
      style={[styles.vehicleCard, isActive && styles.vehicleCardActive]}
      onPress={onPress}
    >
      <Image source={image} style={styles.vehicleImage} resizeMode="contain" />
      <Text
        style={[styles.vehicleLabel, isActive && styles.vehicleLabelActive]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

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
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196C9',
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
  searchWrapper: {
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 16,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  filterIconWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 4,
    color: '#000',
  },
  vehicleRow: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  vehicleCard: {
    width: 80,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginRight: 12,
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  vehicleCardActive: {
    borderWidth: 2,
    borderColor: PRIMARY_BLUE,
    backgroundColor: '#E6F6FC'
  },
  vehicleImage: {
    width: 46,
    height: 46,
    marginBottom: 6,
  },
  vehicleLabel: {
    fontSize: 12,
    color: '#555',
  },
  vehicleLabelActive: {
    fontWeight: '600',
    color: '#000',
  },
  driverRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  driverOption: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 8,
  },
  driverOptionActive: {
    borderColor: PRIMARY_BLUE,
    backgroundColor: '#E6F6FC',
  },
  driverText: {
    fontSize: 13,
    color: '#777',
  },
  driverTextActive: {
    fontWeight: '600',
    color: '#000',
  },
  calendarCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 24,
    backgroundColor: '#F8FBFF',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  calendarHeaderDate: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  calendarDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  calendarMonthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  calendarMonth: {
    fontSize: 13,
    color: '#555',
  },
  calendarArrows: {
    flexDirection: 'row',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  calendarDayLabel: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
    color: '#777',
  },
  calendarDayCell: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    marginVertical: 2,
  },
  calendarDayText: {
    fontSize: 12,
    color: '#444',
  },
  calendarDaySelected: {
    backgroundColor: '#1E88E5',
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  calendarDayTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  calendarDayOutlined: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#673AB7',
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  mapCard: {
    marginHorizontal: 16,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#EEE',
    height: 160,
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  locationInputWrapper: {
    marginHorizontal: 16,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  locationIconBox: {
    width: 44,
    height: 44,
    borderRightWidth: 1,
    borderRightColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 13,
  },
  searchButton: {
    marginHorizontal: 10,
    marginBottom: 24,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
