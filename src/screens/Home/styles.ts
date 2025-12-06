import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  flatList: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
  },
  flatListItem: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
});
