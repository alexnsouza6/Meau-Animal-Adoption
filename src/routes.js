import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import Login from './containers/Login';

const Routes = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Register,
    Login,
    Main,
  },
  {
    initialRouteName: 'Main',
  },
));

export default Routes;
