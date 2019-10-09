import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import reactotron from 'reactotron-react-native';
import {
  FlatList,
} from 'react-native';
import {
  FeedContainer,
} from './style';


import PetFeed from '../../components/PetFeed';

import ScreenHeader from '../../components/ScreenHeader';

const Feeds = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPets() {
      const petsCollection = await firestore().collection('pets').get();
      return petsCollection.docs.map((doc) => doc.data());
    }

    getPets().then((pets) => {
      setPets(pets);
    });
  }, []);


  return (
    <>
      <ScreenHeader title="Adotar" color="#ffd358" iconRight="search" iconLeft="menu" navigation={navigation} />
      <FeedContainer>
        {pets.length ? (
          <FlatList
            data={pets}
            extraData={pets}
            renderItem={({ item }) => (
              <PetFeed pet={item} />
            )}
          />
        ) : null}
      </FeedContainer>
    </>
  );
};

Feeds.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Feeds;
