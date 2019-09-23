import styled from 'styled-components/native';

export const FeedContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  display: flex;
  marginTop: 10;
  marginBottom: 10;

`;

export const Feed = styled.TouchableOpacity`
  display: flex;
  flexDirection: column;
  width: 344;
  height: 294;
`;

export const FeedHeader = styled.View`
  flexDirection: row;
  backgroundColor: #fee29b;
  justifyContent: space-between;
  paddingTop: 10;
  paddingBottom: 10;
  paddingRight: 10;
  paddingLeft: 10;
  borderTopLeftRadius: 5;
  borderTopRightRadius: 5;
`;

export const FeedImage = styled.Image`
  width: 343;
  height: 183;
`;

export const FeedBody = styled.View`
  display: flex;
  borderBottomLeftRadius: 5;
  borderBottomRightRadius: 5;
  paddingTop: 10;
  paddingBottom: 10;
  paddingRight: 10;
  paddingLeft: 10;
  borderColor: #434343;
  borderLeftWidth: 1;
  borderRightWidth: 1;
  borderBottomWidth: 1;
`;

export const Info = styled.Text`
  fontFamily: Roboto;
  fontSize: 12;
  color: #434343;
`;

export const AnimalInfo = styled.View`
  display: flex;  
  flexDirection: row;
  justifyContent: space-between;
  marginBottom: 10;
`;

export const AnimalAddress = styled.View`
  display: flex;
  alignItems: center;
`;

export const AnimalName = styled.Text`
  fontFamily: Roboto;
  fontSize: 16;
  color: #434343;
`;
