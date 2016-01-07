import React from 'react';
import './HomePage.less';
import { actions, stores } from 'sdk';
import HelloWorld from 'components/HelloWorld/HelloWorld';

// const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class HomePage extends React.Component {
  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.AreaActions.getAreaResources({currentURL, id: 'home'});
    }
  }
  
  render() {
    return (
      <div>
        <HelloWorld />
        <p className="message">Crie, construa, inove!</p>
      </div>
    );
  }
}

export default HomePage;
