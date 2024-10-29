import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import AppNavigator from './src/navigators';
import service from './src/navigators/service';
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
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
