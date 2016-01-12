import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';
import { editable } from 'vtex-editor';

@editable({
  name: 'SkuSelector@vtex.storefront-theme',
  title: 'SkuSelector'
})
class SkuSelector extends React.Component {
  render() {

    return (
      <div className="SkuSelector row clearfix">
        <div className="SkuSelector__section col-xs-12">
        {
          this.props.skuVariations.map((variationType) => {
            return (
              <div className="SkuSelector__row row" key={variationType.name}>
                <SelectVariation skus={this.props.skus} filteredSkus={this.props.filteredSkus}
                                 addFacet={this.props.addFacet} removeFacet={this.props.removeFacet}
                                 facets={this.props.facets} skuVariations={variationType}
                                 id="select-variation" route="product"/>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default SkuSelector;
