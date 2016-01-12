import React from 'react';
import './CategoryList.less';
import CategoryOption from './CategoryOption/CategoryOption';

class CategoryList extends React.Component {
  render() {
    let content = this.props.categories.map((category) => {
      let slug = `/${this.props.parentSlug}/${category.get('slug')}/c`;

      return (
        <CategoryOption
          key={category.get('name')}
          name={category.get('name')}
          slug={slug}
          closeExplorerPanel={this.props.closeExplorerPanel}
        />
      );
    });

    return (
      <ul className="CategoryList">
        { content }
      </ul>
    );
  }
}

export default CategoryList;
