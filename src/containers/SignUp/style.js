import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const SignUpText = styled.TextInput`
    height: 40;
    width: 90%;
    borderColor: gray;
    borderWidth: 1;
    marginTop: 8;
`;

export const ErrorText = styled.Text`
    color: red;
`;
