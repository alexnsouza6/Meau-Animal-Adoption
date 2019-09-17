import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, NavItem, FooterText,
  NavPetSection, NavSectionText, NavItemContainer,
  NavInfoSection, NavConfigSection, FooterContainer,
} from './style';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    const { navigation } = this.props;
    navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container>
        <ScrollView>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('Profile')}>
              <Text>Meu Perfil</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Meus Pets</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Favoritos</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Chat</Text>
            </NavItem>
          </NavItemContainer>

          <NavPetSection>
            <Icon name="pets" size={25} color="#757575" />
            <NavSectionText>
              Atalhos
            </NavSectionText>
          </NavPetSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Cadastrar um pet</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('Feed')}>
              <Text>Adotar um pet</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Ajudar um pet</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Apadrinhar um pet</Text>
            </NavItem>
          </NavItemContainer>

          <NavInfoSection>
            <Icon name="info" size={25} color="#757575" />
            <NavSectionText>
              Informações
            </NavSectionText>
          </NavInfoSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Dicas</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Eventos</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Legislação</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Termo de adoção</Text>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Histórias de adoção</Text>
            </NavItem>
          </NavItemContainer>

          <NavConfigSection>
            <Icon name="settings" size={25} color="#757575" />
            <NavSectionText>
              Configurações
            </NavSectionText>
          </NavConfigSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('#')}>
              <Text>Privacidade</Text>
            </NavItem>
          </NavItemContainer>

          <FooterContainer>
            <FooterText>Sair</FooterText>
          </FooterContainer>

        </ScrollView>
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default SideMenu;
