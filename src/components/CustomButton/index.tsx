import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CustomText500 } from '../Typography';

type CustomButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <CustomText500 style={[styles.textStyle, titleStyle]}>
        {title}
      </CustomText500>
    </TouchableOpacity>
  );
};
export default CustomButton;
