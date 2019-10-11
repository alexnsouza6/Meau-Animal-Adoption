import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, AsyncStorage } from 'react-native';

import {
  Container, Title, Description,
  DescriptionContainer, MenuButton,
  Menu, MenuText, Logo, LoginButton,
  RegisterButton,
} from './style';

const meauImage = require('../../assets/images/Meau_marca_2.png');

class Main extends Component {
  state = {
    user: {},
  }

  async componentDidMount() {
    const asyncUser = await AsyncStorage.getItem('user');
    this.setState({ user: asyncUser });
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.state;
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
          <MenuButton onPress={() => { navigation.navigate('PetRegister'); }}>
            <MenuText>
                CADASTRAR ANIMAL
            </MenuText>
          </MenuButton>
        </Menu>
        {!user ? <LoginButton onPress={() => { navigation.navigate('Login'); }} /> : <View />}
        {!user ? <RegisterButton onPress={() => { navigation.navigate('SignUp'); }} /> : <View />}

        <Logo source={meauImage} />
      </Container>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userIsLogged: Object.entries(state.user).length !== 0,
});

export default connect(mapStateToProps)(Main);
