import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useOnboarding } from '../hooks/useOnboarding';

export default function HomeScreen() {
  const { resetOnboarding } = useOnboarding();

  const handleResetOnboarding = () => {
    Alert.alert(
      'Reset Onboarding',
      'This will show the onboarding screen again on next app launch. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await resetOnboarding();
            Alert.alert('Success', 'Onboarding has been reset. Restart the app to see the onboarding screen.');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Chicago</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeContent}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeTitle}>Welcome Back!</Text>
              <Text style={styles.welcomeDescription}>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </Text>
            </View>
            <View style={styles.welcomeImageContainer}>
              <Image
                source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true' }}
                style={styles.welcomeImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Browse Menu</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
              My Profile
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
              Order History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Featured Items Placeholder */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Today's Specials</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              🍽️ Featured menu items will appear here
            </Text>
          </View>
        </View>

        {/* Developer Options */}
        <View style={styles.developerSection}>
          <Text style={styles.sectionTitle}>Developer Options</Text>
          <TouchableOpacity 
            style={[styles.actionButton, styles.developerButton]}
            onPress={handleResetOnboarding}
          >
            <Text style={[styles.actionButtonText, styles.developerButtonText]}>
              Reset Onboarding
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#EDEFEE',
    fontStyle: 'italic',
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  welcomeImageContainer: {
    width: 120,
    height: 120,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 12,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#EDEFEE',
    lineHeight: 24,
  },
  actionsSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#F4CE14',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#F4CE14',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495E57',
  },
  secondaryButtonText: {
    color: '#F4CE14',
  },
  featuredSection: {
    marginBottom: 40,
  },
  placeholder: {
    backgroundColor: 'rgba(244, 206, 20, 0.1)',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(244, 206, 20, 0.3)',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center',
    opacity: 0.7,
  },
  developerSection: {
    marginBottom: 40,
  },
  developerButton: {
    backgroundColor: '#ff6b6b',
    borderColor: '#ff6b6b',
  },
  developerButtonText: {
    color: '#fff',
  },
});