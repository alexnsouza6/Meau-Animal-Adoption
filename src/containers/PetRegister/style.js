import styled from 'styled-components/native';

export const Column = styled.View`
    flexDirection: column;
    flex: 1;
`;

export const Row = styled.View`
    flexDirection: row;
    flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
`;

export const BodyContainer = styled.View`
    flex: 1;
    marginHorizontal: 24;
`;

export const BaseText = styled.Text`
    textAlign: left;
    fontSize: 14;
    marginVertical: 16;
    color: #757575;
`;

export const AdoptButton = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #ffd358;
    height: 40;
    width: 100;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const PatronizeButton = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    marginHorizontal: 8;
    width: 100;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const PatronizeText = styled.Text`
    color: #bdbdbd;
`;

export const HelpButton = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    width: 100;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const AdoptionText = styled.Text`
    fontSize: 16;
    color: #434343;
    marginTop: 16;
`;

export const TopButtonsContainer = styled.View`
    justifyContent: center;
    flexDirection: row;
`;

export const TxtInput = styled.TextInput`
    height: 40;
    borderBottomColor: #bdbdbd;
    borderBottomWidth: 1;
    marginVertical: 0;

`;

export const CheckboxContainer = {
  borderWidth: 0,
  marginLeft: 0,
  marginRight: 12,
  marginTop: 0,
  padding: 0,
};

export const CheckboxText = {
  color: '#757575',
  fontSize: 14,
  marginLeft: 0,
  padding: 0,
};

export const VisitTimeText = {
  fontFamily: 'Roboto',
  fontSize: 14,
  color: '#bdbdbd',
};

export const ImageButtonStyle = {
  backgroundColor: '#f1f2f2',
};

export const VisitTimeContainer = styled.View`
    marginHorizontal: 24;
`;


export const BtnContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    marginVertical: 24;
`;

export const AdoptionBtn = styled.TouchableOpacity`
    height: 40;
    width: 232;
    fontSize: 12;
    backgroundColor: #ffd358;
    justifyContent: center;
    alignItems: center;
    shadowColor: rgba(0,0,0, .4);
    shadowOffset: { height: 1, width: 1 };
    shadowOpacity: 1;
    shadowRadius: 1;
    elevation: 2;
`;

export const AdoptionButtonText = styled.Text`
    color: #434343;
`;

export const BtnStyle = styled.View`
    height: 40;
    width: 100;
    fontSize: 12;
`;

export const SectionText = styled.Text`
    fontSize: 12;
    color: #f7a800;
    marginTop: 20;
    marginBottom: 16;
`;

export const ImageButton = styled.TouchableOpacity`
    padding: 30px;
    height: 128;
    marginTop: 4;
    marginBottom: 10;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    borderRadius: 5;
`;
