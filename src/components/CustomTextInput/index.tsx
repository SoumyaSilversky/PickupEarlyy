import { TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  value?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.textStyle}
        {...rest}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
