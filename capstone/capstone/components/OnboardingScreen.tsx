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
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Mediterranean Bistro</Text>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <Text style={styles.welcomeTitle}>Welcome to Little Lemon!</Text>
          <Text style={styles.description}>
            Discover authentic Mediterranean flavors crafted with love and tradition. 
            Please enter your details to get started.
          </Text>
          
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#EDEFEE',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  content: {
    paddingVertical: 20,
  },
  formSection: {
    marginTop: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EDEFEE',
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
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F4CE14',
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  features: {
    alignItems: 'center',
  },
  feature: {
    alignItems: 'center',
    marginBottom: 32,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  featureText: {
    fontSize: 18,
    color: '#EDEFEE',
    fontWeight: '600',
    textAlign: 'center',
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