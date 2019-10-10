import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from './components/SideMenu';

import Main from './components/Main';
import Loading from './components/Loading';
import NotRegistered from './components/NotRegistered';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import FinishProcess from './containers/FinishProcess';
import Login from './containers/Login';
import Feeds from './containers/Feeds';
import PetRegister from './containers/PetRegister';
import PetFilter from './containers/PetFilter';
import SuccessPetRegister from './components/SuccessPetRegister';
import AnimalFeed from './containers/AnimalFeed';
import FilterFailed from './components/FilterFailed';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    SignUp,
    Profile,
    Login,
    Main,
    NotRegistered,
    Feeds,
    PetRegister,
    PetFilter,
    SuccessPetRegister,
    FilterFailed,
    AnimalFeed,
    FinishProcess,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Main',
  },
));

export default Routes;
