import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
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
  onCardPress: (id: string) => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

const CardSection: React.FC<CardSectionProps> = ({ title, data, onCardPress }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => onCardPress(item.id)}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity style={styles.favoriteButton}>
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
    marginVertical: SIZES.padding,
  },
  sectionTitle: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
    color: COLORS.text,
  },
  scrollContent: {
    paddingHorizontal: SIZES.padding,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  cardTitle: {
    fontSize: SIZES.h3,
    fontWeight: '600',
    color: COLORS.text,
  },
  favoriteButton: {
    padding: SIZES.base,
  },
});

export default CardSection; 