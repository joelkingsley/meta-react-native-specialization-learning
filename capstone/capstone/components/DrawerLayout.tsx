import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import OrderHistoryScreen from '../components/OrderHistoryScreen';
import MyProfileScreen from '../components/MyProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
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
        component={HomeScreen}
        options={{
          title: 'Little Lemon',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="OrderHistory" 
        component={OrderHistoryScreen}
        options={{
          title: 'Order History',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="MyProfile" 
        component={MyProfileScreen}
        options={{
          title: 'My Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
