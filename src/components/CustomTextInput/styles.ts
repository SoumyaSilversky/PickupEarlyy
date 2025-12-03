import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/normalize';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    height: normalize(40),
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: normalize(12),
  },
  textStyle: {
    flex: 1,
    fontSize: normalize(14, 'height'),
    color: 'red',
    marginHorizontal: normalize(10),
  },
});
