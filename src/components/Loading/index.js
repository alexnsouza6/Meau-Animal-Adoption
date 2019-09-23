import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import { Spinner } from './style';

export default class Loading extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }

  render() {
    return (
      <Spinner>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </Spinner>
    );
  }
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
