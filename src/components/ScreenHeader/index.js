import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'react-native';
import { Header, HeaderContainer, HeaderText } from './style';


class ScreenHeader extends React.Component {
  // Structure for the navigatin Drawer
  toggleDrawer = () => {
    // Props to open/close the drawer
    const { navigationProps } = this.props;
    navigationProps.toggleDrawer();
  };

  render() {
    const { title, color } = this.props;
    return (
      <HeaderContainer style={{ backgroundColor: color }}>
        <StatusBar backgroundColor="#f7a800" barStyle="light-content" />
        <Header>
          <Icon name="menu" size={28} color="#434343" onPress={this.toggleDrawer.bind(this)} />
          <HeaderText>{ title }</HeaderText>
        </Header>
        <Icon name="search" size={28} color="#434343" />
      </HeaderContainer>
    );
  }
}

ScreenHeader.propTypes = {
  navigationProps: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ScreenHeader;
