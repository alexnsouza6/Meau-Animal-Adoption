import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import {
  FlatList, AsyncStorage,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {
  FeedContainer,
} from './style';


import PetFeed from '../../components/PetFeed';

import ScreenHeader from '../../components/ScreenHeader';

const MyPets = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  async function fetchMyPets() {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      const myPetsCollection = await firestore().collection('pets').where('owner', '==', user).get();
      setPets(myPetsCollection.docs.map((doc) => ({ id: doc.id, object: doc.data() })));
    } else {
      navigation.navigate('NotRegistered');
    }
  }

  return (
    <>
      <NavigationEvents onWillFocus={fetchMyPets} />
      <ScreenHeader title="Meus Pets" color="#ffd358" iconRight="search" iconLeft="menu" navigation={navigation} />
      <FeedContainer>
        {pets.length ? (
          <FlatList
            data={pets}
            extraData={pets}
            renderItem={({ item }) => (
              <PetFeed pet={item} route="MyPets" />
            )}
          />
        ) : null}
      </FeedContainer>
    </>
  );
};

MyPets.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default MyPets;
