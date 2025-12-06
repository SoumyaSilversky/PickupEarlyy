import React from 'react';
import { Provider } from 'react-redux';
import Root from './src/routes/Root';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppPopUp, { AppPopUpRef } from './src/components/AppPopUp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './src/components/CommonHeader/styles';
export const appPopUpRef = React.createRef<AppPopUpRef>();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.root}>
        <PersistGate persistor={persistor}>
          <Root />
          <AppPopUp ref={appPopUpRef} />
        </PersistGate>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
