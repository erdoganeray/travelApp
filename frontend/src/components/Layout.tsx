import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ViewStyle, TextStyle } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/theme';

type NavItem = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems: NavItem[] = [
    { name: 'Home', icon: 'home', route: 'Home' },
    { name: 'Travel Plans', icon: 'map', route: 'TravelPlans' },
    { name: 'Profile', icon: 'person', route: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.logo}>Travel App</Text>
        <View style={styles.navItems}>
          {navItems.map((item) => (
            <TouchableOpacity 
              key={item.route}
              style={[
                styles.navItem,
                route.name === item.route && styles.activeNavItem
              ]} 
              onPress={() => {
                if (route.name !== item.route) {
                  navigation.navigate(item.route as never);
                }
              }}
            >
              <Ionicons 
                name={item.icon} 
                size={24} 
                color={route.name === item.route ? COLORS.white : COLORS.primary} 
              />
              <Text style={[
                styles.navText,
                route.name === item.route && styles.activeNavText
              ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
  } as ViewStyle,
  sidebar: {
    width: 250,
    backgroundColor: COLORS.white,
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
    padding: SIZES.padding,
    ...(Platform.OS === 'web' ? {
      height: '100vh',
      position: 'fixed',
      overflowY: 'auto',
    } : {
      height: '100%',
      position: 'absolute',
    }),
    left: 0,
    top: 0,
    zIndex: 1000,
  } as ViewStyle,
  logo: {
    ...FONTS.h2,
    color: COLORS.primary,
    textAlign: 'center' as const,
    marginBottom: SIZES.padding * 2,
  } as TextStyle,
  navItems: {
    marginTop: SIZES.padding,
  } as ViewStyle,
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    marginBottom: SIZES.base,
    borderRadius: SIZES.radius,
  } as ViewStyle,
  activeNavItem: {
    backgroundColor: COLORS.primary,
  } as ViewStyle,
  navText: {
    ...FONTS.body2,
    color: COLORS.primary,
    marginLeft: SIZES.base,
  } as TextStyle,
  activeNavText: {
    color: COLORS.white,
  } as TextStyle,
  content: {
    flex: 1,
    marginLeft: 250,
    ...(Platform.OS === 'web' ? {
      minHeight: '100vh',
      overflowY: 'auto',
    } : {
      height: '100%',
    }),
  } as ViewStyle,
};

export default Layout;
