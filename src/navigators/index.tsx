import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {HomeScreen, LaunchScreen, LoginScreen} from '../screens';

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
      <StackNavigator.Screen name="home" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
