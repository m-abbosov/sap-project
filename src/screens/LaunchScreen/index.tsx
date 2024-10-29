import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import service from '../../navigators/service';
import {styles} from './styles';

export type Props = {
  props?: object | any;
};

const LaunchScreen: React.FC<Props> = () => {
  useEffect(() => {
    setTimeout(() => {
      service.reset('login');
    }, 2000);
  }, []);

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
