
import React from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from '../ScreenHeader';
import {
  Container, Title, ButtonContainer, StandardButton, StandardText,
} from './style';

const text = 'Ficamos felizes com o sucesso\ndo seu processo! Esperamos que o\nbichinho esteja curtindo muito essa\nnova experiência! \n\nAgora, que tal compartilhar a história\ndo (nome do animal) com todos os outros\nmembros do Meau?';
const SuccessAdoption = ({ navigation }) => (
  <>
    <ScreenHeader title="Finalizar processo" color="#ffd358" iconLeft="arrow-back" route="Main" navigation={navigation} />
    <Container>
      <Title>
        Oba!
      </Title>
      <ButtonContainer>
        <StandardText>
          {text}
        </StandardText>
        <StandardButton onPress={() => navigation.navigate('Main')}>
          <StandardText>
          Início
          </StandardText>
        </StandardButton>
      </ButtonContainer>
    </Container>
  </>
);

SuccessAdoption.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SuccessAdoption;
