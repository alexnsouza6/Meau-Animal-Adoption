import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  CheckBox,
  Header,
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

import {
  Column, Row, BodyContainer, BaseText,
  OptionBtn, AdoptionBtn, TxtInput, CheckboxContainer,
  CheckboxText, TitleText, BtnContainer, BtnStyle, LabelText
} from './style';

const PetRegister = () => {
  state = {
    temper: [false, false, false, false, false, false],
    health: [false, false, false],
    adoptionReq: [false, false, false, false],
    visit: [false, false, false],
  };

  const [value, onChangeText] = React.useState('');

  return (
    <>
      <StatusBar backgroundColor="#f7a800" />
      <Header
        backgroundColor="#ffd358"
        placement="left"
        leftComponent={{ icon: 'arrow-back', color: '#434343' }}
        centerComponent={{ text: 'Cadastro do animal', style: { color: '#434343', fontSize: 20 } }}
      />
      <SafeAreaView>
        <ScrollView style={styles.scrollView} >
          <View>
            <Text style={styles.baseText}>Tenho interesse em cadastrar um animal para:</Text>
          </View>
          <View style={{marginHorizontal: 24, justifyContent: 'center', flexDirection: 'row' }} >
            <View style={styles.btnStyle}>
              <TouchableOpacity style={[styles.optionBtn, { backgroundColor: '#ffd358' }]}>
                <Text style={{ color: '#434343' }}>ADOÇÃO</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.optionBtn, { marginHorizontal: 8 }]}>
              <TouchableOpacity disabled>
                <Text style={{ color: '#bdbdbd' }}>APADRINHAR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionBtn}>
              <TouchableOpacity>
                <Text style={{ color: '#434343' }}>AJUDA</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 1,
            marginTop: 20,
            marginHorizontal: 20}}/>
          <View style={{ marginHorizontal: 24 }}>
            <Text style={{ fontSize: 16, color: '#434343', marginTop: 16 }}>Adoção</Text>

            <Text style={styles.labelText}>NOME DO ANIMAL</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Nome do animal"
            />

            <Text style={styles.labelText}>FOTOS DO ANIMAL</Text>
            <View style={{ height: 128, backgroundColor: '#f1f2f2' }}>
              <View style={{
                marginTop: 44, marginBottom: 48, justifyContent: 'center', alignItems: 'center',
              }}
              >
                <Button
                  buttonStyle={{ backgroundColor: '#f1f2f2' }}
                  icon={( <Icon name="plus-circle" size={24} color="#757575"/>)}
                />
                <Text style={{ color: '#757575' }}>adicionar fotos</Text>
              </View>
            </View>

            <Text style={styles.labelText}>ESPÉCIE</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Cachorro"
                  checked={this.state.temper[0]}
                  onPress={() => { this.state.temper[0] = !this.state.temper[0]; }}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Gato"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column} />
            </View>

            <Text style={styles.labelText}>SEXO</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Macho"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Fêmea"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column} />
            </View>

            <Text style={styles.labelText}>PORTE</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Pequeno"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Médio"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Grande"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
            </View>

            <Text style={styles.labelText}>IDADE</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Filhote"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Adulto"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Idoso"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
            </View>

            <Text style={styles.labelText}>TEMPERAMENTO</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Brincalhão"
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Guarda"
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Tímido"
                  checked={this.state.temper[2]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Amoroso"
                  checked={this.state.temper[3]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Calmo"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Preguiçoso"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
            </View>

            <Text style={styles.labelText}>SAÚDE</Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Vacinado"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Castrado"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column}>
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Vermifugado"
                  checked={this.state.temper[4]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
                <CheckBox
                  textStyle={CheckboxText}
                  containerStyle={CheckboxContainer}
                  title="Doente"
                  checked={this.state.temper[5]}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
              <View style={styles.column} />
            </View>
            <TextInput
              style={styles.txtInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Doenças do animal"
            />

            <Text style={styles.labelText}>EXIGÊNCIAS PARA ADOÇÃO</Text>
            <View>
              <CheckBox
                textStyle={CheckboxText}
                containerStyle={CheckboxContainer}
                title="Termo de adoção"
                checked={this.state.temper[4]}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <CheckBox
                textStyle={CheckboxText}
                containerStyle={CheckboxContainer}
                title="Fotos da casa"
                checked={this.state.temper[5]}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <CheckBox
                textStyle={CheckboxText}
                containerStyle={CheckboxContainer}
                title="Visita prévia ao animal"
                checked={this.state.temper[4]}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <CheckBox
                textStyle={CheckboxText}
                containerStyle={CheckboxContainer}
                title="Acompanhamento pós adoção"
                checked={this.state.temper[5]}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              {/* <View> {displayVisit()} </View> */}
            </View>

            <Text style={styles.labelText}>SOBRE O ANIMAL</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Compartilhe a história do animal"
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.adoptionBtn}>
              <Text style={{ color: '#434343' }}>COLOCAR PARA ADOÇÃO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  baseText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 16,
    color: '#757575'
  },
  optionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f2',
    height: 40,
    width: 100,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS,
    elevation: 2
  },
  txtInput: {
    height: 40,
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
    marginVertical: 0
  },
  checkboxContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 12,
    marginTop: 0,
    padding: 0
  },
  checkboxText: {
    color: '#757575',
    fontSize: 14,
    marginLeft: 0,
    padding: 0,
  },
  titleText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnStyle: {
    height: 40,
    width: 100,
    fontSize: 12,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24
  },
  labelText: {
    fontSize: 12,
    color: '#f7a800',
    marginTop: 20,
    marginBottom: 16
  },
  adoptionBtn: {
    height: 40,
    width: 232,
    fontSize: 12,
    backgroundColor: '#ffd358',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS,
    elevation: 2
  }
});

export default PetRegister;
