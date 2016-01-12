import React from 'react';
import { stores } from 'sdk';
import './SkuSelector.less';

const Img = stores.ComponentStore.state.getIn(['Img@vtex.storefront-sdk', 'constructor']);

class VariationButton extends React.Component {

  getAvailability = (value, valueName) => {
    let availability = 0;
    let skus = this.props.skus;
    if (this.props.facets.length >= 1) {
      this.props.facets.forEach((facet) => {
        if (facet.name != valueName) {
          skus = this.props.filteredSkus;
        }
      });
    }
    skus.forEach(function(sku) {
      sku.properties.forEach((property)=> {
        if (property.facet.values[0] === value && availability === 0) {
          return availability = sku.offers[0].availability;
        }
      });
    });
    return availability;
  }

  getImgByVariation = (variationName, variationValue) => {
    let img;
    this.props.skus.forEach(function(sku) {
      sku.properties.forEach(function(property) {
        if (property.facet.name === variationName) {
          if (property.facet.values[0] === variationValue) {
            img = sku.images[0].src;
          }
        }
      });
    });
    return img;
  }

  changeState = (ev) => {
    ev.preventDefault();
    let displayType = null;
    if (this.props.variationName === 'Cor') {
      displayType = this.getImgByVariation(this.props.variationName, this.props.value);
    }
    if (this.getAvailability(this.props.value, this.props.variationName) > 0) {
      this.props.isActive ? this.props.removeFacet(this.props.variationName) :
      this.props.addFacet(this.props.variationName, this.props.value, displayType);
    }
  }

  displayValue = () => {
    if (this.props.variationName === 'Tamanho') {
      return (
        <button className="v-dream__selector-btn" data-is-active={this.props.isActive}
        data-is-available={this.getAvailability(this.props.value, this.props.variationName) > 0}
        onTouchTap={this.changeState}>
          { this.props.value }
        </button>);
    } else if (this.props.variationName === 'Cor') {  // if displayType === image (editor)
      return (
        <button className="v-clean-btn"
                data-is-available={this.getAvailability(this.props.value, this.props.variationName) > 0}
                data-is-active={this.props.isActive} onTouchTap={this.changeState}>
          <Img className=" v-dream__selector-img"
          src={this.getImgByVariation(this.props.variationName, this.props.value)}
          width={200} height={235}/>
        </button>);
    }
  }

  render() {
    return (
      <div className="col-xs-2 v-dream__btn-align ">
        { this.displayValue() }
      </div>
    );
  }
}

export default VariationButton;
