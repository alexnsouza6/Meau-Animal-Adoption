import React from 'react';
import { StatusBar, Text } from 'react-native';

import {
  CheckBox,
  Header,
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import reactotron from 'reactotron-react-native';
import {
  Column, Row, BodyContainer, BaseText, ScrollContainer, AdoptButton,
  HelpButton, PatronizeButton, TopButtonsContainer, AdoptionText, SectionText, TxtInput,
  CheckboxContainer, ImageButton, AdoptionBtn, ImageButtonStyle,
  CheckboxText, BtnContainer, PatronizeText, AdoptionButtonText,
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
    petName: '',
    diseases: '',
    about: '',
  };

  handleSubmit = () => {
    const { adoptionReq } = this.state;
    if (!adoptionReq[3]) {
      reactotron.log('if');
      this.setState({ visit: [false, false, false] });
    }
  }

  render() {
    const {
      temper, health, adoptionReq, visit, about,
      petName, specie, sex, size, age, diseases,
    } = this.state;
    return (
      <>
        <StatusBar backgroundColor="#f7a800" />
        <Header
          backgroundColor="#ffd358"
          placement="left"
          leftComponent={{ icon: 'arrow-back', color: '#434343' }}
          centerComponent={{ text: 'Cadastro do Animal', style: { color: '#434343', fontSize: 20 } }}
        />
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
              onChangeText={(petName) => this.setState({ petName })}
              value={petName}
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
              title="Termo de adoção"
              checked={adoptionReq[0]}
              onPress={() => this.setState({
                adoptionReq: [!adoptionReq[0], adoptionReq[1],
                  adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              title="Fotos da casa"
              checked={adoptionReq[1]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], !adoptionReq[1],
                  adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              title="Visita prévia ao animal"
              checked={adoptionReq[2]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], adoptionReq[1],
                  !adoptionReq[2], adoptionReq[3]],
              })}
            />
            <CheckBox
              title="Acompanhamento pós adoção"
              checked={adoptionReq[3]}
              onPress={() => this.setState({
                adoptionReq: [adoptionReq[0], adoptionReq[1],
                  adoptionReq[2], !adoptionReq[3]],
              })}
            />

            {adoptionReq[3] ? (
              <>
                <CheckBox
                  title="1 mês"
                  checked={visit[0]}
                  onPress={() => this.setState({
                    visit: [!visit[0], visit[1],
                      visit[2]],
                  })}
                />
                <CheckBox
                  title="3 meses"
                  checked={visit[1]}
                  onPress={() => this.setState({
                    visit: [visit[0], !visit[1],
                      visit[2]],
                  })}
                />
                <CheckBox
                  title="6 meses"
                  checked={visit[2]}
                  onPress={() => this.setState({
                    visit: [visit[0], visit[1],
                      !visit[2]],
                  })}
                />
              </>
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

export default PetRegister;
