import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const InfoContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  display: flex;
  flexDirection: column;
  flex: 1;
  marginRight: 15;
  marginLeft: 15;
  marginBottom: 15;
  marginTop: 15;
`;

export const AnimalPhoto = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 184;
`;

export const Title = styled.Text`
  fontFamily: 'Roboto';
  fontSize: 16;
  color: #434343;
`;

export const AnimalInfo = styled.View`
  display: flex;
  flexDirection: column;
  marginTop: 8;
  marginBottom: 8;
`;

export const Category = styled.Text`
  fontFamily: 'Roboto';
  fontSize: 12;
  color: #f7a800;
  textTransform: uppercase;
`;

export const CategoryDescription = styled.Text`
  fontFamily: 'Roboto';
  fontSize: 14;
  color: #757575;
`;

export const InfoRow = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  marginTop: 8;
  marginBottom: 8;
`;


export const AdoptButton = styled.TouchableOpacity`
  backgroundColor: #fdcf58;
  marginRight: auto;
  marginLeft: auto;
  display: flex;
  justifyContent: center;
  
  width: 232;
  height: 40;
`;

export const AdoptText = styled.Text`
  fontSize: 12;
  fontFamily: 'Roboto';
  textTransform: uppercase;
  textAlign: center;
  color: #434343;
`;
