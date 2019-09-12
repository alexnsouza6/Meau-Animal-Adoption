import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const FeedContainer = styled.View`
  marginLeft: 3;
  marginRight: 3;
`;

export const Feed = styled.View`
  height: 50;
  width: ${Dimensions.get('window') - 6};
  display: flex;
  flexDirection: column;
`;

export const FeedHeader = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;

export const FeedImage = styled.Image`
  resizeMode: cover;
  width: 344;
  height: 183;
`;

export const FeedBody = styled.View`
  display: flex;

`;

export const Info = styled.Text`
  fontFamily: Roboto;
  fontSize: 12;
  color: #434343;
`;

export const AnimalInfo = styled.View`
  display: flex;  
  justifyContent: space-between;
`;

export const AnimalAddress = styled.View`
  fontFamily: Roboto;
  fontSize: 12;
  color: #434343;
  justifyContent: center;;
`;

export const AnimalName = styled.Text`
  fontFamily: Roboto;
  fontSize: 16;
  color: #434343;
`;
