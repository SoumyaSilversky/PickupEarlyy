import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/normalize';
import { colors } from '../../config/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textStyle: {
    fontSize: normalize(14, 'height'),
    color: colors.primary,
  },
  flatListItem: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'red',
  },
});
