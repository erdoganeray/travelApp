import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../components/Layout';
import { COLORS, SIZES, FONTS } from '../constants/theme';

interface TravelPlan {
  id: string;
  startDate: Date;
  endDate: Date;
  startCity: string;
  endCity: string;
  accommodation: string;
  participants: number;
  transportation: string;
  localTransport: string;
}

const TravelPlanScreen = () => {
  const [showNewPlan, setShowNewPlan] = useState(false);
  const [plans, setPlans] = useState<TravelPlan[]>([]);
  const [newPlan, setNewPlan] = useState<Partial<TravelPlan>>({});
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const handleCreatePlan = () => {
    if (newPlan.startDate && newPlan.endDate && newPlan.startCity && newPlan.endCity) {
      const plan: TravelPlan = {
        id: Date.now().toString(),
        startDate: newPlan.startDate,
        endDate: newPlan.endDate,
        startCity: newPlan.startCity,
        endCity: newPlan.endCity,
        accommodation: newPlan.accommodation || '',
        participants: newPlan.participants || 1,
        transportation: newPlan.transportation || '',
        localTransport: newPlan.localTransport || '',
      };
      setPlans([...plans, plan]);
      setNewPlan({});
      setShowNewPlan(false);
    }
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.newPlanButton}
          onPress={() => setShowNewPlan(!showNewPlan)}
        >
          <Ionicons name="add-circle" size={24} color={COLORS.white} />
          <Text style={styles.newPlanButtonText}>Create New Plan</Text>
        </TouchableOpacity>

        {showNewPlan && (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>New Travel Plan</Text>
            
            {/* Required Fields */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Start Date *</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowStartDate(true)}
              >
                <Text>
                  {newPlan.startDate
                    ? newPlan.startDate.toLocaleDateString()
                    : 'Select date'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>End Date *</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowEndDate(true)}
              >
                <Text>
                  {newPlan.endDate
                    ? newPlan.endDate.toLocaleDateString()
                    : 'Select date'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Start City *</Text>
              <TextInput
                style={styles.input}
                value={newPlan.startCity}
                onChangeText={(text) => setNewPlan({ ...newPlan, startCity: text })}
                placeholder="Enter start city"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>End City *</Text>
              <TextInput
                style={styles.input}
                value={newPlan.endCity}
                onChangeText={(text) => setNewPlan({ ...newPlan, endCity: text })}
                placeholder="Enter end city"
              />
            </View>

            {/* Optional Fields */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Accommodation</Text>
              <TextInput
                style={styles.input}
                value={newPlan.accommodation}
                onChangeText={(text) =>
                  setNewPlan({ ...newPlan, accommodation: text })
                }
                placeholder="Hotel, Airbnb, etc."
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Number of Participants</Text>
              <TextInput
                style={styles.input}
                value={newPlan.participants?.toString()}
                onChangeText={(text) =>
                  setNewPlan({ ...newPlan, participants: parseInt(text) || 1 })
                }
                keyboardType="numeric"
                placeholder="1"
              />
            </View>

            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreatePlan}
            >
              <Text style={styles.createButtonText}>Create Plan</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Existing Plans */}
        <View style={styles.plansList}>
          <Text style={styles.sectionTitle}>Your Travel Plans</Text>
          {plans.map((plan) => (
            <View key={plan.id} style={styles.planCard}>
              <Text style={styles.planTitle}>
                {plan.startCity} to {plan.endCity}
              </Text>
              <Text style={styles.planDates}>
                {plan.startDate.toLocaleDateString()} -{' '}
                {plan.endDate.toLocaleDateString()}
              </Text>
            </View>
          ))}
        </View>

        {showStartDate && (
          <DateTimePicker
            value={newPlan.startDate || new Date()}
            mode="date"
            onChange={(event: DateTimePickerEvent, date?: Date) => {
              setShowStartDate(false);
              if (date) {
                setNewPlan({ ...newPlan, startDate: date });
              }
            }}
          />
        )}

        {showEndDate && (
          <DateTimePicker
            value={newPlan.endDate || new Date()}
            mode="date"
            onChange={(event: DateTimePickerEvent, date?: Date) => {
              setShowEndDate(false);
              if (date) {
                setNewPlan({ ...newPlan, endDate: date });
              }
            }}
          />
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  newPlanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  newPlanButtonText: {
    color: COLORS.white,
    marginLeft: SIZES.base,
    ...FONTS.h3,
  },
  formContainer: {
    backgroundColor: COLORS.white,
    margin: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  formTitle: {
    ...FONTS.h2,
    marginBottom: SIZES.padding,
  },
  inputGroup: {
    marginBottom: SIZES.padding,
  },
  label: {
    ...FONTS.body2,
    marginBottom: SIZES.base,
    color: COLORS.text,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...FONTS.body2,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    ...FONTS.body2,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  createButtonText: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  plansList: {
    padding: SIZES.padding,
  },
  sectionTitle: {
    ...FONTS.h2,
    marginBottom: SIZES.padding,
  },
  planCard: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.padding,
  },
  planTitle: {
    ...FONTS.h3,
    marginBottom: SIZES.base,
  },
  planDates: {
    ...FONTS.body2,
    color: COLORS.textLight,
  },
});

export default TravelPlanScreen; 