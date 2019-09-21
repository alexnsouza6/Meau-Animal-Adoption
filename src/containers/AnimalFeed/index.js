import React from 'react';
import PropTypes from 'prop-types';

import ScreenHeader from '../../components/ScreenHeader';

import {
  AnimalPhoto, InfoContainer, Title,
  InfoRow, AnimalInfo, Category,
  CategoryDescription, AdoptButton, AdoptText,
} from './style';

const AnimalFeed = ({ navigation }) => (
  <>
    <ScreenHeader title="Bidu" color="#ffd358" iconLeft="arrow-back" iconRight="share" route="Feed" navigation={navigation} />
    <AnimalPhoto source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
    <InfoContainer>
      <Title>Bidu</Title>
      <InfoRow>
        <AnimalInfo>
          <Category>
              Sexo
          </Category>
          <CategoryDescription>
            Macho
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
              Porte
          </Category>
          <CategoryDescription>
            Médio
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
            Idade
          </Category>
          <CategoryDescription>
            Adulto
          </CategoryDescription>
        </AnimalInfo>
      </InfoRow>
      <AnimalInfo>
        <Category>
              Localização
        </Category>
        <CategoryDescription>
            Samambaia Sul - Distrito Federal
        </CategoryDescription>
      </AnimalInfo>
      <InfoRow>
        <AnimalInfo>
          <Category>
              Castrado
          </Category>
          <CategoryDescription>
            Não
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
              Idade
          </Category>
          <CategoryDescription>
            Adulto
          </CategoryDescription>
        </AnimalInfo>
      </InfoRow>
      <InfoRow>
        <AnimalInfo>
          <Category>
              Vacinado
          </Category>
          <CategoryDescription>
            Não
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
              Doenças
          </Category>
          <CategoryDescription>
            Nenhuma
          </CategoryDescription>
        </AnimalInfo>
      </InfoRow>
      <AnimalInfo>
        <Category>
              Temperamento
        </Category>
        <CategoryDescription>
            Calmo e dócio
        </CategoryDescription>
      </AnimalInfo>
      <AnimalInfo>
        <Category>
              Exigências do doador
        </Category>
        <CategoryDescription>
            Termo de adoção, fotos de casa, visita prévia e acompanhamento durante três meses
        </CategoryDescription>
      </AnimalInfo>
      <AnimalInfo>
        <Category>
              Mais sobre Bidu
        </Category>
        <CategoryDescription>
            Lorem Ipsum
        </CategoryDescription>
      </AnimalInfo>
      <AdoptButton>
        <AdoptText>Pretendo adotar</AdoptText>
      </AdoptButton>
    </InfoContainer>
  </>
);

AnimalFeed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default AnimalFeed;
