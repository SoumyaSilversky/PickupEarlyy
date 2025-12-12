import { FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../../Home/styles';
import { CustomText500 } from '../../../components/Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackProps } from '../../../routes/ScreenParams';

const ForgotPasswordScreen = ({
  navigation,
}: RootStackProps<'ForgotPasswordScreen'>) => {
  const handleOnPressGoBack = () => {
    // Handle password reset logic here
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <CustomText500>Add Employee</CustomText500>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={handleOnPressGoBack}>
            <CustomText500>Save</CustomText500>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3]}
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

export default ForgotPasswordScreen;
