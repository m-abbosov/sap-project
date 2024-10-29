import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LaunchScreen, LoginScreen} from '../screens';
import {Platform} from 'react-native';

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.OS !== 'android',
      }}>
      <StackNavigator.Screen name="launch" component={LaunchScreen} />
      <StackNavigator.Screen name="login" component={LoginScreen} />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
