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
    name: eventId === '1' ? 'Istanbul Jazz Festival' :
          eventId === '2' ? 'Turkish Food Festival' :
          eventId === '3' ? 'Art Exhibition' :
          eventId === '4' ? 'Cultural Festival' : 'Unknown Event',
    type: eventId === '1' ? 'Music Festival' :
          eventId === '2' ? 'Food Festival' :
          eventId === '3' ? 'Art Event' :
          eventId === '4' ? 'Cultural Event' : 'Unknown Type',
    date: eventId === '1' ? '2024-07-15' :
          eventId === '2' ? '2024-08-20' :
          eventId === '3' ? '2024-09-10' :
          eventId === '4' ? '2024-10-05' : 'TBA',
    time: eventId === '1' ? '16:00 - 23:00' :
          eventId === '2' ? '11:00 - 22:00' :
          eventId === '3' ? '10:00 - 20:00' :
          eventId === '4' ? '12:00 - 21:00' : 'TBA',
    location: eventId === '1' ? 'Istanbul Arena' :
              eventId === '2' ? 'Taksim Square' :
              eventId === '3' ? 'Istanbul Modern' :
              eventId === '4' ? 'Sultanahmet Square' : 'TBA',
    address: eventId === '1' ? 'Istanbul Arena, Cd. 34367 Şişli/Istanbul, Turkey' :
             eventId === '2' ? 'Taksim Square, Beyoğlu/Istanbul, Turkey' :
             eventId === '3' ? 'Istanbul Modern, Karaköy/Istanbul, Turkey' :
             eventId === '4' ? 'Sultanahmet Square, Fatih/Istanbul, Turkey' : 'TBA',
    description: eventId === '1' ? 'Join us for the biggest jazz festival of the summer featuring top artists from around the world. Experience unforgettable performances under the stars.' :
                 eventId === '2' ? 'Discover the rich flavors of Turkish cuisine with master chefs. Enjoy traditional dishes, cooking demonstrations, and cultural performances.' :
                 eventId === '3' ? 'Experience contemporary art from leading Turkish and international artists. Features paintings, sculptures, and interactive installations.' :
                 eventId === '4' ? 'Immerse yourself in Turkish culture through music, dance, crafts, and traditional performances. A celebration of heritage and tradition.' : 'No description available',
    image: eventId === '1' ? 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819' :
           eventId === '2' ? 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5' :
           eventId === '3' ? 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b' :
           eventId === '4' ? 'https://images.unsplash.com/photo-1551972873-b7e8754e8e26' : 'https://via.placeholder.com/1074x800',
    price: eventId === '1' ? '₺500' :
           eventId === '2' ? '₺200' :
           eventId === '3' ? '₺150' :
           eventId === '4' ? '₺250' : 'TBA',
    features: eventId === '1' ? [
      { icon: 'musical-notes', label: 'Live Jazz Music' },
      { icon: 'people', label: 'Age 18+' },
      { icon: 'fast-food', label: 'Food & Drinks' },
      { icon: 'ticket', label: 'Tickets Required' },
    ] : eventId === '2' ? [
      { icon: 'restaurant', label: 'Food Tastings' },
      { icon: 'people', label: 'All Ages' },
      { icon: 'cart', label: 'Food Market' },
      { icon: 'ticket', label: 'Tickets Required' },
    ] : eventId === '3' ? [
      { icon: 'image', label: 'Art Gallery' },
      { icon: 'people', label: 'All Ages' },
      { icon: 'cafe', label: 'Cafe Available' },
      { icon: 'ticket', label: 'Tickets Required' },
    ] : eventId === '4' ? [
      { icon: 'musical-notes', label: 'Live Performances' },
      { icon: 'people', label: 'All Ages' },
      { icon: 'cart', label: 'Craft Market' },
      { icon: 'ticket', label: 'Tickets Required' },
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
    marginBottom: SIZES.padding * 1.5,
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