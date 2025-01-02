import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type RootStackParamList = {
  EventDetail: { eventId: string };
};

type EventDetailScreenRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;

interface Props {
  route: EventDetailScreenRouteProp;
}

type IconName = keyof typeof Ionicons.glyphMap;

interface Feature {
  icon: IconName;
  label: string;
}

const EventDetailScreen: React.FC<Props> = ({ route }) => {
  const { eventId } = route.params;

  // Mock data - will be replaced with API call
  const eventData = {
    id: eventId,
    name: 'Summer Music Festival',
    description:
      'Join us for the biggest music festival of the summer featuring top artists from around the world.',
    image: 'https://example.com/festival.jpg',
    date: '2024-07-15',
    time: '16:00 - 23:00',
    venue: 'Istanbul Arena',
    address: 'Harbiye, Cumhuriyet Cd., 34367 Şişli/İstanbul, Turkey',
    price: '₺500',
    category: 'Music',
    organizer: 'Istanbul Events',
    features: [
      { icon: 'musical-notes-outline' as IconName, label: 'Live Music' },
      { icon: 'fast-food-outline' as IconName, label: 'Food & Drinks' },
      { icon: 'people-outline' as IconName, label: 'Age 18+' },
      { icon: 'card-outline' as IconName, label: 'Tickets Required' },
    ] as Feature[],
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: eventData.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.category}>{eventData.category}</Text>
        <Text style={styles.name}>{eventData.name}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={24} color={COLORS.primary} />
            <Text style={styles.infoText}>{eventData.date}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={24} color={COLORS.primary} />
            <Text style={styles.infoText}>{eventData.time}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={24} color={COLORS.primary} />
            <View style={styles.locationContainer}>
              <Text style={styles.venueName}>{eventData.venue}</Text>
              <Text style={styles.address}>{eventData.address}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About Event</Text>
        <Text style={styles.description}>{eventData.description}</Text>

        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featuresContainer}>
          {eventData.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Ionicons name={feature.icon} size={24} color={COLORS.primary} />
              <Text style={styles.featureText}>{feature.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.organizerContainer}>
          <Text style={styles.organizerLabel}>Organized by</Text>
          <Text style={styles.organizerName}>{eventData.organizer}</Text>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Tickets - {eventData.price}</Text>
        </TouchableOpacity>
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
  category: {
    ...FONTS.body3,
    color: COLORS.primary,
    marginBottom: SIZES.base,
  },
  name: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: SIZES.padding,
  },
  infoContainer: {
    marginBottom: SIZES.padding,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SIZES.padding,
  },
  infoText: {
    ...FONTS.body2,
    color: COLORS.text,
    marginLeft: SIZES.padding,
  },
  locationContainer: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  venueName: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  address: {
    ...FONTS.body3,
    color: COLORS.textLight,
    marginTop: SIZES.base / 2,
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
  organizerContainer: {
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding,
  },
  organizerLabel: {
    ...FONTS.body3,
    color: COLORS.textLight,
    marginBottom: SIZES.base / 2,
  },
  organizerName: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  buyButtonText: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});

export default EventDetailScreen; 