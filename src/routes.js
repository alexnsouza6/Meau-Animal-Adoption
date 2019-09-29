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
import Feed from './containers/Feeds';
import AnimalFeed from './containers/AnimalFeed';

const Routes = createAppContainer(createDrawerNavigator(
  {
    Loading,
    SignUp,
    Profile,
    Login,
    Main,
    Feed,
    NotRegistered,
    AnimalFeed,
    FinishProcess,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Main',
  },
));

export default Routes;
