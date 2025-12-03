import { StyleSheet, View } from 'react-native';
import React from 'react';
import { appPopUpRef } from '../../../../App';
import CustomButton from '../../../components/CustomButton';
import { CustomText700 } from '../../../components/Typography';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <CustomText700>LoginScreen</CustomText700>
      <CustomButton
        title="Open Modal"
        onPress={() =>
          appPopUpRef.current?.show({
            title: 'Hari Hey',
            message: 'Nara',
            onSubmit: () => console.log('Hii there Ok is pressed'),
          })
        }
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'green',
  },
});
