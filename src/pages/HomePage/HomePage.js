import React from 'react';
import { actions, stores } from 'sdk';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import Policies from 'components/Policies/Policies';
import './HomePage.less';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class HomePage extends React.Component {
  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.AreaActions.getAreaResources({currentURL, id: 'home'});
    }
  }

  render() {
    return (
      <div className="HomePage">
        <Header areaPath="home" />
        <div className="HomePage__wrapper">
          <div className="HomePage__bannerarea">
            <Area id="home/banner"/>
          </div>
          <div className="HomePage__shelfarea">
            <Area id="home/shelf1"/>
          </div>
          <Policies/>
        </div>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
