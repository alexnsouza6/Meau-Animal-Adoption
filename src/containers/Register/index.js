import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProfile } from '../../actions/index';
import {
  Container, FieldText,
  DescriptionContainer, Description, InfoText,
  ImageButton, ScrollContainer, RegisterButton,
} from './style';


class Register extends React.Component {

  state = this.props.registration;


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

            <FieldText
              placeholder="Nome completo"
              autoCapitalize="none"
              onChangeText={(full_name) => this.setState({ full_name })}
              value={full_name}
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
              onChangeText={(city_state) => this.setState({ city_state })}
              value={city_state}
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

            <RegisterButton onPress={ this.handleRegistration } />
          </Container>
        </ScrollContainer>
        );   
    }
  }

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

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Register)