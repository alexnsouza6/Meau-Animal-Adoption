import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #f7f7f7;
`;

export const AvatarSection = styled.View`
    width: 304;
    height: 172;
    backgroundColor: #88c9bf;

`;

export const NavItemContainer = styled.View`
    marginLeft: 30;
`;

export const NavItem = styled.TouchableOpacity`
    marginTop: 16;
    paddingBottom: 20;
    borderBottomWidth: 0.5;
`;

export const NavItemText = styled.Text`
    fontFamily: Roboto-Regular;
    fontSize: 14;
    fontWeight: 600;
    color: #434343;
`;

export const NavPetSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    paddingRight: 12;
    height: 50;
    backgroundColor: #fee29b;
`;

export const NavInfoSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    paddingRight: 12;
    height: 50;
    backgroundColor: #cfe9e5;
`;

export const NavConfigSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    height: 50;
    paddingRight: 12;
    backgroundColor: #e6e7e8;
`;

export const IconTextSection = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center;
`;

export const NavSectionText = styled.Text`
    fontFamily: Roboto-Regular;
    fontSize: 14;
    fontWeight: 700;
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
