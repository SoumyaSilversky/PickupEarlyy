import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { appPopUpRef } from '../../../../App';
import CustomButton from '../../../components/CustomButton';
import { CustomText700 } from '../../../components/Typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from '../../../utils/normalize';
import { colors } from '../../../config/colors';
import CustomTextInput from '../../../components/CustomTextInput';

const LoginScreen = () => {
  const { top } = useSafeAreaInsets();
  const [formaValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (label: 'email' | 'password', value: string) => {
    setFormValues(prev => ({ ...prev, [label]: value }));
  };

  return (
    <View style={[styles.root, { paddingTop: top + normalize(10) }]}>
      <CustomText700 style={styles.titleText}>Welcome Back!</CustomText700>
      <View style={styles.inputFieldContainer}>
        <CustomTextInput
          label={'Enter email'}
          value={formaValues.email}
          onChangeText={(txt: string) => handleOnChange('email', txt)}
        />
        <CustomTextInput
          label={'Enter password'}
          value={formaValues.password}
          onChangeText={(txt: string) => handleOnChange('password', txt)}
        />
      </View>
      <CustomButton
        title="Log In"
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
    paddingHorizontal: normalize(12),
  },
  titleText: {
    fontSize: normalize(18, 'height'),
    color: colors.black,
  },
  inputFieldContainer: {
    gap: normalize(12),
  },
});
