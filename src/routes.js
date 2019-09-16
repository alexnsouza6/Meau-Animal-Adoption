import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Feed from './containers/Feed';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        drawerLabel: 'Cadastro',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: 'Meu Perfil',
      },
    },
    Login,
    Main: {
      screen: Main,
      navigationOptions: {
        drawerLabel: 'Início',
      },
    },
    Feed,
  },
  {
    initialRouteName: 'Main',
  },
));

export default Routes;
