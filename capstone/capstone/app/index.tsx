import React from 'react';
import { useOnboarding } from '../hooks/useOnboarding';
import OnboardingScreen from '../components/OnboardingScreen';
import HomeScreen from '../components/HomeScreen';
import LoadingScreen from '../components/LoadingScreen';

export default function Index() {
  const { isLoading, isOnboardingCompleted, completeOnboarding } = useOnboarding();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isOnboardingCompleted) {
    return <OnboardingScreen onComplete={completeOnboarding} />;
  }

  return <HomeScreen />;
}
