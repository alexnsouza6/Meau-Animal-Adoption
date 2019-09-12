import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, HeaderContainer, HeaderText } from './style';

const ScreenHeader = ({ title }) => (
  <HeaderContainer>
    <Header>
      <Icon name="menu" size={28} color="#434343" />
      <HeaderText> {title}</HeaderText>
    </Header>
    <Icon name="search" size={28} color="#434343" />
  </HeaderContainer>
);

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ScreenHeader;
