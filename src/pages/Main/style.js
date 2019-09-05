import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    justifyContent: space-evenly;
    alignItems: center;
`;

export const DescriptionContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    margin: 0 48px;
`;

export const Menu = styled.View`
    justifyContent: space-between;
    flex-direction: column;
    alignItems: center;
`;

export const Title = styled.Text`
    fontSize: 72px;
    color: #ffd358;
    fontFamily: Courgette;
    paddingTop: ${getStatusBarHeight() + 56}px;
    paddingBottom: 52px;
`;

export const Description = styled.Text`
    fontSize: 18px;
    fontFamily: Roboto;
    color: #757575;
    textAlign: center;
`;

export const MenuButton = styled.TouchableOpacity`
    width: 232px;
    height: 40px;
    marginBottom: 12px;
    justifyContent: center;
    backgroundColor: #ffd358;
`;

export const MenuText = styled.Text`
    textAlign: center;
    fontSize: 16px;
    color: #434343;
    fontFamily: Roboto;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 44px;
`;

export const LoginButton = styled.Button`
    fontSize: 16px;
    color: #88C9BF;
    fontFamily: Roboto;
`;
