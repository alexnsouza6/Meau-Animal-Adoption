import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from './components/SideMenu';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
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
    AnimalFeed,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'Main',
  },
));

export default Routes;
