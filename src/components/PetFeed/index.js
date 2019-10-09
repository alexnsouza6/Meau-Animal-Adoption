import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { TouchableOpacity } from 'react-native';
import reactotron from 'reactotron-react-native';
import {
  FeedBody, FeedHeader, FeedImage, Info, AnimalName, AnimalInfo, AnimalAddress, Feed,
} from './style';

const PetFeed = ({ pet, navigation }) => {
  const {
    name, age, size, sex,
  } = pet;

  return (
    <Feed onPress={() => navigation.navigate('AnimalFeed', { pet })}>
      <FeedHeader>
        <AnimalName>
          {name}
        </AnimalName>
        <TouchableOpacity>
          <Icon name="hearto" size={20} />
        </TouchableOpacity>
      </FeedHeader>
      <FeedImage source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
      <FeedBody>
        <AnimalInfo>
          <Info>
            {sex}
          </Info>
          <Info>
            {age}
          </Info>
          <Info>
            {size}
          </Info>
        </AnimalInfo>
        <AnimalAddress>
          <Info>
              SAMAMABAIA SUL - DISTRITO FEDERAL
          </Info>
        </AnimalAddress>
      </FeedBody>
    </Feed>
  );
};

PetFeed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  pet: PropTypes.isRequired,
};

export default withNavigation(PetFeed);
