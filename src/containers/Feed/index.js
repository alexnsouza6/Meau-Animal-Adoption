import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import {
  FeedContainer, FeedBody, FeedHeader, FeedImage, Info, AnimalName, AnimalInfo, AnimalAddress, Feed,
} from './style';

import ScreenHeader from '../../components/ScreenHeader';

const Feeds = () => (
  <>
    <ScreenHeader title="Adotar" color="#ffd358" />
    <FeedContainer>
      <Feed>
        <FeedHeader>
          <AnimalName>
            Pequi
          </AnimalName>
          <TouchableOpacity>
            <Icon name="hearto" size={20} />
          </TouchableOpacity>
        </FeedHeader>
        <FeedImage source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
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
      </Feed>
      <Feed>
        <FeedHeader>
          <AnimalName>
            Pequi
          </AnimalName>
          <TouchableOpacity>
            <Icon name="hearto" size={20} />
          </TouchableOpacity>
        </FeedHeader>
        <FeedImage source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
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
      </Feed>
      <Feed>
        <FeedHeader>
          <AnimalName>
            Pequi
          </AnimalName>
          <TouchableOpacity>
            <Icon name="hearto" size={20} />
          </TouchableOpacity>
        </FeedHeader>
        <FeedImage source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
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
      </Feed>
    </FeedContainer>
  </>
);

export default Feeds;
