import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CustomText500 } from '../Typography';

type CommonHeaderProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  icon?: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  righticon?: ImageSourcePropType;
};

const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  containerStyle,
  //   onPress,
  //   icon,
  //   iconStyle,
  //   rightIcon,
}) => {
  return (
    <View style={[styles.root, containerStyle]}>
      <CustomText500>{title}</CustomText500>
    </View>
  );
};

export default CommonHeader;
