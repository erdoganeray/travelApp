import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import TravelPlanScreen from '../screens/TravelPlanScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CityDetailScreen from '../screens/CityDetailScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

// Types
type RootStackParamList = {
  Home: undefined;
  TravelPlans: undefined;
  Profile: undefined;
  CityDetail: { cityId: string };
  PlaceDetail: { placeId: string };
  EventDetail: { eventId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? route?.name} - Travel App`,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
        />
        <Stack.Screen 
          name="TravelPlans" 
          component={TravelPlanScreen}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
        />
        <Stack.Screen name="CityDetail" component={CityDetailScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;