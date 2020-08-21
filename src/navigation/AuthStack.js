import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LashScreen from '../screens/LashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Lash" component={LashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        headerMode="screen"
      />
    </Stack.Navigator>
  );
}
