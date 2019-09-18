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

const PetFilter = () => {

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
                centerComponent={{ text: 'Filtrar pesquisa', style: { color: '#434343', fontSize: 20 } }}
            />
            <SafeAreaView>
                <ScrollView style={styles.scrollView} >
                    <View>
                        <Text style={styles.baseText}>SEU INTERESSE</Text>
                    </View>
                    <View style={{ marginHorizontal: 24, justifyContent: 'center', flexDirection: 'row' }} >
                        <View>
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{ color: '#757575' }}>ADOTAR</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[{ marginHorizontal: 8, backgroundColor: '#ffd358' }]}>
                            <TouchableOpacity disabled style={styles.optionBtn}>
                                <Text style={{ color: '#757575' }}>AJUDAR</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.optionBtn}>
                                <Text style={{ color: '#757575' }}>APADRINHAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>ESPÉCIE</Text>
                        <View style={{flexDirection: 'row' }} >
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>CACHORRO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.optionBtn, { marginHorizontal: 16 }]}>
                                <TouchableOpacity disabled>
                                    <Text style={{ color: '#757575' }}>GATO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>SEXO</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>MACHO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.optionBtn, { marginHorizontal: 16}]}>
                                <TouchableOpacity disabled>
                                    <Text style={{ color: '#757575' }}>FÊMEA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>IDADE</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>FILHOTE</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.optionBtn, { marginHorizontal: 16 }]}>
                                <TouchableOpacity disabled>
                                    <Text style={{ color: '#757575' }}>ADULTO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>IDOSO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>PORTE</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>PEQUENO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.optionBtn, { marginHorizontal: 16}]}>
                                <TouchableOpacity disabled>
                                    <Text style={{ color: '#757575' }}>MÉDIO</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnStyle}>
                                <TouchableOpacity style={styles.optionBtn}>
                                    <Text style={{ color: '#757575' }}>GRANDE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>LOCALIZAÇÃO</Text>
                        <TextInput
                            style={styles.txtInput}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}
                            placeholder="Estado"
                        />
                        <TextInput
                            style={styles.txtInput}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}
                            placeholder="Cidade"
                        />
                        <Text style={[styles.baseText, { color: '#f7a800' }]}>PESQUISAR POR NOME</Text>
                        <TextInput
                            style={styles.txtInput}
                            onChangeText={(text) => onChangeText(text)}
                            value={value}
                            placeholder="Nome do pet ou usuário"
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.adoptionBtn}>
                            <Text style={{ color: '#434343' }}>FAZER PESQUISA</Text>
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
        marginTop: 28,
        marginBottom: 12,
        color: '#f7a800'
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
        alignSelf: 'stretch',
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
        width: 96,
        fontSize: 12
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

export default PetFilter;
