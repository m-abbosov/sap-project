import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import service from '../../navigators/service';
import {styles} from './styles';

export type Props = {
  props?: object | any;
};

const LaunchScreen: React.FC<Props> = () => {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const sessionId = await AsyncStorage.getItem('sessionId');
    if (sessionId) {
      setTimeout(() => {
        service.reset('home');
      }, 2000);
    } else {
      setTimeout(() => {
        service.navigate('login');
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.img}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default LaunchScreen;
