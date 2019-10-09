import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: space-around;
  marginTop: 52;
`;

export const Title = styled.Text`
  fontSize: 53;
  color: #88c9bf;
  fontFamily: Courgette;
`;

export const StandardText = styled.Text`
  fontSize: 18;
  color: #757575;
  textAlign: center;
  fontFamily: Roboto;
`;

export const ButtonContainer = styled.View`
  alignItems: center;
  justifyContent: center;
`;

export const StandardButton = styled.TouchableOpacity`
  width: 232;
  height: 40;
  alignItems: center;
  justifyContent: center;
  borderWidth: 2;
  borderColor: transparent;
  backgroundColor: #88c9bf;
  marginBottom: 44;
`;
