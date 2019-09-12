import React from 'react';
import { Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/Zocial';

import { GoogleSignin } from 'react-native-google-signin';
import firebase from '../../config/firebase';
import {
  LoginContainer, ErrorText, UserNameInput,
  PasswordInput, SignInButton, SignInText,
} from './style';

import '@react-native-firebase/auth';
import ScreenHeader from '../../components/ScreenHeader';


export default class Login extends React.Component {
  state = {
    email: '', password: '', errorMessage: null, logged: false,
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
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
        <ScreenHeader title="Login" color="#88c9bf" />
        <LoginContainer>
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <UserNameInput
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            value={email}
          />
          <PasswordInput
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={password}
          />

          <SignInButton onPress={this.handleLogin}>
            <SignInText> Entrar </SignInText>
          </SignInButton>
          <View>
            <LoginButton
              onLoginFinished={
            (error, result) => {
              if (!error && !result.isCancelled) {
                AccessToken.getCurrentAccessToken().then(
                  () => {
                    navigation.navigate('Main');
                  },
                );
              }
            }
          }
            />
          </View>
          <Icon.Button name="googleplus" backgroundColor="#f15f5c" onPress={logged ? this.signOut : this.signIn}>
            <Text>
              {logged ? 'Logout Google' : 'Login Google'}
            </Text>
          </Icon.Button>
          <Button
            title="Don't have an account? Sign Up"
            onPress={() => navigation.navigate('SignUp')}
          />
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
