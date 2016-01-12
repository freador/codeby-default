import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderCart from './HeaderCart';
import HeaderSearchButton from './HeaderSearchButton';
import HeaderMenuToggle from './HeaderMenuToggle';
import './style.less';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class Header extends React.Component {
  state = {
    isMenuOpen: false,
    isSearchOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleSearchTap = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Area
          id={`${this.props.areaPath}/navigation-menu`}
          key="NavigationMenu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header">
        <HeaderTop />
        <div className="Header__inner clearfix">
          <HeaderMenuToggle handleMenuTap={this.handleMenuTap} />
          <HeaderLogo />
          <HeaderCart />
          <HeaderSearchButton handleSearchTap={this.handleSearchTap} />
          {/*<Area
            id={`${this.props.areaPath}/search-bar`}
            visible={this.state.isSearchOpen}
            handleSearchTap={this.handleSearchTap}
          />
          */}
          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Header;
