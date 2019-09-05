import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAOCemXaF-cVi9CB0Pjp6_OT5_y5b2MMWQ',
  authDomain: 'meau-app-8f1b1.firebaseapp.com',
  databaseURL: 'https://meau-app-8f1b1.firebaseio.com',
  projectId: 'meau-app-8f1b1',
  storageBucket: 'meau-app-8f1b1.appspot.com',
  messagingSenderId: '821505612282',
  appId: '1:821505612282:web:e3ea38dc9ee8ffec086c43',
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
