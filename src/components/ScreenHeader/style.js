import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Status = styled.StatusBar`
  backgroundColor: blue;
`;

export const HeaderContainer = styled.View`
  marginTop: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0};
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  height: 56;
  paddingRight: 12;
`;

export const Header = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  marginLeft: 20;
`;

export const HeaderText = styled.Text`
  fontFamily: Roboto;
  fontSize: 25;
  fontWeight: 900;
  color: #434343;
  marginLeft: 20;
`;
