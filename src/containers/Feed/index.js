import React from 'react';
import { Text } from 'react-native';
import {
  FeedContainer, FeedBody, FeedHeader, FeedImage, Info, AnimalName, AnimalInfo, AnimalAddress,
} from './style';

import ScreenHeader from '../../components/ScreenHeader';

const Feed = () => (
  <>
    <ScreenHeader title="Adotar" />
    <FeedContainer>
      <FeedHeader>
        <AnimalName>
          Pequi
        </AnimalName>
        <Text>
          ❤️
        </Text>
      </FeedHeader>
      <FeedImage source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} />
      <FeedBody>
        <AnimalInfo>
          <Info>
            MACHO
          </Info>
          <Info>
            ADULTO
          </Info>
          <Info>
            MÉDIO
          </Info>
        </AnimalInfo>
        <AnimalAddress>
          <Info>
            SAMAMABAIA SUL - DISTRITO FEDERAL
          </Info>
        </AnimalAddress>
      </FeedBody>
    </FeedContainer>
  </>
);

export default Feed;
