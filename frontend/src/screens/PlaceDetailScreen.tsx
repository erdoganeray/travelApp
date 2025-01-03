import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type RootStackParamList = {
  PlaceDetail: { placeId: string };
};

type PlaceDetailScreenRouteProp = RouteProp<RootStackParamList, 'PlaceDetail'>;

interface Props {
  route: PlaceDetailScreenRouteProp;
}

const PlaceDetailScreen: React.FC<Props> = ({ route }) => {
  const { placeId } = route.params;
  const navigation = useNavigation();

  // Mock data - will be replaced with API call
  const placeData = {
    id: placeId,
    name: 'Blue Mosque',
    type: 'Historical',
    rating: 4.8,
    reviews: 1250,
    openingHours: '09:00 - 17:00',
    address: 'Sultan Ahmet, Atmeydanı Cd. No:7, 34122 Fatih/Istanbul, Turkey',
    description: 'The Sultan Ahmed Mosque, also known as the Blue Mosque, is a historic mosque in Istanbul.',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: [
      { icon: 'camera', label: 'Photography Allowed' },
      { icon: 'cash', label: 'Entry Fee' },
      { icon: 'people', label: 'Guided Tours' },
      { icon: 'time', label: 'Duration: 1-2 hours' },
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
            source={{ uri: placeData.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay} />
          <View style={styles.headerContent}>
            <Text style={styles.name}>{placeData.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.rating}>{placeData.rating}</Text>
              <Text style={styles.reviews}>({placeData.reviews} reviews)</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Ionicons name="time" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>{placeData.openingHours}</Text>
            </View>
            <View style={[styles.infoItem, styles.infoItemMargin]}>
              <Ionicons name="location" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>{placeData.address}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{placeData.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featuresGrid}>
              {placeData.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name={feature.icon as any} size={24} color={COLORS.primary} />
                  <Text style={styles.featureText}>{feature.label}</Text>
                </View>
              ))}
            </View>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.h3,
    color: COLORS.white,
    marginLeft: SIZES.base,
  },
  reviews: {
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: SIZES.base,
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
  infoItemMargin: {
    marginTop: SIZES.padding,
  },
  infoText: {
    ...FONTS.body2,
    marginLeft: SIZES.base,
    color: COLORS.text,
    flex: 1,
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
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SIZES.base,
  },
  featureItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.base,
    marginBottom: SIZES.padding,
  },
  featureText: {
    ...FONTS.body2,
    color: COLORS.text,
    marginLeft: SIZES.base,
    flex: 1,
  },
});

export default PlaceDetailScreen;