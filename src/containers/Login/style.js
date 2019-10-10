import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Zocial';

export const LoginContainer = styled.View`
    flex: 1;
    paddingTop: 64;
    display: flex;
    alignItems: center;

`;

export const TxtInput = styled.TextInput`
    height: 40;
    borderBottomColor: #bdbdbd;
    borderBottomWidth: 1;
    marginVertical: 0;
    width: 90%
`;

export const SignInButton = styled.TouchableOpacity`
    width: 232;
    height: 40;
    marginTop: 52;
    marginBottom: 72;
    marginVertical: auto;
    borderRadius: 2;
    backgroundColor: #88c9bf;
    alignItems: center;
    justifyContent: center;
    shadowColor: rgba(0,0,0, .4);
    shadowOffset: { height: 1, width: 1 };
    shadowOpacity: 1;
    shadowRadius: 1;
    elevation: 2;
`;

export const GoogleButton = styled.TouchableOpacity`
    width: 232;
    height: 40;
    marginBottom: 8;
    marginVertical: auto;
    borderRadius: 2;
    backgroundColor: #f15f5c;
    alignItems: center;
    justifyContent: center;
    shadowColor: rgba(0,0,0, .4);
    shadowOffset: { height: 1, width: 1 };
    shadowOpacity: 1;
    shadowRadius: 1;
    elevation: 2;
    flexDirection: row;
`;

export const FacebookButton = styled.TouchableOpacity`
    width: 232;
    height: 40;
    marginVertical: auto;
    borderRadius: 2;
    backgroundColor: #194f7c;
    alignItems: center;
    justifyContent: center;
    shadowColor: rgba(0,0,0, .4);
    shadowOffset: { height: 1, width: 1 };
    shadowOpacity: 1;
    shadowRadius: 1;
    elevation: 2;
    flexDirection: row;
`;

export const SignInText = styled.Text`
    fontFamily: Roboto;
    fontSize: 12;
    color: #434343;
`;

export const GoogleText = styled.Text`
    fontFamily: Roboto;
    fontSize: 12;
    color: #f7f7f7;
    marginLeft: 10;
`;


export const ErrorText = styled.Text`
    color: red;
`;
