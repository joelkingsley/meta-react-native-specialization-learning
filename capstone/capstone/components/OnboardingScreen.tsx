import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
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
            From fresh ingredients to time-honored recipes, we bring you the best 
            of Mediterranean cuisine.
          </Text>
          
          <View style={styles.features}>
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🍽️</Text>
              <Text style={styles.featureText}>Fresh Daily Menu</Text>
            </View>
            
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>🌿</Text>
              <Text style={styles.featureText}>Organic Ingredients</Text>
            </View>
            
            <View style={styles.feature}>
              <Text style={styles.featureIcon}>👨‍🍳</Text>
              <Text style={styles.featureText}>Expert Chefs</Text>
            </View>
          </View>
        </View>

        {/* Action Section */}
        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={onComplete}
            activeOpacity={0.8}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
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
    marginBottom: 48,
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
  footerText: {
    fontSize: 14,
    color: '#EDEFEE',
    textAlign: 'center',
    opacity: 0.8,
  },
});