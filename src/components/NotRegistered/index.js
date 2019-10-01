import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Title, ButtonContainer, StandardButton, StandardText,
} from './style';

const NotRegistered = ({ navigation }) => (
  <Container>
    <Title>
        Ops!
    </Title>
    <ButtonContainer>
      <StandardText>
          Você não pode realizer esta ação sem possuir um cadastro
      </StandardText>
      <StandardButton onPress={() => navigation.navigate('SignUp')}>
          Fazer Cadastro
      </StandardButton>
      <StandardText>
          Já possui cadastro?
      </StandardText>
      <StandardButton onPress={() => navigation.navigate('Login')}>
          Fazer login
      </StandardButton>
    </ButtonContainer>
  </Container>
);

NotRegistered.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotRegistered;
