import React from 'react';
import { Button, Text } from 'react-native';

import firebase from '../../config/firebase';
import { Container } from './style';

import '@react-native-firebase/auth';

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Container>
        <Text>
            Hi {currentUser && currentUser.email}!
        </Text>
        { currentUser && (
        <Button
          title="Sign out"
          onPress={() => firebase.auth().signOut()}
        />
        ) }
      </Container>
    );
  }
}
