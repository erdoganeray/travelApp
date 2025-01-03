import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

interface CardItem {
  id: string;
  title: string;
  image: string;
}

interface CardSectionProps {
  title: string;
  data: CardItem[];
  onPress: (id: string) => void;
}

const getCardWidth = () => {
  const { width } = Dimensions.get('window');
  if (Platform.OS === 'web') {
    // On web, use responsive widths based on screen size
    if (width > 1200) return 300; // Large screens
    if (width > 768) return width * 0.3; // Medium screens
    return width * 0.7; // Small screens
  }
  return width * 0.7; // Mobile default
};

const CardSection: React.FC<CardSectionProps> = ({ title, data, onPress }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, Platform.OS === 'web' && styles.cardWeb]}
            onPress={() => onPress(item.id)}
          >
            <Image 
              source={{ uri: item.image }} 
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity 
                style={styles.favoriteButton}
                onPress={(e) => {
                  e.stopPropagation();
                  // Handle favorite toggle
                }}
              >
                <Ionicons name="heart-outline" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
  } as ViewStyle,
  sectionTitle: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    marginBottom: 12,
    marginHorizontal: Platform.OS === 'web' ? 0 : 16,
    color: COLORS.text,
  } as TextStyle,
  scrollContent: {
    paddingHorizontal: Platform.OS === 'web' ? 0 : 16,
    paddingBottom: 8,
  } as ViewStyle,
  card: {
    width: getCardWidth(),
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  } as ViewStyle,
  cardWeb: Platform.OS === 'web' ? {
    transform: [{ scale: 1 }], // Initial scale
  } as ViewStyle : {},
  cardImage: {
    width: '100%',
    height: 150,
    backgroundColor: COLORS.border,
  } as ImageStyle,
  cardContent: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  cardTitle: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
    marginRight: 8,
  } as TextStyle,
  favoriteButton: {
    padding: 4,
  } as ViewStyle,
});

export default CardSection; 