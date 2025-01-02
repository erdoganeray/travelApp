import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CardSection from '../components/CardSection';
import { COLORS } from '../constants/theme';

type RootStackParamList = {
  CityDetail: { cityId: string };
  PlaceDetail: { placeId: string };
  EventDetail: { eventId: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleCityPress = (cityId: string) => {
    navigation.navigate('CityDetail', { cityId });
  };

  const handlePlacePress = (placeId: string) => {
    navigation.navigate('PlaceDetail', { placeId });
  };

  const handleEventPress = (eventId: string) => {
    navigation.navigate('EventDetail', { eventId });
  };

  // Mock data - will be replaced with API calls
  const cities = [
    { id: '1', title: 'Istanbul', image: 'https://example.com/istanbul.jpg' },
    { id: '2', title: 'Ankara', image: 'https://example.com/ankara.jpg' },
  ];

  const places = [
    { id: '1', title: 'Blue Mosque', image: 'https://example.com/bluemosque.jpg' },
    { id: '2', title: 'Hagia Sophia', image: 'https://example.com/hagiasophia.jpg' },
  ];

  const events = [
    { id: '1', title: 'Summer Festival', image: 'https://example.com/festival.jpg' },
    { id: '2', title: 'Art Exhibition', image: 'https://example.com/exhibition.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      <CardSection
        title="Popular Cities"
        data={cities}
        onCardPress={handleCityPress}
      />
      <CardSection
        title="Popular Places"
        data={places}
        onCardPress={handlePlacePress}
      />
      <CardSection
        title="Upcoming Events"
        data={events}
        onCardPress={handleEventPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default HomeScreen; 