import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import reactotron from 'reactotron-react-native';
import {
  Column, Row, BodyContainer, BaseText, TopButtonsContainer, AdoptButton,
  HelpButton, LeftBtn, RightBtn, CenterBtn, AdoptionButtonText,
  AdoptionBtn, TxtInput, BtnContainer,
} from './style';
import { ScrollContainer } from '../PetRegister/style';

class PetFilter extends React.Component {
  state = {
    specie: [false, false],
    sex: [false, false],
    age: [false, false, false],
    size: [false, false, false],
    cityState: '',
    city: '',
    nameSearch: '',

  };

  handleSubmit = () => {
    reactotron.log(this.state);
  }

  handlePress = (array, index) => {
    const aux = array;
    for (let idx = 0; idx < array.length; idx += 1) {
      if (idx === index) {
        aux[index] = !aux[index];
      }
    }
    // reactotron.log(array);
    this.setState({ array: aux });
  }

  render() {
    const {
      specie, sex, age, size, cityState, city, nameSearch,
    } = this.state;
    return (
      <>
        <StatusBar backgroundColor="#f7a800" />
        <SafeAreaView>
          <BodyContainer>
            <ScrollContainer>
              <BaseText>
               SEU INTERESSE
              </BaseText>
              <TopButtonsContainer>

                <AdoptButton>
                  <Text>ADOTAR</Text>
                </AdoptButton>

                <HelpButton>
                  <Text>AJUDAR</Text>
                </HelpButton>

                <HelpButton>
                  <Text>APADRINHAR</Text>
                </HelpButton>

              </TopButtonsContainer>

              <BaseText>
                ESPÉCIE
              </BaseText>

              <Row>
                <Column>
                  <LeftBtn onPress={() => this.handlePress(specie, 0)}>
                    <Text>CACHORRO</Text>
                  </LeftBtn>
                </Column>
                <Column>
                  <RightBtn onPress={() => this.handlePress(specie, 1)}>
                    <Text>GATO</Text>
                  </RightBtn>
                </Column>
              </Row>

              <BaseText>
                SEXO
              </BaseText>

              <Row>
                <Column>
                  <LeftBtn onPress={() => this.handlePress(sex, 0)}>
                    <Text>MACHO</Text>
                  </LeftBtn>
                </Column>
                <Column>
                  <RightBtn onPress={() => this.handlePress(sex, 1)}>
                    <Text>FEMEA</Text>
                  </RightBtn>
                </Column>
              </Row>

              <BaseText>
                IDADE
              </BaseText>

              <Row>
                <Column>
                  <LeftBtn onPress={() => this.handlePress(age, 0)}>
                    <Text>FILHOTE</Text>
                  </LeftBtn>
                </Column>
                <Column>
                  <CenterBtn onPress={() => this.handlePress(age, 1)}>
                    <Text>ADULTO</Text>
                  </CenterBtn>
                </Column>
                <Column>
                  <RightBtn onPress={() => this.handlePress(age, 2)}>
                    <Text>IDOSO</Text>
                  </RightBtn>
                </Column>
              </Row>

              <BaseText>
                PORTE
              </BaseText>

              <Row>
                <Column>
                  <LeftBtn onPress={() => this.handlePress(size, 0)}>
                    <Text>PEQUENO</Text>
                  </LeftBtn>
                </Column>
                <Column>
                  <CenterBtn onPress={() => this.handlePress(size, 1)}>
                    <Text>MÉDIO</Text>
                  </CenterBtn>
                </Column>
                <Column>
                  <RightBtn onPress={() => this.handlePress(size, 2)}>
                    <Text>GRANDE</Text>
                  </RightBtn>
                </Column>
              </Row>

              <BaseText>
                LOCALIZAÇÃO
              </BaseText>

              <TxtInput
                onChangeText={(cityState) => this.setState({ cityState })}
                value={cityState}
                placeholder="Estado"
              />

              <TxtInput
                onChangeText={(city) => this.setState({ city })}
                value={city}
                placeholder="Cidade"
              />

              <BaseText>
                PESQUISA POR NOME
              </BaseText>


              <TxtInput
                onChangeText={(nameSearch) => this.setState({ nameSearch })}
                value={nameSearch}
                placeholder="Nome do pet ou usuário"
              />

              <BtnContainer>
                <AdoptionBtn onPress={this.handleSubmit}>
                  <AdoptionButtonText>FAZER PESQUISA</AdoptionButtonText>
                </AdoptionBtn>
              </BtnContainer>

            </ScrollContainer>
          </BodyContainer>
        </SafeAreaView>
      </>
    );
  }
}

export default PetFilter;
