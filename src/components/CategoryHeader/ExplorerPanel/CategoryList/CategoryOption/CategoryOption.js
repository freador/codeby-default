import React from 'react';
import { history } from 'sdk';
import './CategoryOption.less';
import SVGIcon from 'utils/SVGIcon';
import frontArrowIcon from 'assets/icons/frontArrow_icon.svg';
import frontArrowImg from 'assets/icons/frontArrow_icon.png';

class CategoryOption extends React.Component {
  handleTouchTap = () => {
    this.props.closeExplorerPanel();
    history.pushState(null, this.props.slug, { pageSize: 5 });
  }

  render() {
    return (
      <li className="CategoryOption" onTouchTap={this.handleTouchTap}>
        <button className="CategoryOption__button">
          <span className="CategoryOption__label">
            { this.props.name }
          </span>
          <SVGIcon
            className="CategoryOption__icon"
            svg={frontArrowIcon}
            fallback={frontArrowImg}
            width={15}
            cleanupExceptions={['width', 'height']}
            fill='#5C6F7F'
          />
        </button>
      </li>
    );
  }
}

export default CategoryOption;
