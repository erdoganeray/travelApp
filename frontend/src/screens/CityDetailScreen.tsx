import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type RootStackParamList = {
  CityDetail: { cityId: string };
};

type CityDetailScreenRouteProp = RouteProp<RootStackParamList, 'CityDetail'>;

interface Props {
  route: CityDetailScreenRouteProp;
}

const CityDetailScreen: React.FC<Props> = ({ route }) => {
  const { cityId } = route.params;

  // Mock data - will be replaced with API call
  const cityData = {
    id: cityId,
    name: 'Istanbul',
    description: 'A city where East meets West, rich in history and culture.',
    image: 'https://example.com/istanbul.jpg',
    population: '15.46 million',
    country: 'Turkey',
    topPlaces: [
      { id: '1', name: 'Blue Mosque', type: 'Historical' },
      { id: '2', name: 'Hagia Sophia', type: 'Historical' },
      { id: '3', name: 'Grand Bazaar', type: 'Shopping' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: cityData.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{cityData.name}</Text>
        <Text style={styles.country}>{cityData.country}</Text>
        <Text style={styles.population}>Population: {cityData.population}</Text>
        
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{cityData.description}</Text>

        <Text style={styles.sectionTitle}>Top Places</Text>
        {cityData.topPlaces.map((place) => (
          <View key={place.id} style={styles.placeItem}>
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeType}>{place.type}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: SIZES.padding,
  },
  name: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  country: {
    ...FONTS.body2,
    color: COLORS.textLight,
    marginBottom: SIZES.base,
  },
  population: {
    ...FONTS.body2,
    color: COLORS.textLight,
    marginBottom: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.text,
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  description: {
    ...FONTS.body2,
    color: COLORS.text,
    lineHeight: 24,
  },
  placeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  placeName: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  placeType: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
});

export default CityDetailScreen; 