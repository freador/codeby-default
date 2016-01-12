import React from 'react';
import './ExplorerPanel.less';
import CategoryList from './CategoryList/CategoryList';
import SVGIcon from 'utils/SVGIcon';
import pullArrowIcon from 'assets/icons/pullArrow_icon.svg';
import pullArrowImg from 'assets/icons/pullArrow_icon.png';

class ExplorerPanel extends React.Component {
  handleTouchTap = () => {
    this.props.closeExplorerPanel();
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <aside className="ExplorerPanel" data-is-open={this.props.isOpen}>
        <div className="ExplorerPanel__content clearfix">
          <div className="ExplorerPanel__header clearfix container">
            <h1 className="ExplorerPanel__title">
              { this.props.category.get('name') }
            </h1>
            <span className="ExplorerPanel__subtitle">Subcategorias</span>
          </div>
          <CategoryList
            categories={this.props.category.get('children') }
            parentSlug={this.props.category.get('slug')}
            closeExplorerPanel={this.props.closeExplorerPanel}
          />
          <button
            className="ExplorerPanel__pull-button col-xs-2 col-xs-push-5"
            onTouchTap={this.handleTouchTap}
          >
            <SVGIcon
              className="CategoryOption-icon"
              svg={pullArrowIcon}
              fallback={pullArrowImg}
              width={30}
              cleanupExceptions={['width', 'height']}
              fill='#5C6F7F'
            />
          </button>
        </div>
      </aside>
    );
  }
}

export default ExplorerPanel;
