import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import reactotron from 'reactotron-react-native';
import { Text } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';


import {
  AnimalPhoto, InfoContainer, Title,
  InfoRow, AnimalInfo, Category,
  CategoryDescription, AdoptButton, AdoptText,
} from './style';

const AnimalFeed = ({ navigation, userIsLogged }) => {
  function onDonationPress() {
    if (userIsLogged) { navigation.navigate('NotRegistered'); } else { navigation.navigate('Feed'); }
  }
  const {
    // eslint-disable-next-line react/prop-types
    age, visit, health, diseases, name, about, sex, temper, size, adoptionReq,
  // eslint-disable-next-line react/prop-types
  } = navigation.state.params.pet;


  function formatString(array) {
    let fullString = '';
    // eslint-disable-next-line react/prop-types
    array.forEach((element) => {
      fullString += ` ${element}, `;
    });

    return fullString.substring(0, fullString.length - 2);
  }

  return (
    <>
      <ScreenHeader title={name} color="#ffd358" iconLeft="arrow-back" iconRight="share" route="Feed" navigation={navigation} />
      <AnimalPhoto source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/meau-app.appspot.com/o/-LdtxngUS2-V8UuEuipC?alt=media&token=fab66a80-df2b-442c-a579-f069ff2c3323' }} resizeMode="stretch" />
      <InfoContainer>
        <Title>{name}</Title>
        <InfoRow>
          <AnimalInfo>
            <Category>
              Sexo
            </Category>
            <CategoryDescription>
              {sex}
            </CategoryDescription>
          </AnimalInfo>
          <AnimalInfo>
            <Category>
              Porte
            </Category>
            <CategoryDescription>
              {size}
            </CategoryDescription>
          </AnimalInfo>
          <AnimalInfo>
            <Category>
            Idade
            </Category>
            <CategoryDescription>
              {age}
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
              { health.filter((item) => item === 'CASTRADO').length ? <Text>Sim</Text> : <Text>Não</Text> }
            </CategoryDescription>
          </AnimalInfo>
          <AnimalInfo>
            <Category>
              Vermifugado
            </Category>
            <CategoryDescription>
              { health.filter((item) => item === 'VERMIFUGADO').length ? <Text>Sim</Text> : <Text>Não</Text> }
            </CategoryDescription>
          </AnimalInfo>
        </InfoRow>
        <InfoRow>
          <AnimalInfo>
            <Category>
              Vacinado
            </Category>
            <CategoryDescription>
              { health.filter((item) => item === 'VACINADO').length ? <Text>Sim</Text> : <Text>Não</Text> }
            </CategoryDescription>
          </AnimalInfo>
          <AnimalInfo>
            <Category>
              Doenças
            </Category>
            <CategoryDescription>
              { diseases ? <Text>{diseases}</Text> : <Text>Nenhuma</Text> }
            </CategoryDescription>
          </AnimalInfo>
        </InfoRow>
        <AnimalInfo>
          <Category>
              Temperamento
          </Category>
          <CategoryDescription>
            { temper ? <Text>{formatString(temper)}</Text> : <Text>Não especificado</Text> }
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
              Exigências do doador
          </Category>
          <CategoryDescription>
            { adoptionReq
              ? (
                <Text>
                  {formatString(adoptionReq)},
                  acompanhamento durante {formatString(visit).toLowerCase()}
                </Text>
              )
              : <Text>Não especificado</Text>}
          </CategoryDescription>
        </AnimalInfo>
        <AnimalInfo>
          <Category>
              Mais sobre Bidu
          </Category>
          <CategoryDescription>
            {about}
          </CategoryDescription>
        </AnimalInfo>
        <AdoptButton onPress={onDonationPress}>
          <AdoptText>Pretendo adotar</AdoptText>
        </AdoptButton>
      </InfoContainer>
    </>
  );
};

AnimalFeed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  userIsLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userIsLogged: Object.entries(state.user).length === 0,
});

export default connect(mapStateToProps)(AnimalFeed);
