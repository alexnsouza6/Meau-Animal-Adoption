import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import { NavigationEvents } from 'react-navigation';
import { FlatList, AsyncStorage } from 'react-native';
import reactotron from 'reactotron-react-native';
import ScreenHeader from '../../components/ScreenHeader';
import {
  Container, Title, FinishButton, ButtonText,
} from './style';

class FinishProcess extends Component {
  state = {
    checkedPet: [],
    checkedUser: [],
    pets: [],
    selectedPet: '',
    selectedUser: '',
    selectedPetInterest: [],
  }

  onCheckPetBoxPress = (index) => {
    const { checkedPet, pets } = this.state;
    const auxArray = [];
    checkedPet.forEach(() => {
      auxArray.push(false);
    });
    auxArray[index] = true;
    this.setState({ selectedPet: pets[index].id });
    this.setState({ selectedPetInterest: pets[index].object.interested });
    this.setState({ checkedPet: auxArray });
  }

  onCheckUserBoxPress = (index, email) => {
    const { checkedUser } = this.state;
    const auxArray = [];
    checkedUser.forEach(() => {
      auxArray.push(false);
    });
    auxArray[index] = true;
    this.setState({ selectedUser: email });
    this.setState({ checkedUser: auxArray });
  }

  retrieveInterest= async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      const myPetsCollection = await firestore().collection('pets').where('owner', '==', user).get();
      await this.setState({
        pets: myPetsCollection.docs.map((doc) => ({ id: doc.id, object: doc.data() })),
      });
      const { pets } = this.state;
      const auxArray = [];
      pets.forEach(() => auxArray.push(false));
      this.setState({ checkedPet: auxArray });
    } else {
      const { navigation } = this.props;
      navigation.navigate('NotRegistered');
    }
  }

  handleProcess = async () => {
    const { selectedPet, selectedUser } = this.state;
    const { navigation } = this.props;
    const petId = selectedPet;
    reactotron.log(selectedPet);
    const pet = await firestore().collection('pets').doc(petId).get();
    reactotron.log(pet);
    navigation.navigate('SuccessAdoption', {});
    await firestore().collection('pets').doc(petId).update({ owner: selectedUser });
  }

  render() {
    const { navigation } = this.props;
    const {
      checkedPet, pets, selectedPetInterest, checkedUser,
    } = this.state;
    return (
      <>
        <NavigationEvents onWillFocus={this.retrieveInterest} />
        <ScreenHeader title="Finalizar Processo" color="#ffd358" iconLeft="arrow-back" navigation={navigation} />
        <Container>
          <Title> Selecione o(s) animal(is)</Title>
          <FlatList
            data={pets}
            extraData={checkedPet}
            renderItem={({ item, index }) => (
              <CheckBox
                onPress={() => { this.onCheckPetBoxPress(index); }}
                title={item.object.name}
                checked={checkedPet[index]}
              />
            )}
          />
          <Title>QUAL PROCESSO FOI FORMALIZADO?</Title>
          <CheckBox
            title="Adoção"
            checkedPetIcon="dot-circle-o"
            checked
          />
          <Title>SELECIONE O USUÁRIO</Title>
          <FlatList
            data={selectedPetInterest}
            extraData={checkedUser}
            renderItem={({ item, index }) => (
              <CheckBox
                onPress={() => { this.onCheckUserBoxPress(index, item.email); }}
                title={item.fullName}
                checked={checkedUser[index]}
              />
            )}
          />
          <FinishButton onPress={this.handleProcess}>
            <ButtonText> Finalizar Processo </ButtonText>
          </FinishButton>
        </Container>
      </>
    );
  }
}

FinishProcess.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FinishProcess;
