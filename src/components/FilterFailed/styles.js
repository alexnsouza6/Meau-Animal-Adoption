import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  marginTop: 52;
`;

export const Title = styled.Text`
  fontSize: 53;
  color: #ffd358;
  marginBottom: 52;
  fontFamily: Courgette-Regular;
`;

export const StandardText = styled.Text`
  fontSize: 18;
  color: #757575;
  textAlign: center;
  fontFamily: Roboto-Regular;
`;

export const ButtonContainer = styled.View`
  marginTop: 52;
  alignItems: center;
  justifyContent: center;
`;

export const StandardButton = styled.TouchableOpacity`
  marginTop: 20;
  width: 232;
  height: 40;
  alignItems: center;
  justifyContent: center;
  borderWidth: 2;
  borderColor: transparent;
  backgroundColor: #ffd358;
  marginBottom: 44;
`;
