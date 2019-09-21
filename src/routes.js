import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './components/Main';
import Loading from './components/Loading';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Login from './containers/Login';
import Feed from './containers/Feeds';
import AnimalFeed from './containers/AnimalFeed';

const Routes = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Register,
    Profile,
    Login,
    Main,
    Feed,
    AnimalFeed,
  },
  {
    initialRouteName: 'Main',
  },
));

export default Routes;
