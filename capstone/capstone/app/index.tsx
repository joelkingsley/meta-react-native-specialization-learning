import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { useOnboarding } from '../hooks/useOnboarding';
import OnboardingScreen from '../components/OnboardingScreen';
import HomeScreen from '../components/HomeScreen';
import LoadingScreen from '../components/LoadingScreen';

export default function Index() {
  const { isLoading, isOnboardingCompleted, completeOnboarding } = useOnboarding();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoading) {
      navigation.setOptions({
        title: isOnboardingCompleted ? 'Home' : 'Onboarding'
      });
    }
  }, [isLoading, isOnboardingCompleted, navigation]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isOnboardingCompleted) {
    return <OnboardingScreen onComplete={completeOnboarding} />;
  }

  return <HomeScreen />;
}
