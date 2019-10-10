import React, { useEffect, useState } from 'react';
import { AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import ScreenHeader from '../../components/ScreenHeader';

import {
  Container, FieldText, MenuText,
  InfoText, ScrollContainer,
  ButtonsView, NavButton,
} from './style';
import reactotron from 'reactotron-react-native';

const Profile = ({ navigation }) => {

  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('user');
      reactotron.log(user);
      if (user) {
        const userInfo = await firestore().collection('users').where('email', '==', user).get();
        setUser(userInfo.docs[0].data())
      } else {
        navigation.navigate('NotRegistered');
      }
    }
    getUser();
  }, []);

  return (
    <ScrollContainer>
      <ScreenHeader iconLeft="arrow-back" title={user.fullName} color="#cfe9e5" navigation={navigation} />
      <Container>
        <InfoText>NOME COMPLETO</InfoText>
        <FieldText>{ user.fullName }</FieldText>

        <InfoText>IDADE</InfoText>
        <FieldText>{ user.age }</FieldText>

        <InfoText>EMAIL</InfoText>
        <FieldText>{ user.email }</FieldText>

        <InfoText>LOCALIZAÇÃO</InfoText>
        <FieldText>{user.cityState}-{user.city}</FieldText>

        <InfoText>ENDEREÇO</InfoText>
        <FieldText>{ user.address }</FieldText>

        <InfoText>TELEFONE</InfoText>
        <FieldText>{ user.phone }</FieldText>

        <InfoText>NOME DE USUÁRIO</InfoText>
        <FieldText>{ user.username }</FieldText>

        <InfoText>HISTÓRICO</InfoText>
        <FieldText>{user.username}</FieldText>

        <ButtonsView>
          <NavButton onPress={() => navigation.navigate('Main')}>
            <MenuText>
              CHAT
            </MenuText>
          </NavButton>
          <NavButton onPress={() => navigation.navigate('SingUp')}>
            <MenuText>
              HISTÓRIAS
            </MenuText>
          </NavButton>
        </ButtonsView>

      </Container>
    </ScrollContainer>

  );
};


const mapStateToProps = (state) => {
  const { user } = state;
  return user;
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  // user: PropTypes.shape(
  //   {
  //     fullName: PropTypes.string,
  //     age: PropTypes.string,
  //     email: PropTypes.string,
  //     cityState: PropTypes.string,
  //     city: PropTypes.string,
  //     address: PropTypes.string,
  //     phone: PropTypes.string,
  //     username: PropTypes.string,
  //   },
  // ).isRequired,
};

export default connect(mapStateToProps)(Profile);
