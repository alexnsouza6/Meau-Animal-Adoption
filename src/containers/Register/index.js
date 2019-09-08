import React from 'react';
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import { addProfile } from '../../actions/index';

class Register extends React.Component {

  state = {
    full_name: '',
    age: '',
    email: '',
    city_state: '',
    city: '', 
    address: '',
    phone: '',
    username: '',
    password: ''
  };

  handleRegistration = () => {
    const { navigation } = this.props;
    this.props.addFields(this.state);
    return (navigation.navigate('Profile'));
  }

  render() {
    const {
      full_name, age, email, city_state, city, address, phone, username, password
    } = this.state;

    return (
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Nome Completo"
            style = { styles.placeInput }
            value = { full_name }
            onChangeText = {(full_name) => this.setState({ full_name })}
          ></TextInput>

          <TextInput
            placeholder = "Idade"
            style = { styles.placeInput }
            value = { age }
            onChangeText = {(age) => this.setState({ age })}
          ></TextInput>

          <TextInput
            placeholder = "E-mail"
            style = { styles.placeInput }
            value = { email }
            onChangeText = {(email) => this.setState({ email })}
          ></TextInput>

          <TextInput
            placeholder = "Estado"
            style = { styles.placeInput }
            value = { city_state }
            onChangeText = {(city_state) => this.setState({ city_state })}
          ></TextInput>

          <TextInput
            placeholder = "Cidade"
            style = { styles.placeInput }
            value = { city }
            onChangeText = {(city) => this.setState({ city })}
          ></TextInput>

          <TextInput
            placeholder = "Endereço"
            style = { styles.placeInput }
            value = { address }
            onChangeText = {(address) => this.setState({ address })}
          ></TextInput>

          <TextInput
            placeholder = "Telefone"
            style = { styles.placeInput }
            value = { phone }
            onChangeText = {(phone) => this.setState({ phone })}
          ></TextInput>

          <TextInput
            placeholder = "Nome de usuário"
            style = { styles.placeInput }
            value = { username }
            onChangeText = {(username) => this.setState({ username })}
          ></TextInput>

          <TextInput
            placeholder = "Password"
            style = { styles.placeInput }
            value = { password }
            onChangeText = {(password) => this.setState({ password })}
          ></TextInput>
          
          <Button title = 'Cadastrar' 
            style = { styles.placeButton }
            onPress={ this.handleRegistration }
          />
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});



const mapDispatchToProps = dispatch => {
  return {
    addFields: (fields) => {
      dispatch(addProfile(fields))
    }
  }
}

const mapStateToProps = state => {
  const { registration } = state;
  return { registration }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)