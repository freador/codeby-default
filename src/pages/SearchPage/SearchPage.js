import React from 'react';
import { stores, actions } from 'sdk';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class SearchPage extends React.Component {
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
    let path = this.props.location.pathname + this.props.location.search;
    let actionConfig = {
      currentURL: path,
      id: 'search',
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
        <Header areaPath="search" />
        <Area
          id="search/search-header"
          searchTerm={this.props.params.searchTerm}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <Area
          id="search/product-list"
          areaPath="search"
          location={this.props.location}
          grid={this.state.grid}
        />
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
