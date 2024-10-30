import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import '@gorhom/bottom-sheet';

import AppNavigator from './src/navigators';
import service from './src/navigators/service';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const containerStyles = {
  flex: 1,
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={containerStyles}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <NavigationContainer ref={service._navigator}>
        <GestureHandlerRootView style={containerStyles}>
          <AppNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
