import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1200,
};

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
  padding: Platform.OS === 'web' ? 24 : 16,

  // Font sizes
  h1: Platform.OS === 'web' ? 36 : 30,
  h2: Platform.OS === 'web' ? 28 : 24,
  h3: Platform.OS === 'web' ? 20 : 18,
  h4: Platform.OS === 'web' ? 18 : 16,
  body1: Platform.OS === 'web' ? 18 : 16,
  body2: Platform.OS === 'web' ? 16 : 14,
  body3: Platform.OS === 'web' ? 14 : 12,

  // App dimensions
  width,
  height,

  // Web-specific sizes
  maxContentWidth: 1200,
  sidebarWidth: 250,
  headerHeight: Platform.OS === 'web' ? 80 : 60,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const FONTS = {
  h1: { 
    fontSize: SIZES.h1, 
    lineHeight: Platform.OS === 'web' ? 1.4 : 36,
    letterSpacing: Platform.OS === 'web' ? -0.5 : undefined,
  },
  h2: { 
    fontSize: SIZES.h2, 
    lineHeight: Platform.OS === 'web' ? 1.4 : 30,
    letterSpacing: Platform.OS === 'web' ? -0.5 : undefined,
  },
  h3: { 
    fontSize: SIZES.h3, 
    lineHeight: Platform.OS === 'web' ? 1.4 : 22,
  },
  h4: { 
    fontSize: SIZES.h4, 
    lineHeight: Platform.OS === 'web' ? 1.4 : 20,
  },
  body1: { 
    fontSize: SIZES.body1, 
    lineHeight: Platform.OS === 'web' ? 1.6 : 24,
  },
  body2: { 
    fontSize: SIZES.body2, 
    lineHeight: Platform.OS === 'web' ? 1.6 : 20,
  },
  body3: { 
    fontSize: SIZES.body3, 
    lineHeight: Platform.OS === 'web' ? 1.6 : 18,
  },
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 8,
  },
};

const appTheme = { COLORS, SIZES, FONTS, SPACING, SHADOWS, BREAKPOINTS };

export default appTheme; 