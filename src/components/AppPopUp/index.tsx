import { forwardRef, useImperativeHandle, useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export type AppPopUpRef = {
  show: (cfg: PopUpConfig) => void;
  hide: () => void;
};

type PopUpConfig = {
  title: string;
  message?: string;
  submitText?: string;
  cancelText?: string;
};

const AppPopUp = forwardRef((_, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [config, setConfig] = useState<PopUpConfig>({
    title: '',
  });

  useImperativeHandle(ref, () => ({
    show: (cfg: PopUpConfig) => {
      setConfig(cfg);
      setVisible(true);
    },
    hide: () => setVisible(false),
  }));

  return (
    <Modal visible={visible} animationType={'fade'} statusBarTranslucent>
      <View style={styles.root}>
        <View style={styles.innerView}>
          <Text>{config.title}</Text>
          <Button title="Ok" onPress={() => setVisible(false)} />
        </View>
      </View>
    </Modal>
  );
});
export default AppPopUp;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  innerView: {
    backgroundColor: 'red',
    padding: 20,
  },
});
