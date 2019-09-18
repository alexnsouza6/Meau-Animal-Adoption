import styled from 'styled-components';

export const Column = styled.View`
    flexDirection: 'column';
    flex: 1;
`;

export const Row = styled.View`
    flexDirection: 'row';
    flex: 1;
`;


export const BodyContainer = styled.View`
    marginHorizontal: 24;
    justifyContent: 'center';
    flexDirection: 'row';
`;

export const BaseText = styled.Text`
    textAlign: 'center';
    fontSize: 14;
    marginTop: 20;
    marginBottom: 12;
    color: '#f7a800';
`;

export const OptionBtn = styled.TouchableOpacity`
    justifyContent: 'center';
    alignItems: 'center';
    backgroundColor: '#f1f2f2';
    height: 40;
    width: 100;
    shadowColor: 'rgba(0,0,0, .4)'; // IOS
    shadowOffset: { height: 1, width: 1 }; // IOS
    shadowOpacity: 1; // IOS
    shadowRadius: 1; // IOS
    elevation: 2;

`;

export const TxtInput = styled.TextInput`
    height: 40;
    borderBottomColor: '#bdbdbd';
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
    justifyContent: 'center';
    alignItems: 'center';
    marginVertical: 24;
`;

export const AdoptionBtn = styled.TouchableOpacity`
    height: 40;
    width: 232;
    fontSize: 12;
    backgroundColor: '#ffd358';
    justifyContent: 'center';
    alignItems: 'center';
    shadowColor: 'rgba(0,0,0, .4)'; // IOS
    shadowOffset: { height: 1, width: 1 }; // IOS
    shadowOpacity: 1; // IOS
    shadowRadius: 1; // IOS,
    elevation: 2;
`;

export const BtnStyle = styled.View`
    height: 40;
    width: 100;
    fontSize: 12;
`;

export const LabelText = styled.Text`
    fontSize: 12;
    color: '#f7a800';
    marginTop: 20;
    marginBottom: 16;
`;