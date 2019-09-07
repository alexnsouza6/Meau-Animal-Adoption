import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const ScrollContainer = styled.ScrollView`
`;

export const DescriptionContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #cfe9e5;
    borderRadius: 10;
    marginTop: 16;
    marginHorizontal: 16;
    padding: 10px;
`;

export const Description = styled.Text`
    fontSize: 18px;
    fontFamily: Roboto;
    color: #757575;
    textAlign: center;
`;

export const FieldText = styled.TextInput`
    height: 40;
    paddingLeft: 6;
    width: 90%;
    borderColor: gray;
    borderBottomWidth: 1;
    marginTop: 8;
`;

export const InfoText = styled.Text`
    fontSize: 18px;
    marginTop: 28;
    marginBottom: 5;
    fontFamily: Roboto;
    color: #a5c9c8;
    textAlign: center;
`;

export const ImageButton = styled.TouchableOpacity`
    padding: 30px;
    marginTop: 10;
    marginBottom: 15;
    backgroundColor: #e6e7e7;
    borderRadius: 5;
`;

export const RegisterButton = styled.Button.attrs({
  title: 'Cadastrar',
  color: '#88C9BF',
})`
      fontSize: 16px;
      fontFamily: Roboto;
  `;

export const RegisterText = styled.Text`
    fontSize: 16px;
    marginTop: 28;
    marginBottom: 5;
    fontFamily: Roboto;
    textAlign: center;
`;


export const ErrorText = styled.Text`
    color: red;
`;
