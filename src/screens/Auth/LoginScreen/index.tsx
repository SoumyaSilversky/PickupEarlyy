import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { appPopUpRef } from '../../../../App';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Text>LoginScreen</Text>
      <Button
        title="Open Modal"
        onPress={() =>
          appPopUpRef.current?.show({ title: 'Hari Hey', message: 'Nara' })
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
