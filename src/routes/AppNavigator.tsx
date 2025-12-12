import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import { RootStackParamList, StackNavigationScreen } from './ScreenParams';
import HomeScreen from '../screens/Home';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
const AppNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={StackNavigationScreen.LogInScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={StackNavigationScreen.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={StackNavigationScreen.ForgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
