import React from 'react';
import {
  AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/Zocial';

import { GoogleSignin } from 'react-native-google-signin';
import firebase from '../../config/firebase';
import {
  LoginContainer, ErrorText, SignInButton, SignInText, TxtInput, GoogleButton, GoogleText, FacebookButton
} from './style';

import '@react-native-firebase/auth';
import ScreenHeader from '../../components/ScreenHeader';


export default class Login extends React.Component {
  state = {
    email: '', password: '', errorMessage: null, logged: false,
  };

  handleFacebookLogin() {
    LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (!error && !result.isCancelled) {
          AccessToken.getCurrentAccessToken().then(
            () => {
              navigation.navigate('Main');
            },
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        await AsyncStorage.setItem('user', email);
        navigation.navigate('Main');
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  isSignedIn = async () => {
    await GoogleSignin.configure({
      webClientId: '821505612282-9qgadrsvbv8pqivpv8idur6mqkdmft8t.apps.googleusercontent.com', // required
    });
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ logged: isSignedIn });
  };

  signIn = async () => {
    const { navigation } = this.props;

    await GoogleSignin.hasPlayServices();
    GoogleSignin.signIn().then(() => navigation.navigate('Main'));
    this.setState({ logged: true });
  };

  signOut = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.setState({ logged: false }); // Remember to remove the user from your app's state as well
  };


  render() {
    const {
      email, password, errorMessage, logged,
    } = this.state;
    const { navigation } = this.props;

    this.isSignedIn();
    return (
      <>
        <ScreenHeader title="Login" color="#ffd358" iconRight="search" iconLeft="menu" navigation={navigation} />
        <LoginContainer>
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <TxtInput
            onChangeText={(email) => this.setState({ email })}
            value={email}
            placeholder="Email"
          />
          <TxtInput
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            value={password}
            placeholder="Password"
          />

          <SignInButton onPress={this.handleLogin}>
            <SignInText> Entrar </SignInText>
          </SignInButton>

          <GoogleButton onPress={logged ? this.signOut : this.signIn} >
            <Icon name="googleplus" color="#f7f7f7"/>
            <GoogleText> ENTRAR COM GOOGLE </GoogleText>
          </GoogleButton>

          <FacebookButton onPress={logged ? this.signOut : this.handleFacebookLogin} >
            <Icon name="facebook" color="#f7f7f7"/>
            <GoogleText> ENTRAR COM FACEBOOK </GoogleText>
          </FacebookButton>

        </LoginContainer>
      </>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
