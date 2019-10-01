import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import reactotron from 'reactotron-react-native';
import {
  Column, Row, BodyContainer, SectionText, TopButtonsContainer, TopAdoptButton,
  TopButton, TopButtonText, LeftButton, RightButton, CenterButton, MarkedButton, SearchButtonText,
  SearchButton, TextInput, SearchButtonContainer,
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
    return aux;
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
              <SectionText>
               SEU INTERESSE
              </SectionText>
              <TopButtonsContainer>

                <TopAdoptButton>
                  <Text>ADOTAR</Text>
                </TopAdoptButton>

                <TopButton>
                  <TopButtonText>AJUDAR</TopButtonText>
                </TopButton>

                <TopButton>
                  <TopButtonText>APADRINHAR</TopButtonText>
                </TopButton>

              </TopButtonsContainer>

              <SectionText>
                ESPÉCIE
              </SectionText>

              <Row>
                <Column>
                  {specie[0]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { specie: this.handlePress(specie, 0) },
                      )}
                      >
                        <Text>CACHORRO</Text>
                      </MarkedButton>
                    )
                    : (
                      <LeftButton onPress={() => this.setState(
                        { specie: this.handlePress(specie, 0) },
                      )}
                      >
                        <Text>CACHORRO</Text>
                      </LeftButton>
                    )}
                </Column>
                <Column>
                  {specie[1]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { specie: this.handlePress(specie, 1) },
                      )}
                      >
                        <Text>GATO</Text>
                      </MarkedButton>
                    )
                    : (
                      <RightButton onPress={() => this.setState(
                        { specie: this.handlePress(specie, 1) },
                      )}
                      >
                        <Text>GATO</Text>
                      </RightButton>
                    )}
                </Column>
              </Row>

              <SectionText>
                SEXO
              </SectionText>

              <Row>
                <Column>
                  {sex[0]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { sex: this.handlePress(sex, 0) },
                      )}
                      >
                        <Text>MACHO</Text>
                      </MarkedButton>
                    )
                    : (
                      <LeftButton onPress={() => this.setState(
                        { sex: this.handlePress(sex, 0) },
                      )}
                      >
                        <Text>MACHO</Text>
                      </LeftButton>
                    )}
                </Column>
                <Column>
                  {sex[1]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { sex: this.handlePress(sex, 1) },
                      )}
                      >
                        <Text>FÊMEA</Text>
                      </MarkedButton>
                    )
                    : (
                      <RightButton onPress={() => this.setState(
                        { sex: this.handlePress(sex, 1) },
                      )}
                      >
                        <Text>FÊMEA</Text>
                      </RightButton>
                    )}
                </Column>
              </Row>

              <SectionText>
                IDADE
              </SectionText>

              <Row>
                <Column>
                  {age[0]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { age: this.handlePress(age, 0) },
                      )}
                      >
                        <Text>FILHOTE</Text>
                      </MarkedButton>
                    )
                    : (
                      <LeftButton onPress={() => this.setState(
                        { age: this.handlePress(age, 0) },
                      )}
                      >
                        <Text>FILHOTE</Text>
                      </LeftButton>
                    )}
                </Column>
                <Column>
                  {age[1]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { age: this.handlePress(age, 1) },
                      )}
                      >
                        <Text>ADULTO</Text>
                      </MarkedButton>
                    )
                    : (
                      <CenterButton onPress={() => this.setState(
                        { age: this.handlePress(age, 1) },
                      )}
                      >
                        <Text>ADULTO</Text>
                      </CenterButton>
                    )}
                </Column>
                <Column>
                  {age[2]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { age: this.handlePress(age, 2) },
                      )}
                      >
                        <Text>IDOSO</Text>
                      </MarkedButton>
                    )
                    : (
                      <RightButton onPress={() => this.setState(
                        { age: this.handlePress(age, 2) },
                      )}
                      >
                        <Text>IDOSO</Text>
                      </RightButton>
                    )}
                </Column>
              </Row>

              <SectionText>
                PORTE
              </SectionText>

              <Row>
                <Column>
                  {size[0]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { size: this.handlePress(size, 0) },
                      )}
                      >
                        <Text>PEQUENO</Text>
                      </MarkedButton>
                    )
                    : (
                      <LeftButton onPress={() => this.setState(
                        { size: this.handlePress(size, 0) },
                      )}
                      >
                        <Text>PEQUENO</Text>
                      </LeftButton>
                    )}
                </Column>
                <Column>
                  {size[1]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { size: this.handlePress(size, 1) },
                      )}
                      >
                        <Text>MÉDIO</Text>
                      </MarkedButton>
                    )
                    : (
                      <CenterButton onPress={() => this.setState(
                        { size: this.handlePress(size, 1) },
                      )}
                      >
                        <Text>MÉDIO</Text>
                      </CenterButton>
                    )}
                </Column>
                <Column>
                  {size[2]
                    ? (
                      <MarkedButton onPress={() => this.setState(
                        { size: this.handlePress(size, 2) },
                      )}
                      >
                        <Text>GRANDE</Text>
                      </MarkedButton>
                    )
                    : (
                      <RightButton onPress={() => this.setState(
                        { size: this.handlePress(size, 2) },
                      )}
                      >
                        <Text>GRANDE</Text>
                      </RightButton>
                    )}
                </Column>
              </Row>

              <SectionText>
                LOCALIZAÇÃO
              </SectionText>

              <TextInput
                onChangeText={(cityState) => this.setState({ cityState })}
                value={cityState}
                placeholder="Estado"
              />

              <TextInput
                onChangeText={(city) => this.setState({ city })}
                value={city}
                placeholder="Cidade"
              />

              <SectionText>
                PESQUISA POR NOME
              </SectionText>


              <TextInput
                onChangeText={(nameSearch) => this.setState({ nameSearch })}
                value={nameSearch}
                placeholder="Nome do pet ou usuário"
              />

              <SearchButtonContainer>
                <SearchButton onPress={this.handleSubmit}>
                  <SearchButtonText>FAZER PESQUISA</SearchButtonText>
                </SearchButton>
              </SearchButtonContainer>

            </ScrollContainer>
          </BodyContainer>
        </SafeAreaView>
      </>
    );
  }
}

export default PetFilter;
