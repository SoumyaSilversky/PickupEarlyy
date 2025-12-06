import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import ShimmerPlaceholder from '../../components/ShimmerPlaceholder';
import { CustomText500 } from '../../components/Typography';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleTimeOut = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(handleTimeOut);
  }, []);
  if (loading) {
    return <ShimmerPlaceholder />;
  }
  return (
    <View style={styles.root}>
      <Text>index</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatList}>
              <View style={styles.flatListItem} />
              <CustomText500>{item}</CustomText500>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
