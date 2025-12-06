import React from 'react';
import { FlatList, Text } from 'react-native';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { styles } from './styles';
const data = [1, 2, 3, 4, 5];

const ShimmerPlaceholder = () => {
  console.log('====================================');
  console.log('Array', data);
  console.log('====================================');
  return (
    <SkeletonPlaceholder>
      {/* <SkeletonPlaceholder> */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <View key={index} style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ width: 60, height: 60, borderRadius: 30 }} />

          <View style={{ marginLeft: 20 }}>
            <View style={{ width: 180, height: 20, borderRadius: 4 }} />
            <View
              style={{
                width: 140,
                height: 20,
                borderRadius: 4,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      ))}
    </SkeletonPlaceholder>
    // </SkeletonPlaceholder>
  );
};
export default ShimmerPlaceholder;
