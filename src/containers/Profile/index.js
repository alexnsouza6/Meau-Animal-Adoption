import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  placeButton: {
    width: '30%',
  },
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
  },
});


class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Text style={styles.baseText}>{ this.props.registration.full_name }</Text>
          <Text style={styles.baseText}>{ this.props.registration.age }</Text>
          <Text style={styles.baseText}>{ this.props.registration.email }</Text>
          <Text style={styles.baseText}>{ this.props.registration.city_state }</Text>
          <Text style={styles.baseText}>{ this.props.registration.city }</Text>
          <Text style={styles.baseText}>{ this.props.registration.address }</Text>
          <Text style={styles.baseText}>{ this.props.registration.phone }</Text>
          <Text style={styles.baseText}>{ this.props.registration.username }</Text>
          <Text style={styles.baseText}>{ this.props.registration.password }</Text>
        </View>
        <Button
          title="Voltar"
          style={styles.placeButton}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { registration } = state;
  return { registration };
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Profile);
