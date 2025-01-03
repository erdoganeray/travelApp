import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type RootStackParamList = {
  EventDetail: { eventId: string };
  Home: undefined;
};

type EventDetailScreenRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;
type EventDetailScreenNavigationProp = NavigationProp<RootStackParamList>;

interface Props {
  route: EventDetailScreenRouteProp;
}

const EventDetailScreen: React.FC<Props> = ({ route }) => {
  const { eventId } = route.params;
  const navigation = useNavigation<EventDetailScreenNavigationProp>();

  // Mock data - will be replaced with API call
  const eventData = {
    id: eventId,
    name: 'Summer Music Festival',
    type: 'Music Festival',
    date: '2024-07-15',
    time: '16:00 - 23:00',
    location: 'Istanbul Arena',
    address: 'Istanbul Arena, Cd. 34367 Şişli/Istanbul, Turkey',
    description: 'Join us for the biggest music festival of the summer featuring top artists from around the world.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    price: '₺500',
    features: [
      { icon: 'musical-notes', label: 'Live Music' },
      { icon: 'people', label: 'Age 18+' },
      { icon: 'fast-food', label: 'Food & Drinks' },
      { icon: 'ticket', label: 'Tickets Required' },
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
            source={{ uri: eventData.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.headerOverlay} />
          <View style={styles.headerContent}>
            <Text style={styles.name}>{eventData.name}</Text>
            <View style={styles.dateContainer}>
              <Ionicons name="calendar" size={20} color={COLORS.white} />
              <Text style={styles.date}>{eventData.date}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Ionicons name="time" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>{eventData.time}</Text>
            </View>
            <View style={[styles.infoItem, styles.infoItemMargin]}>
              <Ionicons name="location" size={24} color={COLORS.primary} />
              <Text style={styles.infoText}>{eventData.address}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Event</Text>
            <Text style={styles.description}>{eventData.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featuresGrid}>
              {eventData.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name={feature.icon as any} size={24} color={COLORS.primary} />
                  <Text style={styles.featureText}>{feature.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Tickets - {eventData.price}</Text>
        </TouchableOpacity>
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    ...FONTS.h3,
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
  buyButton: {
    backgroundColor: COLORS.primary,
    margin: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  buyButtonText: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});

export default EventDetailScreen;