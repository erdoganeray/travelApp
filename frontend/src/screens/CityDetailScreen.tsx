import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';
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
  const navigation = useNavigation();

  // Mock data - will be replaced with API call
  const cityData = {
    id: cityId,
    name: cityId === '1' ? 'Istanbul' : 
          cityId === '2' ? 'Ankara' : 
          cityId === '3' ? 'Izmir' : 
          cityId === '4' ? 'Antalya' : 'Unknown City',
    description: cityId === '1' ? 'A city where East meets West, rich in history and culture.' :
                 cityId === '2' ? 'The capital city of Turkey, known for its modern architecture and government institutions.' :
                 cityId === '3' ? 'A beautiful coastal city known for its seafront promenade and ancient ruins.' :
                 cityId === '4' ? 'A resort city with beautiful beaches and rich history along the Turkish Riviera.' :
                 'City description not available.',
    image: cityId === '1' ? 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' :
           cityId === '2' ? 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' :
           cityId === '3' ? 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' :
           cityId === '4' ? 'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' :
           'https://via.placeholder.com/1170x780',
    population: cityId === '1' ? '15.46 million' :
                cityId === '2' ? '5.66 million' :
                cityId === '3' ? '4.37 million' :
                cityId === '4' ? '2.54 million' :
                'Population data not available',
    country: 'Turkey',
    topPlaces: cityId === '1' ? [
      { id: '1', name: 'Blue Mosque', type: 'Historical' },
      { id: '2', name: 'Hagia Sophia', type: 'Historical' },
      { id: '3', name: 'Grand Bazaar', type: 'Shopping' },
    ] : cityId === '2' ? [
      { id: '4', name: 'Anıtkabir', type: 'Historical' },
      { id: '5', name: 'Kocatepe Mosque', type: 'Historical' },
      { id: '6', name: 'Ankara Castle', type: 'Historical' },
    ] : cityId === '3' ? [
      { id: '7', name: 'Kemeraltı', type: 'Shopping' },
      { id: '8', name: 'Clock Tower', type: 'Historical' },
      { id: '9', name: 'Kordon', type: 'Entertainment' },
    ] : cityId === '4' ? [
      { id: '10', name: 'Kaleiçi', type: 'Historical' },
      { id: '11', name: 'Düden Waterfalls', type: 'Nature' },
      { id: '12', name: 'Antalya Museum', type: 'Museum' },
    ] : [],
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <Image
            source={{ uri: cityData.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay} />
          <View style={styles.headerContent}>
            <Text style={styles.name}>{cityData.name}</Text>
            <Text style={styles.country}>{cityData.country}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Ionicons name="people" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>Population: {cityData.population}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{cityData.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Places</Text>
            {cityData.topPlaces.map((place) => (
              <View key={place.id} style={styles.placeItem}>
                <View style={styles.placeInfo}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <Text style={styles.placeType}>{place.type}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={COLORS.primary} />
              </View>
            ))}
          </View>
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
  header: {
    position: 'relative',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: SIZES.padding,
    left: SIZES.padding,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: SIZES.base,
    borderRadius: SIZES.radius,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerContent: {
    position: 'absolute',
    bottom: SIZES.padding * 2,
    left: SIZES.padding,
    right: SIZES.padding,
  },
  name: {
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: SIZES.padding,
    fontSize: 32,
  },
  country: {
    ...FONTS.h3,
    color: COLORS.white,
    fontSize: 18,
    opacity: 0.9,
  },
  content: {
    padding: SIZES.padding,
  },
  infoSection: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: SIZES.base,
    color: COLORS.text,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h2,
    marginBottom: SIZES.padding,
    color: COLORS.text,
  },
  description: {
    ...FONTS.body2,
    color: COLORS.text,
    lineHeight: 24,
  },
  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  placeInfo: {
    flex: 1,
    marginRight: SIZES.padding,
  },
  placeName: {
    ...FONTS.h3,
    color: COLORS.text,
    marginBottom: SIZES.padding,
    fontSize: 16,
  },
  placeType: {
    ...FONTS.body3,
    color: COLORS.text,
    opacity: 0.7,
  },
});

export default CityDetailScreen;