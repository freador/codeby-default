import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';

class HeaderSearchButton extends React.Component {

  render() {
    return (
      <button className="HeaderSearchButton pull-right" onTouchTap={this.props.handleSearchTap}>
        <div className="HeaderSearchButton__inner clearfix">
          <SVGIcon className="HeaderSearchButton__svg" svg={searchIcon} width={15} height={18}/>
        </div>
      </button>
    );
  }
}

export default HeaderSearchButton;
