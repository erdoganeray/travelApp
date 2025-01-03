import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, ImageStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/theme';

interface CardData {
  id: string;
  title: string;
  image: string;
  type?: string;
  rating?: number;
  reviews?: number;
  date?: string;
}

interface CardSectionProps {
  title: string;
  data: CardData[];
  onPress: (id: string) => void;
}

const CardSection: React.FC<CardSectionProps> = ({ title, data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.cardsContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => onPress(item.id)}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.overlay} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                {item.type && (
                  <Text style={styles.cardType} numberOfLines={1}>{item.type}</Text>
                )}
                {item.rating && (
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>{item.rating}</Text>
                    {item.reviews && (
                      <Text style={styles.reviews}>({item.reviews} reviews)</Text>
                    )}
                  </View>
                )}
                {item.date && (
                  <View style={styles.dateContainer}>
                    <Ionicons name="calendar" size={16} color={COLORS.white} />
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding * 2,
    width: '100%',
  },
  titleContainer: {
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
    width: '100%',
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '600',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: SIZES.padding,
  },
  card: {
    width: Platform.OS === 'web' ? '31%' : '100%',
    marginBottom: SIZES.padding,
    marginRight: '2%',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    }),
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    aspectRatio: 16 / 9,
    width: '100%',
    height: undefined,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  } as ImageStyle,
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  cardContent: {
    position: 'absolute',
    bottom: SIZES.padding / 2,
    left: SIZES.padding / 2,
    right: SIZES.padding / 2,
    zIndex: 1,
    padding: SIZES.base,
    minHeight: 45,
  },
  cardTitle: {
    ...FONTS.h3,
    color: COLORS.white,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  cardType: {
    ...FONTS.body3,
    color: COLORS.white,
    marginBottom: SIZES.base / 2,
    fontSize: 16,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 4,
    borderRadius: SIZES.radius,
  },
  rating: {
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: SIZES.base / 2,
  },
  reviews: {
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: SIZES.base / 2,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base / 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 4,
    borderRadius: SIZES.radius,
  },
  date: {
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: SIZES.base / 2,
  },
});

export default CardSection; 