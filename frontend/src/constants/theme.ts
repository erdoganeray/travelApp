import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Primary colors
  primary: '#2196F3',
  secondary: '#03A9F4',
  
  // UI colors
  background: '#F5F5F5',
  white: '#FFFFFF',
  black: '#000000',
  text: '#333333',
  textLight: '#666666',
  border: '#E0E0E0',
  error: '#FF5252',
  success: '#4CAF50',
  warning: '#FFC107',
  
  // Transparent colors
  transparentBlack: 'rgba(0, 0, 0, 0.5)',
  transparentWhite: 'rgba(255, 255, 255, 0.5)',
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 16,

  // Font sizes
  h1: 30,
  h2: 24,
  h3: 18,
  h4: 16,
  body1: 16,
  body2: 14,
  body3: 12,

  // App dimensions
  width,
  height,
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 20 },
  body1: { fontSize: SIZES.body1, lineHeight: 24 },
  body2: { fontSize: SIZES.body2, lineHeight: 20 },
  body3: { fontSize: SIZES.body3, lineHeight: 18 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme; 