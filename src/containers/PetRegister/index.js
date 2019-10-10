import React from 'react';
import { StatusBar, Text, AsyncStorage } from 'react-native';

import {
  CheckBox,
  Button,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import reactotron from 'reactotron-react-native';

import {
  Column, Row, BodyContainer, BaseText, ScrollContainer, AdoptButton,
  HelpButton, PatronizeButton, TopButtonsContainer, AdoptionText, SectionText, TxtInput,
  CheckboxContainer, ImageButton, AdoptionBtn, ImageButtonStyle, VisitTimeContainer,
  CheckboxText, BtnContainer, PatronizeText, AdoptionButtonText, VisitTimeText,
} from './style';

class PetRegister extends React.Component {
  state = {
    specie: [true, false],
    sex: [true, false],
    size: [true, false, false],
    age: [true, false, false],
    temper: [false, false, false, false, false, false],
    health: [false, false, false, false],
    adoptionReq: [false, false, false, false],
    visit: [false, false, false],
    name: '',
    diseases: '',
    about: '',
  };


  formatData = () => {
    const {
      temper, health, adoptionReq, visit, about,
      name, specie, sex, size, age, diseases,
    } = this.state;

    const petObject = {
      name,
      sex: (sex[0] ? 'MACHO' : 'FEMEA'),
      specie: (specie[0] ? 'CACHORRO' : 'GATO'),
      size: '',
      age: '',
      health: [],
      temper: [],
      visit: [],
      adoptionReq: [],
      diseases,
      about,
      owner: '',
      interested: [],
    };

    if (size[0]) {
      petObject.size = 'PEQUENO';
    } else if (size[1]) {
      petObject.size = 'MEDIO';
    } else {
      petObject.size = 'GRANDE';
    }

    if (age[0]) {
      petObject.age = 'FILHOTE';
    } else if (age[1]) {
      petObject.age = 'ADULTO';
    } else {
      petObject.age = 'IDOSO';
    }

    if (health[0]) {
      petObject.health.push('VACINADO');
    }
    if (health[1]) {
      petObject.health.push('VERMIFUGADO');
    }
    if (health[2]) {
      petObject.health.push('CASTRADO');
    }
    if (health[3]) {
      petObject.health.push('DOENTE');
    }

    if (temper[0]) {
      petObject.temper.push('BRINCALHAO');
    }
    if (temper[1]) {
      petObject.temper.push('TIMIDO');
    }
    if (temper[2]) {
      petObject.temper.push('CALMO');
    }
    if (temper[3]) {
      petObject.temper.push('GUARDA');
    }
    if (temper[4]) {
      petObject.temper.push('AMOROSO');
    }
    if (temper[5]) {
      petObject.temper.push('PREGUIÇOSO');
    }

    if (visit[0]) {
      petObject.visit.push('1 MES');
    }
    if (visit[1]) {
      petObject.visit.push('3 MESES');
    }
    if (visit[2]) {
      petObject.visit.push('6 MESES');
    }

    if (adoptionReq[0]) {
      petObject.adoptionReq.push('Termo de adoção');
    }
    if (adoptionReq[1]) {
      petObject.adoptionReq.push('Fotos da casa');
    }
    if (adoptionReq[2]) {
      petObject.adoptionReq.push('Visita prévia ao animal');
    }
    if (adoptionReq[3]) {
      petObject.adoptionReq.push('Acompanhamento pós-adoção');
    }

    return petObject;
  }

  handleSubmit = async () => {
    const { adoptionReq } = this.state;
    const { navigation } = this.props;

    if (!adoptionReq[3]) {
      await this.setState({ visit: [false, false, false] });
    }

    const petObject = this.formatData();

    const petRef = firestore().collection('pets');
    const userIsLogged = await AsyncStorage.getItem('user');
    petObject.owner = userIsLogged;
    await petRef.add(petObject);
    navigation.navigate('SuccessPetRegister');
  }

  render() {
    const {
      temper, health, adoptionReq, visit, about,
      name, specie, sex, size, age, diseases,
    } = this.state;
    return (
      <>
        <StatusBar backgroundColor="#f7a800" />
        <BodyContainer>
          <ScrollContainer>
            <BaseText>
              Tenho interesse em cadastrar um animal para:
            </BaseText>
            <TopButtonsContainer>

              <AdoptButton>
                <Text>ADOÇÃO</Text>
              </AdoptButton>

              <PatronizeButton>
                <PatronizeText>APADRINHAR</PatronizeText>
              </PatronizeButton>

              <HelpButton>
                <Text>AJUDA</Text>
              </HelpButton>

            </TopButtonsContainer>

            <AdoptionText>
              Adoção
            </AdoptionText>

            <SectionText>
              NOME DO ANIMAL
            </SectionText>

            <TxtInput
              onChangeText={(name) => this.setState({ name })}
              value={name}
              placeholder="Nome do animal"
            />

            <SectionText>
              FOTOS DO ANIMAL
            </SectionText>

            <ImageButton>
              <Button
                buttonStyle={ImageButtonStyle}
                icon={(<Icon name="plus-circle" size={24} color="#757575" />)}
              />
              <Text>adicionar fotos</Text>
            </ImageButton>

            <SectionText>
              ESPÉCIE
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Cachorro"
                  checked={specie[0]}
                  onPress={() => this.setState({ specie: [true, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Gato"
                  checked={specie[1]}
                  onPress={() => this.setState({ specie: [false, true] })}
                />
              </Column>
              <Column />


            </Row>

            <SectionText>
              SEXO
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Macho"
                  checked={sex[0]}
                  onPress={() => this.setState({ sex: [true, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Fêmea"
                  checked={sex[1]}
                  onPress={() => this.setState({ sex: [false, true] })}
                />
              </Column>
              <Column />

            </Row>

            <SectionText>
              PORTE
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Pequeno"
                  checked={size[0]}
                  onPress={() => this.setState({ size: [true, false, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Médio"
                  checked={size[1]}
                  onPress={() => this.setState({ size: [false, true, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Grande"
                  checked={size[2]}
                  onPress={() => this.setState({ size: [false, false, true] })}
                />
              </Column>
            </Row>

            <SectionText>
              IDADE
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Filhote"
                  checked={age[0]}
                  onPress={() => this.setState({ age: [true, false, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Adulto"
                  checked={age[1]}
                  onPress={() => this.setState({ age: [false, true, false] })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Idoso"
                  checked={age[2]}
                  onPress={() => this.setState({ age: [false, false, true] })}
                />
              </Column>
            </Row>

            <SectionText>
              TEMPERAMENTO
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Brincalhão"
                  checked={temper[0]}
                  onPress={() => this.setState({
                    temper: [!temper[0], temper[1],
                      temper[2], temper[3], temper[4], temper[5]],
                  })}

                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Tímido"
                  checked={temper[1]}
                  onPress={() => this.setState({
                    temper: [temper[0], !temper[1],
                      temper[2], temper[3], temper[4], temper[5]],
                  })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Calmo"
                  checked={temper[2]}
                  onPress={() => this.setState({
                    temper: [temper[0], temper[1],
                      !temper[2], temper[3], temper[4], temper[5]],
                  })}
                />
              </Column>
            </Row>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Guarda"
                  checked={temper[3]}
                  onPress={() => this.setState({
                    temper: [temper[0], temper[1],
                      temper[2], !temper[3], temper[4], temper[5]],
                  })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Amoroso"
                  checked={temper[4]}
                  onPress={() => this.setState({
                    temper: [temper[0], temper[1],
                      temper[2], temper[3], !temper[4], temper[5]],
                  })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Preguiça"
                  checked={temper[5]}
                  onPress={() => this.setState({
                    temper: [temper[0], temper[1],
                      temper[2], temper[3], temper[4], !temper[5]],
                  })}
                />
              </Column>
            </Row>

            <SectionText>
              SAÚDE
            </SectionText>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Vacinado"
                  checked={health[0]}
                  onPress={() => this.setState({
                    health: [!health[0], health[1],
                      health[2], health[3]],
                  })}

                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Vermifugado"
                  checked={health[1]}
                  onPress={() => this.setState({
                    health: [health[0], !health[1],
                      health[2], health[3]],
                  })}
                />
              </Column>

            </Row>

            <Row>
              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Castrado"
                  checked={health[2]}
                  onPress={() => this.setState({
                    health: [health[0], health[1],
                      !health[2], health[3]],
                  })}
                />
              </Column>

              <Column>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Doente"
                  checked={health[3]}
                  onPress={() => this.setState({
                    health: [health[0], health[1],
                      health[2], !health[3]],
                  })}
                />
              </Column>
            </Row>

            <TxtInput
              onChangeText={(diseases) => this.setState({ diseases })}
              value={diseases}
              placeholder="Doenças do animal"
            />

            <SectionText>
              EXIGÊNCIAS PARA ADOÇÃO
            </SectionText>

            <CheckBox
              textStyle={CheckboxText}
              containerStyle={CheckboxContainer}
              title="Termo de adoção"
              checked={adoptionReq[0]}
              onPress={() => this.setState({
                adoptionReq: [!adoptionReq[0], adoptionReq[1],
                  adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              textStyle={CheckboxText}
              containerStyle={CheckboxContainer}
              title="Fotos da casa"
              checked={adoptionReq[1]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], !adoptionReq[1],
                  adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              textStyle={CheckboxText}
              containerStyle={CheckboxContainer}
              title="Visita prévia ao animal"
              checked={adoptionReq[2]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], adoptionReq[1],
                  !adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              textStyle={CheckboxText}
              containerStyle={CheckboxContainer}
              title="Acompanhamento pós adoção"
              checked={adoptionReq[3]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], adoptionReq[1],
                  adoptionReq[2], !adoptionReq[3]],
              })}
            />

            {adoptionReq[3] ? (
              <VisitTimeContainer>
                <CheckBox
                  textStyle={VisitTimeText}
                  containerStyle={CheckboxContainer}
                  title="1 mês"
                  checked={visit[0]}
                  onPress={() => this.setState({
                    visit: [!visit[0], visit[1],
                      visit[2]],
                  })}
                />
                <CheckBox
                  textStyle={VisitTimeText}
                  containerStyle={CheckboxContainer}
                  title="3 meses"
                  checked={visit[1]}
                  onPress={() => this.setState({
                    visit: [visit[0], !visit[1],
                      visit[2]],
                  })}
                />
                <CheckBox
                  textStyle={VisitTimeText}
                  containerStyle={CheckboxContainer}
                  title="6 meses"
                  checked={visit[2]}
                  onPress={() => this.setState({
                    visit: [visit[0], visit[1],
                      !visit[2]],
                  })}
                />
              </VisitTimeContainer>
            ) : null}

            <SectionText>
              SOBRE O ANIMAL
            </SectionText>

            <TxtInput
              onChangeText={(about) => this.setState({ about })}
              value={about}
              placeholder="Compartilhe a história do animal"
            />

            <BtnContainer>
              <AdoptionBtn onPress={this.handleSubmit}>
                <AdoptionButtonText>COLOCAR PARA ADOÇÃO</AdoptionButtonText>
              </AdoptionBtn>
            </BtnContainer>

          </ScrollContainer>
        </BodyContainer>
      </>
    );
  }
}

PetRegister.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PetRegister;
