import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import reactotron from 'reactotron-react-native';
import firebase from '../../config/firebase';
import '@react-native-firebase/auth';
import { addProfile } from '../../actions/user/index';
import ScreenHeader from '../../components/ScreenHeader';

import {
  Container, FieldText,
  DescriptionContainer, Description, InfoText,
  ImageButton, ScrollContainer, RegisterButton,
} from './style';


class SignUp extends React.Component {
  state = {
    fullName: '',
    age: '',
    email: '',
    city: '',
    cityState: '',
    address: '',
    phone: '',
    username: '',
    password: '',
  };


  handleUser = () => {
    const { navigation, dispatch } = this.props;

    const { email, password } = this.state;


    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        reactotron.log(this.state);
        dispatch(addProfile(this.state));
        navigation.navigate('Main');
      })
      .catch((error) => {
        reactotron.log({ error });
      });
  }

  render() {
    const {
      fullName, age, email, cityState, city, address, phone, username, password,
    } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollContainer>
        <ScreenHeader title="Registrar" color="#ffd358" navigation={navigation} />
        <Container>
          <DescriptionContainer>
            <Description>As informações preenchidas
                serão divulgadas apenas para a pessoa com a qual
                você realizar o processo de adoção e/ou apadrinhamento,
                após a formalização do processo.
            </Description>
          </DescriptionContainer>

          <InfoText>INFORMAÇÕES PESSOAIS</InfoText>

          <FieldText
            placeholder="Nome completo"
            autoCapitalize="none"
            onChangeText={(fullName) => this.setState({ fullName })}
            value={fullName}
          />
          <FieldText
            placeholder="Idade"
            autoCapitalize="none"
            onChangeText={(age) => this.setState({ age })}
            value={age}
          />
          <FieldText
            placeholder="E-mail"
            autoCapitalize="none"
            onChangeText={(email) => this.setState({ email })}
            value={email}
          />
          <FieldText
            placeholder="Estado"
            autoCapitalize="none"
            onChangeText={(cityState) => this.setState({ cityState })}
            value={cityState}
          />
          <FieldText
            placeholder="Cidade"
            autoCapitalize="none"
            onChangeText={(city) => this.setState({ city })}
            value={city}
          />
          <FieldText
            placeholder="Endereço"
            autoCapitalize="none"
            onChangeText={(address) => this.setState({ address })}
            value={address}
          />
          <FieldText
            placeholder="Telefone"
            autoCapitalize="none"
            onChangeText={(phone) => this.setState({ phone })}
            value={phone}
          />
          <InfoText>INFORMAÇÕES DE PERFIL</InfoText>
          <FieldText
            placeholder="Nome de usuário"
            autoCapitalize="none"
            onChangeText={(username) => this.setState({ username })}
            value={username}
          />
          <FieldText
            secureTextEntry
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={(password) => this.setState({ password })}
            value={password}
          />
          <InfoText>FOTO DE PERFIL</InfoText>

          <ImageButton>
            <Description>adicionar foto</Description>
          </ImageButton>

          <RegisterButton onPress={this.handleUser} />
        </Container>
      </ScrollContainer>
    );
  }
}


const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(SignUp);
