import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/theme';

interface UserPreferences {
  language: 'en' | 'tr';
  notifications: boolean;
  darkMode: boolean;
  currency: string;
}

const ProfileScreen = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    language: 'en',
    notifications: true,
    darkMode: false,
    currency: 'USD',
  });

  const [userStats] = useState({
    totalTrips: 12,
    placesVisited: 24,
    reviews: 36,
    favorites: 48,
  });

  const toggleSwitch = (key: keyof UserPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userStats.totalTrips}</Text>
          <Text style={styles.statLabel}>Trips</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userStats.placesVisited}</Text>
          <Text style={styles.statLabel}>Places</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userStats.reviews}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userStats.favorites}</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceLeft}>
            <Ionicons name="language" size={24} color={COLORS.primary} />
            <Text style={styles.preferenceText}>Language</Text>
          </View>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() =>
              setPreferences((prev) => ({
                ...prev,
                language: prev.language === 'en' ? 'tr' : 'en',
              }))
            }
          >
            <Text style={styles.languageButtonText}>
              {preferences.language.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.preferenceItem}>
          <View style={styles.preferenceLeft}>
            <Ionicons name="notifications" size={24} color={COLORS.primary} />
            <Text style={styles.preferenceText}>Notifications</Text>
          </View>
          <Switch
            value={preferences.notifications}
            onValueChange={() => toggleSwitch('notifications')}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
          />
        </View>

        <View style={styles.preferenceItem}>
          <View style={styles.preferenceLeft}>
            <Ionicons name="moon" size={24} color={COLORS.primary} />
            <Text style={styles.preferenceText}>Dark Mode</Text>
          </View>
          <Switch
            value={preferences.darkMode}
            onValueChange={() => toggleSwitch('darkMode')}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
          />
        </View>

        <View style={styles.preferenceItem}>
          <View style={styles.preferenceLeft}>
            <Ionicons name="cash" size={24} color={COLORS.primary} />
            <Text style={styles.preferenceText}>Currency</Text>
          </View>
          <TouchableOpacity
            style={styles.currencyButton}
            onPress={() =>
              setPreferences((prev) => ({
                ...prev,
                currency: prev.currency === 'USD' ? 'TRY' : 'USD',
              }))
            }
          >
            <Text style={styles.currencyButtonText}>{preferences.currency}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="person" size={24} color={COLORS.primary} />
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="lock-closed" size={24} color={COLORS.primary} />
          <Text style={styles.actionButtonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="help-circle" size={24} color={COLORS.primary} />
          <Text style={styles.actionButtonText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]}>
          <Ionicons name="log-out" size={24} color={COLORS.error} />
          <Text style={[styles.actionButtonText, styles.logoutText]}>
            Log Out
          </Text>
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
  header: {
    alignItems: 'center',
    padding: SIZES.padding * 2,
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SIZES.padding,
  },
  name: {
    ...FONTS.h2,
    color: COLORS.text,
  },
  email: {
    ...FONTS.body2,
    color: COLORS.textLight,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    marginTop: SIZES.padding,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  statLabel: {
    ...FONTS.body3,
    color: COLORS.textLight,
  },
  section: {
    backgroundColor: COLORS.white,
    marginTop: SIZES.padding,
    padding: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h3,
    marginBottom: SIZES.padding,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  preferenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preferenceText: {
    ...FONTS.body2,
    marginLeft: SIZES.padding,
  },
  languageButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius,
  },
  languageButtonText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
  currencyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.radius,
  },
  currencyButtonText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  actionButtonText: {
    ...FONTS.body2,
    marginLeft: SIZES.padding,
    color: COLORS.text,
  },
  logoutButton: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: COLORS.error,
  },
});

export default ProfileScreen; 