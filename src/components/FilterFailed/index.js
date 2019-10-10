import React from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from '../ScreenHeader';
import {
  Container, Title, ButtonContainer, StandardButton, StandardText,
} from './styles';

const text = 'Infelizmente, não encontramos nenhum\nanimal com essas características em\nnosso aplicativo.\n\nMas não desista, pois temos lindos\nanimais cadastrados! Experimente\nalterar alguns filtros para encontrá-los.';

const FilterFailed = ({ navigation }) => (
  <>
    <ScreenHeader title="Adotar" color="#ffd358" iconLeft="arrow-back" iconRight="search" route="Feeds" navigation={navigation} />
    <Container>
      <Title>
        Ops!
      </Title>
      <ButtonContainer>
        <StandardText>
          {text}
        </StandardText>
        <StandardButton onPress={() => navigation.navigate('PetFilter')}>
          <StandardText>
          Editar Filtragem
          </StandardText>
        </StandardButton>
      </ButtonContainer>
    </Container>
  </>
);

FilterFailed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FilterFailed;
