import { memo } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

interface CustomTextProps extends TextProps {
  children: string;
}

export const CustomText100 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style100, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText200 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style200, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText300 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style300, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText400 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style400, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText500 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style500, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText600 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style600, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText700 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style700, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText800 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style800, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);

export const CustomText900 = memo(
  ({ style, children, ...rest }: CustomTextProps) => {
    return (
      <Text style={[styles.style900, style]} {...rest} allowFontScaling={false}>
        {children}
      </Text>
    );
  },
);