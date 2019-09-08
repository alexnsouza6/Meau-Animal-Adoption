import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

if (__DEV__) {
  import('../ReactotronConfig');
}

import configureStore from './store';

const store = configureStore()

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Provider store = { store }>
      <Routes />
    </Provider>
  </>
);

export default App;
