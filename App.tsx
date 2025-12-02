import React from 'react';
import { Provider } from 'react-redux';
import Root from './src/routes/Root';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppPopUp, { AppPopUpRef } from './src/components/AppPopUp';
export const appPopUpRef = React.createRef<AppPopUpRef>();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
        <AppPopUp ref={appPopUpRef} />
      </PersistGate>
    </Provider>
  );
};

export default App;
