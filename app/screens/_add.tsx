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
// import images
import '../../assets/images/avatar.png';
import '../../assets/images/header_logo.png';

type DriverOption = 'with' | 'without';

const AddVehicleScreen: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<string>('');
  const [driverOption, setDriverOption] = useState<DriverOption>('with');

  const handleUploadImages = () => {
    // TODO: add image picker logic here (expo-image-picker or similar)
  };

  const handleSubmit = () => {
    // TODO: submit vehicle details to backend
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* TOP BAR – same as other pages - Fixed Header */}
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
            {/* TODO: replace with actual avatar image */}
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
          {/* PAGE TITLE */}
          <View style={styles.headerBlock}>
            <Text style={styles.pageTitle}>Add your Vehicle for Rent</Text>
            <Text style={styles.pageSubtitle}>
              only vehicle owners can post
            </Text>
          </View>

          {/* VEHICLE TYPE (fake dropdown) */}
          <Text style={styles.fieldTitle}>Vehicle Type</Text>
          <Pressable
            style={styles.dropdown}
            onPress={() => {
              // TODO: open modal / picker to change vehicle type
              // for now just toggle example values
              setVehicleType((prev) =>
                prev === 'Car' ? 'Van' : prev === 'Van' ? 'Bike' : 'Car',
              );
            }}
          >
            <Text
              style={[
                styles.dropdownText,
                !vehicleType && { color: '#C4C4C4' },
              ]}
            >
              {vehicleType || 'Vehicle Type'}
            </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={22}
              color="#A0A0A0"
            />
          </Pressable>

          {/* VEHICLE IMAGES UPLOAD AREA */}
          <Text style={styles.fieldTitle}>Vehicle Images</Text>
          <Pressable style={styles.uploadBox} onPress={handleUploadImages}>
            {/* This is just UI – add real upload later */}
            <View style={styles.uploadIconCircle}>
              <MaterialCommunityIcons
                name="plus"
                size={20}
                color="#35A7D6"
              />
            </View>
            <Text style={styles.uploadMainText}>
              Click to upload
              <Text style={styles.uploadMainTextLink}> or drag and drop</Text>
            </Text>
            <Text style={styles.uploadSubText}>
              SVG, PNG, JPG (max 800x400px)
            </Text>
          </Pressable>

          {/* DESCRIPTION */}
          <Text style={styles.fieldTitle}>Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="e.g well maintained car with excellent mileage ...."
            placeholderTextColor="#C4C4C4"
            multiline
            numberOfLines={4}
          />

          {/* DRIVER OPTION */}
          <Text style={styles.fieldTitle}>Driver Option</Text>
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

          {/* LOCATION */}
          <Text style={styles.fieldTitle}>Location</Text>
          <View style={styles.iconInputWrapper}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={20}
                color="#35A7D6"
              />
            </View>
            <TextInput
              style={styles.iconInput}
              placeholder="e.g Pettah Colombo"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          {/* CONTACT NUMBER */}
          <Text style={styles.fieldTitle}>Contact Number</Text>
          <View style={styles.iconInputWrapper}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="phone-outline"
                size={20}
                color="#35A7D6"
              />
            </View>
            <TextInput
              style={styles.iconInput}
              placeholder="(+94) 77 123 1237"
              keyboardType="phone-pad"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          {/* SUBMIT BUTTON */}
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Post Vehicle</Text>
          </Pressable>
        </ScrollView>

        {/* FOOTER NAV BAR */}
        <FooterNav />
      </View>
    </SafeAreaView>
  );
};

export default AddVehicleScreen;

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
  headerBlock: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 12,
    color: '#E53935',
  },
  fieldTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 6,
    marginBottom: 6,
    color: '#000',
  },
  dropdown: {
    marginHorizontal: 16,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  dropdownText: {
    fontSize: 13,
    color: '#555',
  },
  uploadBox: {
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 18,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#90CAF9',
    backgroundColor: '#E6F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  uploadIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#35A7D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  uploadMainText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
  uploadMainTextLink: {
    color: PRIMARY_BLUE,
    fontWeight: '600',
  },
  uploadSubText: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  textArea: {
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    minHeight: 90,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
  },
  driverRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  driverOption: {
    flex: 1,
    borderRadius: 18,
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
  iconInputWrapper: {
    marginHorizontal: 16,
    marginBottom: 10,
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
  iconBox: {
    width: 44,
    height: 44,
    borderRightWidth: 1,
    borderRightColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 13,
  },
  submitButton: {
    marginHorizontal: 10,
    marginVertical: 18,
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
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
