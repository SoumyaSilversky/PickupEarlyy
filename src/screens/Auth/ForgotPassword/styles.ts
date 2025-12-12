import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  headerRightContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  flatList: {
    width: '45%',
    // flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems:'center',gap:10
  },
  flatListItem: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'red',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    gap: 12,
    justifyContent: 'space-between',
  },
});
