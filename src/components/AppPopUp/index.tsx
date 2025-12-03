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
  onSubmit?: () => void;
  onCancel?: () => void;
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

  const handleOnSubmit = () => {
    setVisible(false);
    config?.onSubmit?.();
  };

  const handleOnCancel = () => {
    setVisible(false);
    config?.onCancel?.();
  };

  return (
    <Modal visible={visible} animationType={'fade'} statusBarTranslucent>
      <View style={styles.root}>
        <View style={styles.innerView}>
          <Text>{config.title}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Ok" onPress={handleOnSubmit} />
            <Button title="Cancel" onPress={handleOnCancel} />
          </View>
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
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
