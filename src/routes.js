import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Feed from './containers/Feed';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    SignUp,
    Registrar: {
      screen: Register,
    },
    Perfil: {
      screen: Profile,
    },
    Login,
    Início: {
      screen: Main,
    },
    Feed,
  },
  {
    initialRouteName: 'Início',
  },
));

export default Routes;
