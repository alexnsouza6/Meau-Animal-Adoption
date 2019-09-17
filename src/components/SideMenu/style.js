import styled from 'styled-components/native';

export const Container = styled.View`
    paddingTop: 20;
    backgroundColor: #f7f7f7;
`;

export const NavItemContainer = styled.View`
    marginLeft: 30;
`;

export const NavItem = styled.TouchableOpacity`
    marginTop: 16;
    marginBottom: 20;
    borderBottomWidth: 0.5;
`;

export const NavPetSection = styled.View`
    flex: 1;
    justifyContent: flex-start;
    alignItems: center;
    backgroundColor: #fee29b;
    width: 304;
    height: 48;
`;

export const NavInfoSection = styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: #cfe9e5;
    width: 304;
    height: 48;
`;

export const NavConfigSection = styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: #e6e7e8;
    width: 304;
    height: 48;
`;

export const NavSectionText = styled.Text`
    fontFamily: Roboto-Regular;
    fontSize: 14px;
    color: #434343;
`;


export const FooterContainer = styled.TouchableOpacity`
    flex: 1;
    alignItems: center;
    padding: 15px 50px;
    backgroundColor: #88c9bf;
`;
