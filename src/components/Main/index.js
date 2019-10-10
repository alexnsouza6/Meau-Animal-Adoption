import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, View } from 'react-native';

import {
  Container, Title, Description,
  DescriptionContainer, MenuButton,
  Menu, MenuText, Logo, LoginButton,
  RegisterButton,
} from './style';

const meauImage = require('../../assets/images/Meau_marca_2.png');

const Main = ({ navigation }) => {

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function checkLogged() {
      const userIsLogged = await AsyncStorage.getItem('user');
      userIsLogged ? setLogged(true) : setLogged(false);
    }
    checkLogged();
  }, []);

  async function checkLoggedUser() {
    if (logged) { navigation.navigate('PetRegister'); } else { navigation.navigate('NotRegistered'); }
  }

  return (
    <Container>
      <Title> Olá! </Title>
      <DescriptionContainer>
        <Description>Bem vindo ao Meau!</Description>
        <Description>Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.</Description>
        <Description>Qual o seu interesse?</Description>
      </DescriptionContainer>
      <Menu>
        <MenuButton onPress={() => { navigation.navigate('Feeds'); }}>
          <MenuText>
              ADOTAR
          </MenuText>
        </MenuButton>
        <MenuButton onPress={() => { checkLoggedUser(); }}>
          <MenuText>
              CADASTRAR ANIMAL
          </MenuText>
        </MenuButton>
      </Menu>
      {!logged ? <LoginButton onPress={() => { navigation.navigate('Login'); }} /> : <View />}
      {!logged ? <RegisterButton onPress={() => { navigation.navigate('SignUp'); }} /> : <View />}

      <Logo source={meauImage} />
    </Container>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
