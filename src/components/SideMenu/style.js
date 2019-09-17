import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
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
    display: flex;
    flexDirection: row;
    alignItems: center;
    height: 50;
    backgroundColor: #fee29b;
`;

export const NavInfoSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    height: 50;
    backgroundColor: #cfe9e5;
`;

export const NavConfigSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    height: 50;
    backgroundColor: #e6e7e8;
`;

export const NavSectionText = styled.Text`
    fontFamily: Roboto-Regular;
    fontSize: 14;
    fontWeight: 900;
    color: #434343;
    marginLeft: 20;
`;

export const FooterContainer = styled.TouchableOpacity`
    flex: 1;
    alignItems: center;
    padding: 15px 50px;
    backgroundColor: #88c9bf;
`;

export const FooterText = styled.Text`
    fontFamily: Roboto-Regular;
    fontSize: 18;
    fontWeight: 900;
    color: #434343;
`;
