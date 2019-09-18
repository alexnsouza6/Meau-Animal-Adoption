import React from 'react';

import PropTypes from 'prop-types';

import {
  Container, Title, Description,
  DescriptionContainer, MenuButton,
  Menu, MenuText, Logo, LoginButton,
  RegisterButton,
} from './style';

const meauImage = require('../../assets/images/Meau_marca_2.png');

const Main = ({ navigation }) => (
  <Container>
    <Title> Olá! </Title>
    <DescriptionContainer>
      <Description>Bem vindo ao Meau!</Description>
      <Description>Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.</Description>
      <Description>Qual o seu interesse?</Description>
    </DescriptionContainer>
    <Menu>
      <MenuButton onPress={() => { navigation.navigate('Feed'); }}>
        <MenuText>
          ADOTAR
        </MenuText>
      </MenuButton>
      <MenuButton>
        <MenuText>
          AJUDAR
        </MenuText>
      </MenuButton>
      <MenuButton onPress={() => { navigation.navigate('PetRegister'); }}>
        <MenuText>
          CADASTRAR ANIMAL
        </MenuText>
      </MenuButton>
      <MenuButton onPress={() => { navigation.navigate('PetFilter'); }}>
        <MenuText>
          FILTRAR ANIMAL
        </MenuText>
      </MenuButton>
    </Menu>
    <LoginButton onPress={() => { navigation.navigate('Login'); }} />
    <RegisterButton onPress={() => { navigation.navigate('Register'); }} />

    <Logo source={meauImage} />
  </Container>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default Main;
