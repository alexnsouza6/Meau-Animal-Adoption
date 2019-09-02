import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import firebase from '@react-native-firebase/app';
import { LoginContainer, LoginText, ErrorText } from './style';

import '@react-native-firebase/auth';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => this.setState({ errorMessage: error.message }));
  }

  render() {
    const { email, password, errorMessage } = this.state;
    const { navigation } = this.props;
    return (
      <LoginContainer>
        <Text>Login</Text>
        {errorMessage
          && (
          <ErrorText>
            {errorMessage}
          </ErrorText>
          )}
        <LoginText
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={email}
        />
        <LoginText
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </LoginContainer>
    );
  }
}


Login.propTypes = {
  navigation: PropTypes.func.isRequired,
};
