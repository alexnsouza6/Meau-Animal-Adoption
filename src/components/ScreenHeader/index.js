import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, HeaderContainer, HeaderText } from './style';


class ScreenHeader extends React.Component {
  // Structure for the navigatin Drawer
  handleClick = (route) => {
    // Props to open/close the drawer
    const { navigation, iconLeft } = this.props;

    if (iconLeft === 'menu') { navigation.toggleDrawer(); } else if (iconLeft === 'arrow-back') { navigation.navigate(route); }
  };

  render() {
    const {
      title, color, iconRight, iconLeft, route,
    } = this.props;
    return (
      <HeaderContainer style={{ backgroundColor: color }}>
        <StatusBar backgroundColor="#f7a800" barStyle="light-content" />
        <Header>
          <TouchableOpacity onPress={() => this.handleClick(route)}>
            <Icon name={iconLeft} size={28} color="#434343" />
          </TouchableOpacity>
          <HeaderText>{ title }</HeaderText>
        </Header>
        <Icon name={iconRight} size={28} color="#434343" />
      </HeaderContainer>
    );
  }
}

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  route: PropTypes.string,
  iconLeft: PropTypes.string.isRequired,
  iconRight: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

ScreenHeader.defaultProps = {
  route: 'Main',
};

export default ScreenHeader;
