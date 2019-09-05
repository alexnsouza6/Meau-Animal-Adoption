import React from 'react';

import {
  Container, Title, Description,
  DescriptionContainer, MenuButton,
  Menu, MenuText, Logo, LoginButton,
} from './style';

import '@react-native-firebase/auth';

const meauImage = require('../../assets/images/Meau_marca_2.png');

const Main = () => (
  <Container>
    <Title> Olá! </Title>
    <DescriptionContainer>
      <Description>Bem vindo ao Meau!</Description>
      <Description>Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.</Description>
      <Description>Qual o seu interesse?</Description>
    </DescriptionContainer>
    <Menu>
      <MenuButton>
        <MenuText>
          ADOTAR
        </MenuText>
      </MenuButton>
      <MenuButton>
        <MenuText>
          AJUDAR
        </MenuText>
      </MenuButton>
      <MenuButton>
        <MenuText>
          CADASTRAR ANIMAL
        </MenuText>
      </MenuButton>
    </Menu>
    <LoginButton title="login" />
    <Logo source={meauImage} />
  </Container>
);

export default Main;
