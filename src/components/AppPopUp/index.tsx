import { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { colors } from '../../config/colors';
import CustomButton from '../CustomButton';
import { normalize } from '../../utils/normalize';
import { CustomText400, CustomText500 } from '../Typography';

export type AppPopUpRef = {
  show: (cfg: PopUpConfig) => void;
  hide: () => void;
};

type PopUpConfig = {
  title: string;
  message: string;
  submitText?: string;
  cancelText?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
};

const AppPopUp = forwardRef((_, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [config, setConfig] = useState<PopUpConfig>({
    title: '',
    message: '',
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
          <CustomText500>{config.title}</CustomText500>
          <CustomText400>{config.message}</CustomText400>
          <View style={styles.buttonContainer}>
            <CustomButton
              title={config.submitText ?? 'Ok'}
              onPress={handleOnSubmit}
              style={styles.buttonStyle}
            />
            <CustomButton
              title={config.cancelText ?? 'Cancel'}
              onPress={handleOnCancel}
              style={styles.buttonStyle}
            />
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
    backgroundColor: colors.modalBackground,
    justifyContent: 'center',
  },
  innerView: {
    backgroundColor: colors.white,
    padding: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    // flex:1,
    flexDirection: 'row',
    width: '100%',
    gap: normalize(12),
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '46%',
  },
});
