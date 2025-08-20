import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HomeScreenProps {
  onResetOnboarding: () => Promise<void>;
}

export default function HomeScreen({ onResetOnboarding }: HomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('lunch');

  const categories = ['lunch', 'mains', 'desserts', 'a la carte'];
  
  const menuItems = [
    {
      id: '1',
      title: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives, our Chicago.',
      price: '$12.99',
      category: 'lunch',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/greekSalad.jpg?raw=true'
    },
    {
      id: '2',
      title: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic.',
      price: '$7.99',
      category: 'lunch',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true'
    },
    {
      id: '3',
      title: 'Grilled Fish',
      description: 'Fish marinated in fresh herbs and olive oil, served with seasonal vegetables.',
      price: '$18.99',
      category: 'mains',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/grilledFish.jpg?raw=true'
    },
    {
      id: '4',
      title: 'Pasta',
      description: 'Penne with fried aubergines, cherry tomatoes, tomato sauce, fresh chili.',
      price: '$15.99',
      category: 'mains',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/pasta.jpg?raw=true'
    },
    {
      id: '5',
      title: 'Lemon Dessert',
      description: 'Traditional homemade Italian Lemon Ricotta Cake.',
      price: '$8.99',
      category: 'desserts',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/lemonDessert.jpg?raw=true'
    },
    {
      id: '6',
      title: 'Focaccia',
      description: 'Baked with herbs and olive oil, served warm.',
      price: '$5.99',
      category: 'a la carte',
      image: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  const handleResetOnboarding = () => {
    Alert.alert(
      'Reset Onboarding',
      'This will clear your profile data and return to the onboarding screen. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {
              // Clear user profile data first
              await AsyncStorage.removeItem('@user_profile');
              // Reset onboarding status - this will automatically navigate back
              await onResetOnboarding();
              // Note: No need to show success alert as the screen will change
            } catch (error) {
              Alert.alert('Error', 'Failed to reset onboarding. Please try again.');
            }
          },
        },
      ]
    );
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
        </View>

        {/* Bottom Section - White Background */}
        <View style={styles.bottomSection}>
          {/* Order for Delivery Section */}
          <View style={styles.orderSection}>
            <Text style={styles.sectionTitle}>Order for Delivery</Text>
            
            {/* Horizontal Category Filter */}
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.categoryScrollView}
              contentContainerStyle={styles.categoryContainer}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.selectedCategoryButton
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text style={[
                    styles.categoryButtonText,
                    selectedCategory === category && styles.selectedCategoryButtonText
                  ]}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Vertical Menu Items List */}
            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={styles.menuItem}>
                  <View style={styles.menuItemContent}>
                    <View style={styles.menuItemText}>
                      <Text style={styles.menuItemTitle}>{item.title}</Text>
                      <Text style={styles.menuItemDescription}>{item.description}</Text>
                      <Text style={styles.menuItemPrice}>{item.price}</Text>
                    </View>
                    <Image source={{ uri: item.image }} style={styles.menuItemImage} />
                  </View>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.menuItemSeparator} />}
            />
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
  orderSection: {
    marginBottom: 40,
  },
  categoryScrollView: {
    marginBottom: 20,
  },
  categoryContainer: {
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  selectedCategoryButton: {
    backgroundColor: '#495E57',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495E57',
  },
  selectedCategoryButtonText: {
    color: '#FFFFFF',
  },
  menuItem: {
    paddingVertical: 16,
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    flex: 1,
    paddingRight: 16,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 8,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#495E57',
    lineHeight: 20,
    marginBottom: 8,
    opacity: 0.8,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495E57',
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  menuItemSeparator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
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
  actionsSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495E57',
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
    backgroundColor: 'rgba(73, 94, 87, 0.1)',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(73, 94, 87, 0.3)',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 16,
    color: '#495E57',
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