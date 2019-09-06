import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';


if (__DEV__) {
  import('../ReactotronConfig');
}

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default App;
