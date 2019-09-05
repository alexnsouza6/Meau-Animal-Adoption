import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const DescriptionContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    margin: 0 48px;
`;

export const Menu = styled.View`
    justifyContent: space-evenly;
    flex-direction: column;
    alignItems: center;
`;

export const Title = styled.Text`
    font-size: 72px;
    color: #ffd358;
    font-family: Courgette;
    padding-top: ${getStatusBarHeight() + 56}px;
    padding-bottom: 52px;
`;

export const Description = styled.Text`
    font-size: 16px;
    font-family: Roboto;
    color: #757575;
    text-align: center;
`;

export const MenuButton = styled.Text`
    width: 232px;
    height: 40px;
    background-color: #ffd358;
`;
