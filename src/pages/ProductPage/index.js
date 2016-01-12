import { actions } from 'sdk';
import ProductPage from './ProductPage';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import SelectVariation from  'react-proxy?name=SelectVariation!components/Product/SelectVariation';
import SkuSelector from  'react-proxy?name=SkuSelector!components/Product/SkuSelector';

let components = [
  {
    name: 'ProductPage@vtex.storefront-theme',
    constructor: ProductPage
  },
  {
    name: 'AddToCartButton@vtex.storefront-theme',
    constructor: AddToCartButton
  },
  {
    name: 'SkuSelector@vtex.storefront-theme',
    constructor: SkuSelector
  },
  {
    name: 'SelectVariation@vtex.storefront-theme',
    constructor: SelectVariation
  }
];

actions.ComponentActions.register(components);
