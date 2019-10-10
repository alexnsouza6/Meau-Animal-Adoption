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
import MyPets from './containers/MyPets';
import SuccessAdoption from './components/SuccessAdoption';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    Main,
    Login,
    SignUp,
    NotRegistered,
    Profile,
    PetRegister,
    SuccessPetRegister,
    Feeds,
    AnimalFeed,
    PetFilter,
    FilterFailed,
    MyPets,
    FinishProcess,
    SuccessAdoption,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Main',
  },
));

export default Routes;
