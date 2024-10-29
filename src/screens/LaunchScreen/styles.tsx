import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width / 2,
  },
});
