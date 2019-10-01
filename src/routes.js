import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Feed from './containers/Feed';
import PetRegister from './containers/PetRegister';
import PetFilter from './containers/PetFilter';
import SuccessPetRegister from './components/SuccessPetRegister';

const Routes = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Register,
    Profile,
    Login,
    Main,
    Feed,
    PetRegister,
    PetFilter,
    SuccessPetRegister,
  },
  {
    initialRouteName: 'Main',
  },
));

export default Routes;
