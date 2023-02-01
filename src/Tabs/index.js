import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddIncome from '../components/AddIncome';
import AddExpense from '../components/AddExpense';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="AddIncome" component={AddIncome} />
      <Tab.Screen name="AddExpense" component={AddExpense} />
    </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({})