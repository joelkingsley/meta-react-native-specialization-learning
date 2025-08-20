import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function OrderHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Order History</Text>
        <Text style={styles.description}>
          Your past orders will appear here once you start ordering from Little Lemon.
        </Text>
        
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            📋 No orders yet
          </Text>
          <Text style={styles.placeholderSubtext}>
            Start exploring our menu to place your first order!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#495E57',
    lineHeight: 24,
    marginBottom: 40,
    opacity: 0.8,
  },
  placeholder: {
    backgroundColor: 'rgba(73, 94, 87, 0.1)',
    padding: 40,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(73, 94, 87, 0.2)',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 20,
    color: '#495E57',
    fontWeight: '600',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#495E57',
    opacity: 0.6,
    textAlign: 'center',
  },
});
