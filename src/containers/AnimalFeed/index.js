import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AsyncStorage, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ScreenHeader from '../../components/ScreenHeader';


import {
  AnimalPhoto, InfoContainer, Title,
  InfoRow, AnimalInfo, Category,
  CategoryDescription, AdoptButton, AdoptText,
} from './style';

const AnimalFeed = ({ navigation }) => {
  const {
    age, visit, health, diseases, name, about, sex, temper, size, adoptionReq,
  } = navigation.state.params.pet.object;
  const { route } = navigation.state.params;

  async function onAdoptPress() {
    const petId = navigation.state.params.pet.id;
    const user = await AsyncStorage.getItem('user');
    if (user) {
      const pet = await firestore().collection('pets').doc(petId).get();
      const { interested } = pet.data();
      interested.push(user);
      await firestore().collection('pets').doc(petId).update({ interested });
      navigation.navigate('Feeds');
    } else {
      navigation.navigate('NotRegistered');
    }
  }


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
      <ScreenHeader title={name} color="#ffd358" iconLeft="arrow-back" iconRight="share" route={route} navigation={navigation} />
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
        <AdoptButton onPress={onAdoptPress}>
          <AdoptText>Pretendo adotar</AdoptText>
        </AdoptButton>
      </InfoContainer>
    </>
  );
};

AnimalFeed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userIsLogged: Object.entries(state.user).length === 0,
});

export default connect(mapStateToProps)(AnimalFeed);
