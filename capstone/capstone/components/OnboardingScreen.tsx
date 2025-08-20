import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const isFormValid = firstName.trim() && lastName.trim() && email.trim() && phoneNumber.trim();

  const handleNext = async () => {
    if (!isFormValid) {
      Alert.alert('Missing Information', 'Please fill in all fields to continue.');
      return;
    }

    // Save user data to AsyncStorage
    try {
      const userData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
      };
      
      await AsyncStorage.setItem('@user_profile', JSON.stringify(userData));
      onComplete();
    } catch (error) {
      Alert.alert('Error', 'Failed to save your information. Please try again.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView style={styles.scrollView}>
        {/* Top Section - Dark Background */}
        <View style={styles.topSection}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.subtitle}>Chicago</Text>
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <View style={styles.welcomeContent}>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeTitle}>Welcome to Little Lemon!</Text>
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
        </View>

        {/* Bottom Section - White Background */}
        <View style={styles.bottomSection}>
          {/* Personal Details Form */}
          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Personal Details</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>First Name *</Text>
              <TextInput
                style={styles.textInput}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Enter your first name"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Last Name *</Text>
              <TextInput
                style={styles.textInput}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter your last name"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email *</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number *</Text>
              <TextInput
                style={styles.textInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        {/* Action Section */}
        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={[styles.getStartedButton, !isFormValid && styles.disabledButton]}
            onPress={handleNext}
            activeOpacity={0.8}
            disabled={!isFormValid}
          >
            <Text style={[styles.getStartedText, !isFormValid && styles.disabledButtonText]}>
              Next
            </Text>
          </TouchableOpacity>
          
          <Text style={styles.footerText}>
            Ready to explore delicious Mediterranean cuisine?
          </Text>
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
  scrollView: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#495E57',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'flex-start',
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
  formSection: {
    marginBottom: 40,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495E57',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#495E57',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  actionSection: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 60,
  },
  getStartedButton: {
    backgroundColor: '#F4CE14',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 16,
    marginBottom: 24,
    width: width - 64,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#495E57',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0',
    opacity: 0.6,
  },
  disabledButtonText: {
    color: '#666666',
  },
  footerText: {
    fontSize: 14,
    color: '#EDEFEE',
    textAlign: 'center',
    opacity: 0.8,
  },
});