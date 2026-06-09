import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { Text, ScrollView  } from 'react-native';

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
        <Link href='/add-meals' style={{ fontSize: 18, color: '#007bff' }}>
                Go to Add Meal
        </Link>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}