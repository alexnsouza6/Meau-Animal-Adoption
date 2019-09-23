import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ host: '127.0.0.1', port: 9090, name: 'MeauAdoption' })
  .useReactNative()
  .connect();


console.log = Reactotron.log; // eslint-disable-line no-console
