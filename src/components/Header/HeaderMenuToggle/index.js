import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger_icon.svg';
import hamburgerImg from 'assets/icons/hamburger_icon.png';

class HeaderMenuToggle extends React.Component {
  render() {
    return (
      <div className="HeaderMenuToggle col-xs-1 visible-xs" onTouchTap={this.props.handleMenuTap}>
        <SVGIcon className="HeaderMenuToggle__svg" svg={hamburgerIcon} fallback={hamburgerImg} width={18} height={18} fill="#153243" />
      </div>
    );
  }
}

export default HeaderMenuToggle;
