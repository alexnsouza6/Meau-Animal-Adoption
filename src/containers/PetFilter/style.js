import styled from 'styled-components';

export const ScrollContainer = styled.ScrollView.attrs({
})`
    display: flex;
    marginTop: 10;
    marginBottom: 10;
  
  `;
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

export const TopButtonsContainer = styled.View`
    justifyContent: center;
    flexDirection: row;
`;

export const SectionText = styled.Text`
    textAlign: center;
    fontSize: 14;
    marginTop: 20;
    marginBottom: 12;
    color: #f7a800;
`;

export const TopAdoptButton = styled.View`
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

export const TopButton = styled.View`
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

export const TopButtonText = styled.Text`
    color: #bdbdbd;
`;

export const LeftButton = styled.TouchableOpacity`
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

export const RightButton = styled.TouchableOpacity`
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

export const CenterButton = styled.TouchableOpacity`
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

export const MarkedButton = styled.TouchableOpacity`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #ffd358;
    height: 40;
    marginHorizontal: 8;
    shadowColor: rgba(0,0,0, .4); 
    shadowOffset: { height: 1, width: 1 }; 
    shadowOpacity: 1; 
    shadowRadius: 1; 
    elevation: 2;

`;

export const SearchButtonText = styled.Text`
    color: #434343;
`;

export const SearchButton = styled.TouchableOpacity`
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

export const TextInput = styled.TextInput`
    height: 40;
    borderBottomColor: #bdbdbd;
    borderBottomWidth: 1;
    marginVertical: 0;

`;

export const SearchButtonContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    marginVertical: 24;
`;
