import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Login from './containers/Login';

const Routes = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading',
  },
));

export default Routes;
