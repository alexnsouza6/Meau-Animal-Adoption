import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import ScreenHeader from '../../components/ScreenHeader';
import {
  Container, Title, FinishButton, ButtonText,
} from './style';


class FinishProcess extends Component {
  state = {
    checked: false,
  }

  onCheckBoxPress = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  }

  render() {
    const { navigation } = this.props;
    const { checked } = this.state;
    return (
      <>
        <ScreenHeader title="Adotar" color="#ffd358" iconLeft="menu" navigation={navigation} />
        <Container>
          <Title> Selecione o(s) animal(is)</Title>
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Pequi"
            checked={checked}
          />
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Bacon"
            checked={checked}
          />
          <Title>Qual processo foi formalizado?</Title>
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Adoção"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
          />
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Apadrinhamento"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
          />
          <Title>Selecione o usuário</Title>
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Ana Luísa"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
          />
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Amanda Teixeira"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
          />
          <CheckBox
            onPress={this.onCheckBoxPress}
            title="Elias Rocha"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked}
          />
          <FinishButton>
            <ButtonText> Finalizar Processo </ButtonText>
          </FinishButton>
        </Container>
      </>
    );
  }
}

FinishProcess.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default FinishProcess;
