import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, HeaderContainer, HeaderText } from './style';

const ScreenHeader = ({
  title, color, iconLeft, iconRight, navigation, route,
}) => (
  <HeaderContainer style={{ backgroundColor: color }}>
    <Header>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Icon name={iconLeft} size={28} color="#434343" />
      </TouchableOpacity>
      <HeaderText> {title}</HeaderText>
    </Header>
    <Icon name={iconRight} size={28} color="#434343" />
  </HeaderContainer>
);

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconLeft: PropTypes.string.isRequired,
  iconRight: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.string.isRequired,
};

export default ScreenHeader;
