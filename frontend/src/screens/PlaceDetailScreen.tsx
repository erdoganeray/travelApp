import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type RootStackParamList = {
  PlaceDetail: { placeId: string };
};

type PlaceDetailScreenRouteProp = RouteProp<RootStackParamList, 'PlaceDetail'>;

interface Props {
  route: PlaceDetailScreenRouteProp;
}

type IconName = keyof typeof Ionicons.glyphMap;

interface Feature {
  icon: IconName;
  label: string;
}

const PlaceDetailScreen: React.FC<Props> = ({ route }) => {
  const { placeId } = route.params;

  // Mock data - will be replaced with API call
  const placeData = {
    id: placeId,
    name: 'Blue Mosque',
    description:
      'The Sultan Ahmed Mosque, also known as the Blue Mosque, is a historic mosque in Istanbul.',
    image: 'https://example.com/bluemosque.jpg',
    type: 'Historical',
    rating: 4.8,
    reviews: 1250,
    openingHours: '09:00 - 17:00',
    address: 'Sultan Ahmet, Atmeydanı Cd. No:7, 34122 Fatih/İstanbul, Turkey',
    features: [
      { icon: 'camera-outline' as IconName, label: 'Photography Allowed' },
      { icon: 'walk-outline' as IconName, label: 'Guided Tours' },
      { icon: 'cash-outline' as IconName, label: 'Entry Fee' },
      { icon: 'time-outline' as IconName, label: 'Duration: 1-2 hours' },
    ] as Feature[],
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: placeData.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{placeData.name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color={COLORS.warning} />
          <Text style={styles.rating}>{placeData.rating}</Text>
          <Text style={styles.reviews}>({placeData.reviews} reviews)</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={24} color={COLORS.primary} />
            <Text style={styles.infoText}>{placeData.openingHours}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={24} color={COLORS.primary} />
            <Text style={styles.infoText}>{placeData.address}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{placeData.description}</Text>

        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featuresContainer}>
          {placeData.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Ionicons name={feature.icon} size={24} color={COLORS.primary} />
              <Text style={styles.featureText}>{feature.label}</Text>
            </View>
          ))}
        </View>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  rating: {
    ...FONTS.h3,
    color: COLORS.text,
    marginLeft: SIZES.base,
    marginRight: SIZES.base / 2,
  },
  reviews: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  infoContainer: {
    marginBottom: SIZES.padding,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  infoText: {
    ...FONTS.body2,
    color: COLORS.text,
    marginLeft: SIZES.padding,
    flex: 1,
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
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SIZES.base,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: SIZES.base,
    marginBottom: SIZES.padding,
  },
  featureText: {
    ...FONTS.body3,
    color: COLORS.text,
    marginLeft: SIZES.base,
  },
});

export default PlaceDetailScreen; 