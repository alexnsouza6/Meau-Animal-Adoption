import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  Container, FieldText, MenuText,
  InfoText, ScrollContainer,
  ButtonsView, NavButton,
} from './style';


const Profile = ({ user, navigation }) => {
  const {
    fullName, age, email, cityState, city, address, phone, username,
  } = user;

  return (
    <ScrollContainer>
      <Container>
        <InfoText>NOME COMPLETO</InfoText>
        <FieldText>{ fullName }</FieldText>

        <InfoText>IDADE</InfoText>
        <FieldText>{ age }</FieldText>

        <InfoText>EMAIL</InfoText>
        <FieldText>{ email }</FieldText>

        <InfoText>ESTADO</InfoText>
        <FieldText>{ cityState }</FieldText>

        <InfoText>CIDADE</InfoText>
        <FieldText>{ city }</FieldText>

        <InfoText>ENDEREÇO</InfoText>
        <FieldText>{ address }</FieldText>

        <InfoText>TELEFONE</InfoText>
        <FieldText>{ phone }</FieldText>

        <InfoText>NOME DE USUÁRIO</InfoText>
        <FieldText>{ username }</FieldText>

        <ButtonsView>
          <NavButton onPress={() => navigation.navigate('Main')}>
            <MenuText>
                PÁGINA PRINCIPAL
            </MenuText>
          </NavButton>
          <NavButton onPress={() => navigation.navigate('Register')}>
            <MenuText>
                EDITAR PERFIL
            </MenuText>
          </NavButton>
        </ButtonsView>

      </Container>
    </ScrollContainer>

  );
};


const mapStateToProps = (state) => {
  const { user } = state;
  return user;
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape(
    {
      fullName: PropTypes.string,
      age: PropTypes.string,
      email: PropTypes.string,
      cityState: PropTypes.string,
      city: PropTypes.string,
      address: PropTypes.string,
      phone: PropTypes.string,
      username: PropTypes.string,
    },
  ).isRequired,
};

export default connect(mapStateToProps)(Profile);
