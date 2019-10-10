import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justifyContent: space-evenly;
    alignItems: center;
`;

export const ScrollContainer = styled.ScrollView`
`;

export const FieldText = styled.Text`
    fontSize: 14px;
    height: 20;
    paddingLeft: 6;
    width: 90%;
    borderColor: gray;
    textAlign: center;
    marginTop: 8;
`;

export const InfoText = styled.Text`
    fontSize: 16px;
    marginTop: 28;
    fontFamily: Roboto;
    color: #8dbab9;
    textAlign: center;
`;

export const MenuText = styled.Text`
    textAlign: center;
    fontSize: 12px;
    color: #757575;
    fontFamily: Roboto;
`;

export const ButtonsView = styled.View`
    flexDirection: row;
    marginTop: 32px;
    marginBottom: 24px;
`;

export const NavButton = styled.TouchableOpacity`
    width: 148;
    height: 40px;
    marginHorizontal: 8;
    justifyContent: center;
    backgroundColor: #88C9BF;
`;
