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
    name: 'Istanbul',
    description: 'A city where East meets West, rich in history and culture.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    population: '15.46 million',
    country: 'Turkey',
    topPlaces: [
      { id: '1', name: 'Blue Mosque', type: 'Historical' },
      { id: '2', name: 'Hagia Sophia', type: 'Historical' },
      { id: '3', name: 'Grand Bazaar', type: 'Shopping' },
    ],
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
    bottom: SIZES.padding,
    left: SIZES.padding,
    right: SIZES.padding,
  },
  name: {
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: SIZES.base,
  },
  country: {
    ...FONTS.h3,
    color: COLORS.white,
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
    ...FONTS.body2,
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
  },
  placeName: {
    ...FONTS.h3,
    color: COLORS.text,
    marginBottom: SIZES.base / 2,
  },
  placeType: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
});

export default CityDetailScreen;