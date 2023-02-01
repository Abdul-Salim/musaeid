import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Finance from './src/screens/Finance';
import AddExpense from './src/components/AddExpense';
import AddIncome from './src/components/AddIncome';
import Schedule from './src/screens/Schedule';
import VoiceCommands from './src/screens/VoiceCommands';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Finance" component={Finance} />
            <Stack.Screen name="AddExpense" component={AddExpense} />
            <Stack.Screen name="AddIncome" component={AddIncome} />
            <Stack.Screen name="Shcedule" component={Schedule} />
            <Stack.Screen name="Voice" component={VoiceCommands} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
