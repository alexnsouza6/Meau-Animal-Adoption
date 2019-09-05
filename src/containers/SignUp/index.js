import React from 'react';
import {
  Text, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from '../../config/firebase';
import '@react-native-firebase/auth';
import { Container, SignUpText, ErrorText } from './style';


export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    handleSignUp = () => {
      const { email, password } = this.state;
      const { navigation } = this.props;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Main'))
        .catch((error) => this.setState({ errorMessage: error.message }));
    }

    render() {
      const { email, password, errorMessage } = this.state;
      const { navigation } = this.props;
      return (
        <Container>
          <Text>Sign Up</Text>
          {errorMessage
          && (
          <ErrorText>
            {errorMessage}
          </ErrorText>
          )}
          <SignUpText
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
            value={email}
          />
          <SignUpText
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(password) => this.setState({ password })}
            value={password}
          />
          <Button title="Sign Up" onPress={this.handleSignUp} />
          <Button
            title="Already have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
        </Container>
      );
    }
}

SignUp.propTypes = {
  navigation: PropTypes.func.isRequired,
};
