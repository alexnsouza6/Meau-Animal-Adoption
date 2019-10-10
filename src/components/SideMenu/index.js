import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, NavItem, FooterText, AvatarSection, IconTextSection,
  NavPetSection, NavSectionText, NavItemContainer,
  NavInfoSection, NavConfigSection, FooterContainer, NavItemText,
} from './style';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    const { navigation } = this.props;
    navigation.dispatch(navigateAction);
  }

  handleLogout = async () => {
    AsyncStorage.removeItem('user').then(
      this.navigateToScreen('Main'),
    );
  }

  render() {
    return (
      <Container>
        <ScrollView>

          <AvatarSection>
            <Avatar
              size={70}
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              activeOpacity={0.7}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{ marginLeft: 16, marginTop: 40, marginBottom: 68 }}
            />
          </AvatarSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('Profile')}>
              <NavItemText>Meu Perfil</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('MyPets')}>
              <NavItemText>Meus Pets</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Favoritos</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Chat</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('FinishProcess')}>
              <NavItemText>Finalizar Processo</NavItemText>
            </NavItem>
          </NavItemContainer>

          <NavPetSection>
            <IconTextSection>
              <Icon name="pets" size={25} color="#757575" />
              <NavSectionText>
                Atalhos
              </NavSectionText>
            </IconTextSection>
            <Icon name="arrow-drop-down" size={25} color="#757575" />
          </NavPetSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('PetRegister')}>
              <NavItemText>Cadastrar um pet</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('Feeds')}>
              <NavItemText>Adotar um pet</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Ajudar um pet</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Apadrinhar um pet</NavItemText>
            </NavItem>
          </NavItemContainer>

          <NavInfoSection>
            <IconTextSection>
              <Icon name="info" size={25} color="#757575" />
              <NavSectionText>
                Informações
              </NavSectionText>
            </IconTextSection>
            <Icon name="arrow-drop-down" size={25} color="#757575" />
          </NavInfoSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Dicas</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Eventos</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Legislação</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Termo de adoção</NavItemText>
            </NavItem>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Histórias de adoção</NavItemText>
            </NavItem>
          </NavItemContainer>

          <NavConfigSection>

            <IconTextSection>
              <Icon name="settings" size={25} color="#757575" />
              <NavSectionText>
                Configurações
              </NavSectionText>
            </IconTextSection>

            <Icon name="arrow-drop-down" size={25} color="#757575" />
          </NavConfigSection>

          <NavItemContainer>
            <NavItem onPress={this.navigateToScreen('#')}>
              <NavItemText>Privacidade</NavItemText>
            </NavItem>
          </NavItemContainer>

          <FooterContainer onPress={this.handleLogout}>
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
