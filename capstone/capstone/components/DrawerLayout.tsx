import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import OrderHistoryScreen from '../components/OrderHistoryScreen';
import MyProfileScreen from '../components/MyProfileScreen';
import EditProfileScreen from '../components/EditProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

interface DrawerLayoutProps {
  onResetOnboarding: () => Promise<void>;
}

export default function DrawerLayout({ onResetOnboarding }: DrawerLayoutProps) {
  // Create wrapper components to pass the resetOnboarding function
  const HomeScreenWrapper = () => <HomeScreen onResetOnboarding={onResetOnboarding} />;
  const MyProfileScreenWrapper = () => <MyProfileScreen onResetOnboarding={onResetOnboarding} />;
  const EditProfileScreenWrapper = ({ navigation }: any) => (
    <EditProfileScreen 
      onBack={() => navigation.goBack()}
      onProfileUpdated={() => {
        // Optionally refresh profile data or show success message
      }}
    />
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#495E57',
        },
        headerTintColor: '#F4CE14',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          width: 280,
        },
        drawerActiveTintColor: '#495E57',
        drawerInactiveTintColor: '#666666',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreenWrapper}
        options={({ navigation }) => ({
          title: 'Little Lemon',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ 
                marginRight: 15,
                padding: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('MyProfile')}
              activeOpacity={0.7}
            >
              <Ionicons name="person-circle-outline" size={28} color="#F4CE14" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen 
        name="OrderHistory" 
        component={OrderHistoryScreen}
        options={({ navigation }) => ({
          title: 'Order History',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ 
                marginLeft: 15,
                padding: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#F4CE14" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen 
        name="MyProfile" 
        component={MyProfileScreenWrapper}
        options={({ navigation }) => ({
          title: 'My Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ 
                marginLeft: 15,
                padding: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#F4CE14" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen 
        name="EditProfile" 
        component={EditProfileScreenWrapper}
        options={({ navigation }) => ({
          title: 'Edit Profile',
          drawerItemStyle: { display: 'none' }, // Hide from drawer menu
          headerLeft: () => (
            <TouchableOpacity
              style={{ 
                marginLeft: 15,
                padding: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Ionicons name="arrow-back" size={24} color="#F4CE14" />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
