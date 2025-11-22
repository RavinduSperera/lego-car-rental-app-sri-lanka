# LEGO Vehicle Rental App 🚗🇱🇰  
A clean, minimal, and fully implemented Expo React Native mobile application for browsing, searching, and renting vehicles across Sri Lanka.

This project contains:
- Complete UI implementation with Expo + React Native
- Onboarding flow
- Home page with horizontal sliders
- Search filter page
- Add-vehicle page (owners can post vehicles)
- Vehicle details + owner contact details
- Reusable components (FooterNav, Cards, etc.)

---

## 📌 1. Student Information
**Name:** *Perera*     
**Submission Type:** UI/UX + Mobile App Implementation  

---

## 📌 2. Design File (Figma / AI Studio)
🔗 **Design Prototype:**  
'https://www.figma.com/proto/20Wqrxku4I5xFR88EcfJU8/Car-Rental-App?node-id=16-6&t=FiklVwBsZEsqXyy6-1'

This includes:
- All onboarding screens  
- Home + Search UI  
- Vehicle details  
- Contact details  
- Add-vehicle form  

---

Clone the repo:

```bash
git clone <your-repo-link>
cd <project-folder>
```

---

## 🚀Getting Started

1. This is an Expo project created using:
```bash
npx create-expo-app
```

2. Install dependencies
```bash
npm install
```

3. Start the project
```bash
npx expo start
```

Choose to open:
Expo Go
Android Emulator
iOS Simulator

---

## 📦 Dependencies Used (with installation commands)
✅ Safe Area Context
(Required to replace deprecated SafeAreaView)
```bash
npx expo install react-native-safe-area-context
```

✅ Vector Icons (Ionicons + MaterialCommunityIcons)
Used for bottom nav bar, buttons, cards, etc.
```bash
npx expo install @expo/vector-icons react-native-vector-icons
```

✅ Google Fonts – Poppins
Used throughout the UI as the main typeface.
```bash
npx expo install expo-font
npm install @expo-google-fonts/poppins
```

## 🧱 Main Features

✔ Splash screen
Minimal logo-based intro with timed navigation.

✔ Onboarding screens (2 pages)
Clean design with illustrations + navigation.

✔ Login & Registration
Map banner
Styled forms
Input validation structure

✔ Home Page
Sri Lanka welcome banner
Horizontal image sliders
Auto-slide “Try More Options” banners
Footer navigation bar

✔ Search Page
Search input
Vehicle type selector
Driver toggle
Static calendar layout
Map location picker
Search button

✔ Add-Vehicle Page
Owners can post vehicles:
Dropdown vehicle type
Image upload placeholder
Description
Driver option
Location + Contact
Submit button

✔ Vehicle Details Page
Image slider
Description section
Key features grid
Owner info
Map section
Contact button

✔ Contact Details Page
Owner portrait
Phone number
Call button
Pickup location
Important note

---

## 📁 Folder Structure
```bash
app/
 ├── screens/
 │    ├── _home.tsx
 │    ├── _search.tsx
 │    ├── _add.tsx
 │    ├── _vehicleDetails.tsx
 │    ├── _contactDetails.tsx
 │    ├── _onboarding.tsx
 │    ├── _onboarding2.tsx
 │    ├── _login.tsx
 │    ├── _register.tsx
 │    └── index.tsx        (Splash)
 │
 ├── components/
 │    └── FooterNav.tsx
 │
 ├── _layout.tsx          (SafeAreaProvider + Router)
 │
assets/
 ├── images/
 │    ├── logos/
 │    ├── cars/
 │    ├── maps/
 │    ├── users/
 │    └── onboarding/
 │
README.md
package.json
tsconfig.json
```

---

## 🎉 Conclusion

This project was built as part of a complete UI/UX + React Native mobile app assignment.
All screens were implemented cleanly using Expo, React Native, and a modern design strategy.
The final result is simple, minimal, and production-ready for future backend integration.
