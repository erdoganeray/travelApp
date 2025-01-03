import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
  },
  sidebar: {
    width: 250,
    backgroundColor: COLORS.white,
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
    padding: SIZES.padding,
    height: '100%',
  },
  logo: {
    ...FONTS.h2,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SIZES.padding * 2,
  },
  navItems: {
    marginTop: SIZES.padding,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    marginBottom: SIZES.base,
    borderRadius: SIZES.radius,
  },
  activeNavItem: {
    backgroundColor: COLORS.primary,
  },
  navText: {
    ...FONTS.body2,
    color: COLORS.primary,
    marginLeft: SIZES.base,
  },
  activeNavText: {
    color: COLORS.white,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
