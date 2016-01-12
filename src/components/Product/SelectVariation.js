import React from 'react';
import VariationButton from './VariationButton';

class SelectVariation extends React.Component {

  render() {
    let variationName = this.props.skuVariations.name;
    let skus = this.props.skus;
    let variationKey = this.props.skuVariations.values;

    return (
      <div className="col-xs-12 v-dream__selector-row" key={variationName}>
        <h3 className="v-dream__selector__title">{variationName}:</h3>
        <div>
          {
            variationKey.map((variation) => {
              let isActive = false;
              this.props.facets.forEach(function(facet) {
                if (facet.value === variation) {
                  isActive = true;
                }
              });
              return (
                <div key={variation}>
                  <VariationButton value={variation} variationName={variationName}
                                   skus={skus} filteredSkus={this.props.filteredSkus}
                                   isActive={isActive} facets={this.props.facets}
                                   addFacet={this.props.addFacet} removeFacet={this.props.removeFacet}/>
                </div>
            );
            })
          }
        </div>
      </div>
    );
  }
}

export default SelectVariation;
