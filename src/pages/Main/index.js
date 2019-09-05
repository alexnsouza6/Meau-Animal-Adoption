import React from 'react';

import { Button } from 'react-native';
import {
  Container, Title, Description, DescriptionContainer, MenuButton, Menu,
} from './style';


import '@react-native-firebase/auth';

const Main = () => (
  <Container>
    <Title> Olá! </Title>
    <DescriptionContainer>
      <Description>Bem vindo ao Meau!</Description>
      <Description>Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.</Description>
      <Description>Qual o seu interesse?</Description>
    </DescriptionContainer>
    <Menu>
      <MenuButton> ADOTAR </MenuButton>
      <MenuButton> AJUDAR </MenuButton>
      <MenuButton> CADASTRAR ANIMAL</MenuButton>
    </Menu>
    <Button title="login" />
  </Container>
);

export default Main;
