import { FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CustomText500 } from '../../components/Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  RootStackProps,
  StackNavigationScreen,
} from '../../routes/ScreenParams';

const HomeScreen = ({ navigation }: RootStackProps<'HomeScreen'>) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <CustomText500>Employee List</CustomText500>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(StackNavigationScreen.ForgotPasswordScreen)
            }
          >
            <CustomText500>+</CustomText500>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <CustomText500>/\</CustomText500>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
