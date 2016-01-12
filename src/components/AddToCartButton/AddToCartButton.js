import React from 'react';
import { editable } from 'vtex-editor';
import './AddToCartButton.less';

@editable({
  name: 'AddToCartButton@vtex.storefront-theme',
  title: 'Adicionar ao Carrinho'
})
class AddToCartButton extends React.Component {
  static defaultProps = {
    quantity: 1,
    seller: '1'
  }

  render() {
    let addUrl = this.props.cartValidation ? `/checkout/cart/add?sku=${this.props.skuId}&qty=${this.props.quantity}&seller=${this.props.seller}&redirect=true&sc=1` : null;

    let label = 'Adicionar ao carrinho';
    let color = '#75CCB1';
    let boxShadowColor = '#57c1a0';

    if (this.props.settings) {
      label = this.props.settings.get('label');
      color = this.props.settings.get('color');
      boxShadowColor = this.props.settings.get('boxShadowColor');
    }
    return (
      <button className={this.props.className} style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}>
        <a href={addUrl}>
          {label}
        </a>
      </button>
    );
  }


}

export default AddToCartButton;
