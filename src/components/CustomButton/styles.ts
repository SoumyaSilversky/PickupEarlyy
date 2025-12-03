import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/normalize';

export const styles = StyleSheet.create({
  container: {
    height: normalize(40),
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: normalize(14, 'height'),
    color: 'red',
    textAlign: 'center',
  },
});
