import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import './ProductPage.less';
import Product from 'components/Product/Product';

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <Header areaPath="product" />
        {this.props.loading ? <div>Carregando</div> : <Product {...this.props.product}/>}
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;
