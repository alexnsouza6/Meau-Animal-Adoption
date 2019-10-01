import styled from 'styled-components';

export const Column = styled.View`
    flexDirection: column;
    flex: 1;
`;

export const Row = styled.View`
    flexDirection: row;
    justifyContent: space-between;  
`;


export const BodyContainer = styled.View`
    marginHorizontal: 24;
    justifyContent: center;
    flexDirection: row;
`;

export const BaseText = styled.Text`
    textAlign: center;
    fontSize: 14;
    marginTop: 20;
    marginBottom: 12;
    color: #f7a800;
`;

export const LeftBtn = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    marginRight: 8;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const RightBtn = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    marginLeft: 8;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const CenterBtn = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    marginHorizontal: 8;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const TxtInput = styled.TextInput`
    height: 40;
    borderBottomColor: #bdbdbd;
    borderBottomWidth: 1;
    marginVertical: 0;

`;

export const CheckboxContainer = {
  backgroundColor: 'white',
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

export const TitleText = {
  marginLeft: 5,
  fontSize: 20,
  fontWeight: 'bold',
};

export const BtnContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    marginVertical: 24;
`;

export const BtnStyle = styled.View`
    height: 40;
    width: 100;
    fontSize: 12;
`;

export const LabelText = styled.Text`
    fontSize: 12;
    color: #f7a800;
    marginTop: 20;
    marginBottom: 16;
`;

export const AdoptButton = styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #ffd358;
    height: 40;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;


export const HelpButton = styled.TouchableOpacity`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f1f2f2;
    height: 40;
    marginLeft: 16;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const TopButtonsContainer = styled.View`
    justifyContent: center;
    flexDirection: row;
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
