import React from 'react';
import { stores, actions } from 'sdk';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class CategoryPage extends React.Component {
  state = {
    grid: false
  }

  componentWillMount() {
    this.getResources();
  }

  componentDidUpdate() {
    this.getResources();
  }

  getResources = () => {
    let path = window.location.pathname + window.location.search;
    let actionConfig = {
      currentURL: path,
      id: 'category',
      params: this.props.params,
      query: this.props.location.query
    };

    if (!stores.ResourceStore.getState().get(path)) {
      actions.AreaActions.getAreaResources(actionConfig);
    }
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  render() {
    return (
      <div>
        <Header areaPath="category" />
        <Area
          id="category/category-header"
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <Area
          id="category/product-list"
          areaPath="category"
          location={this.props.location}
          grid={this.state.grid}
        />
        <Footer />
      </div>
    );
  }
}

export default CategoryPage;
