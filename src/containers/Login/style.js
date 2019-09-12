import styled from 'styled-components/native';

export const LoginContainer = styled.View`
    flex: 1;
    paddingTop: 64;

`;

export const UserNameInput = styled.TextInput`
    height: 40;
    width: 90%;
    fontFamily: Roboto;
    color: #bdbdbd;
    marginBottom: 20px;
    borderWidth: 1;
    marginTop: 8;
`;

export const PasswordInput = styled.TextInput`
    height: 40;
    width: 90%;
    fontFamily: Roboto;
    color: #bdbdbd;
    marginBottom: 54px;
    borderWidth: 1;
    marginTop: 8;
`;

export const SignInButton = styled.TouchableOpacity`
    width: 232;
    height: 40;
    margin: 0 auto;
    backgroundColor: #88c9bf;
    alignItems: center;
    justifyContent: center;
`;

export const SignInText = styled.Text`
    fontFamily: Roboto;
    fontSize: 20;
    color: #434343;
`;


export const ErrorText = styled.Text`
    color: red;
`;
