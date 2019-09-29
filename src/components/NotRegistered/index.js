import React from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from '../ScreenHeader';
import {
  Container, Title, ButtonContainer, StandardButton, StandardText,
} from './style';

const text = 'Você não pode realizar esta ação sem\npossuir um cadastro';

const NotRegistered = ({ navigation }) => (
  <>
    <ScreenHeader title="Cadastro" color="#88c9bf" iconLeft="arrow-back" route="Feed" navigation={navigation} />
    <Container>
      <Title>
        Ops!
      </Title>
      <ButtonContainer>
        <StandardText>
          {text}
        </StandardText>
        <StandardButton onPress={() => navigation.navigate('SignUp')}>
          <StandardText>
          Fazer Cadastro
          </StandardText>
        </StandardButton>
        <StandardText>
          Já possui cadastro?
        </StandardText>
        <StandardButton onPress={() => navigation.navigate('Login')}>
          <StandardText>
          Fazer login
          </StandardText>
        </StandardButton>
      </ButtonContainer>
    </Container>
  </>
);

NotRegistered.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotRegistered;
