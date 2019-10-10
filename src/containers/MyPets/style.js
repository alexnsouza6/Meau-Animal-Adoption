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

export const Title = styled.Text`
  fontSize: 53;
  color: #ffd358;
  marginBottom: 52;
  fontFamily: Courgette-Regular;
`;
