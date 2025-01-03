import React from 'react';
import { View, ScrollView, StyleSheet, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CardSection from '../components/CardSection';
import Layout from '../components/Layout';
import { COLORS, SIZES } from '../constants/theme';

type RootStackParamList = {
  CityDetail: { cityId: string };
  PlaceDetail: { placeId: string };
  EventDetail: { eventId: string };
  Home: undefined;
  TravelPlans: undefined;
  Profile: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // Mock data for cities
  const cities = [
    {
      id: '1',
      title: 'Istanbul',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: '2',
      title: 'Ankara',
      image: 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '3',
      title: 'Izmir',
      image: 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '4',
      title: 'Antalya',
      image: 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  // Mock data for places
  const places = [
    {
      id: '1',
      title: 'Blue Mosque',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '2',
      title: 'Hagia Sophia',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: '3',
      title: 'Topkapi Palace',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: '4',
      title: 'Grand Bazaar',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
  ];

  // Mock data for events
  const events = [
    {
      id: '1',
      title: 'Istanbul Jazz Festival',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: '2',
      title: 'Turkish Food Festival',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: '3',
      title: 'Art Exhibition',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: '4',
      title: 'Cultural Festival',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
  ];

  const handleCityPress = (cityId: string) => {
    navigation.navigate('CityDetail', { cityId });
  };

  const handlePlacePress = (placeId: string) => {
    navigation.navigate('PlaceDetail', { placeId });
  };

  const handleEventPress = (eventId: string) => {
    navigation.navigate('EventDetail', { eventId });
  };

  return (
    <Layout>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.content}>
          <CardSection
            title="Popular Cities"
            data={cities}
            onPress={handleCityPress}
          />
          <CardSection
            title="Featured Places"
            data={places}
            onPress={handlePlacePress}
          />
          <CardSection
            title="Upcoming Events"
            data={events}
            onPress={handleEventPress}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  content: {
    flex: 1,
    maxWidth: Platform.OS === 'web' 
      ? 1200
      : Dimensions.get('window').width,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: Platform.OS === 'web' ? 40 : 0,
  },
});

export default HomeScreen;