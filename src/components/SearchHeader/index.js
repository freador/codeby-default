import { actions } from 'sdk';
import SearchHeader from './SearchHeader';

let components = [
  {
    name: 'SearchHeader@vtex.storefront-theme',
    constructor: SearchHeader
  }
];

actions.ComponentActions.register(components);

