import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

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
  CityDetail: { cityId: string };
  PlaceDetail: { placeId: string };
  EventDetail: { eventId: string };
};

type TabParamList = {
  HomeTab: undefined;
  TravelPlans: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: Platform.select({
          web: { height: 60 },
          default: undefined
        })
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitle: 'Travel App',
        }}
      />
      <Stack.Screen name="CityDetail" component={CityDetailScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? route?.name} - Travel App`,
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'TravelPlans') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: Platform.select({
            web: { paddingBottom: 10, height: 60 },
            default: undefined
          })
        })}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack}
          options={{ 
            headerShown: false,
            title: 'Home'
          }} 
        />
        <Tab.Screen 
          name="TravelPlans" 
          component={TravelPlanScreen}
          options={{ title: 'Travel Plans' }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 