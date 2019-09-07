import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../../config/firebase';
import '@react-native-firebase/auth';
import {
  Container, FieldText, ErrorText,
  DescriptionContainer, Description, InfoText,
  ImageButton, ScrollContainer, RegisterButton,
} from './style';

export default class Register extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  handleSignUp = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    const {
      name, age, email, state, city, address, phone, username, password, errorMessage,
    } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollContainer>
        <Container>
          <DescriptionContainer>
            <Description>As informações preenchidas
              serão divulgadas apenas para a pessoa com a qual
              você realizar o processo de adoção e/ou apadrinhamento,
              após a formalização do processo.
            </Description>
          </DescriptionContainer>

          <InfoText>INFORMAÇÕES PESSOAIS</InfoText>

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <FieldText
            placeholder="Nome completo"
            autoCapitalize="none"
            onChangeText={(name) => this.setState({ name })}
            value={name}
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
            onChangeText={(state) => this.setState({ state })}
            value={state}
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

          <RegisterButton onPress={() => { navigation.navigate('Main'); }} />
        </Container>
      </ScrollContainer>
    );
  }
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
