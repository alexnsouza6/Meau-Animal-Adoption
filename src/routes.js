import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from './components/SideMenu';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Feeds from './containers/Feeds';
import PetRegister from './containers/PetRegister';
import PetFilter from './containers/PetFilter';
import SuccessPetRegister from './components/SuccessPetRegister';
import AnimalFeed from './containers/AnimalFeed';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    SignUp,
    Profile,
    Login,
    Main,
    Feeds,
    PetRegister,
    PetFilter,
    SuccessPetRegister,
    AnimalFeed,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Main',
  },
));

export default Routes;
