import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, FieldText, MenuText,
  InfoText, ScrollContainer, 
  ButtonsView, NavButton
} from './style';

import { connect } from 'react-redux';


class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollContainer>
        <Container>
          <InfoText>NOME COMPLETO</InfoText>
          <FieldText>{ this.props.registration.full_name }</FieldText>
          
          <InfoText>IDADE</InfoText>          
          <FieldText>{ this.props.registration.age }</FieldText>
          
          <InfoText>EMAIL</InfoText>          
          <FieldText>{ this.props.registration.email }</FieldText>
          
          <InfoText>ESTADO</InfoText>          
          <FieldText>{ this.props.registration.city_state }</FieldText>
          
          <InfoText>CIDADE</InfoText>                    
          <FieldText>{ this.props.registration.city }</FieldText>
          
          <InfoText>ENDEREÇO</InfoText>                    
          <FieldText>{ this.props.registration.address }</FieldText>
          
          <InfoText>TELEFONE</InfoText>                    
          <FieldText>{ this.props.registration.phone }</FieldText>
          
          <InfoText>NOME DE USUÁRIO</InfoText>                    
          <FieldText>{ this.props.registration.username }</FieldText>
          
          <ButtonsView>
            <NavButton onPress={() => navigation.navigate('Main')}>
              <MenuText>
                PÁGINA PRINCIPAL
              </MenuText>
            </NavButton>
            <NavButton onPress={() => navigation.navigate('Register')}>
              <MenuText>
                EDITAR PERFIL
              </MenuText>
            </NavButton>
          </ButtonsView>
        
        </Container>
    </ScrollContainer>
    
    );
  }
}

const mapStateToProps = (state) => {
  const { registration } = state;
  return { registration };
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Profile);
