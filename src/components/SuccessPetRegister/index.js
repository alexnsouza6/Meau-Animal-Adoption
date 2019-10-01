
import React from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from '../ScreenHeader';
import {
  Container, Title, ButtonContainer, StandardButton, StandardText,
} from './style';

const text = 'O cadastro do seu pet foi realizado com sucesso!\n\nCertifique-se que permitiu o envio de\nnotificações por push no campo\nprivacidade do menu configurações do\naplicativo. Assim, poderemos te avisar assim que alguém interessado entrar\nem contato!';

const SuccessPetRegister = ({ navigation }) => (
  <>
    <ScreenHeader title="Cadastro do Animal" color="#ffd358" iconLeft="arrow-back" route="Feed" navigation={navigation} />
    <Container>
      <Title>
        Eba!
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

SuccessPetRegister.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SuccessPetRegister;
