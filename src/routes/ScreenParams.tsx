import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const StackNavigationScreen = Object.freeze({
  LogInScreen: 'LogInScreen',
  SignUpScreen: 'SignUpScreen',
  HomeScreen: 'HomeScreen',
  ProfileScreen: 'ProfileScreen',
  ForgotPasswordScreen: 'ForgotPasswordScreen',
});
export type RootStackParamList = {
  LogInScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  ForgotPasswordScreen: undefined;
};
export type RootStackProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
