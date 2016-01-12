import { actions } from 'sdk';
import SearchPage from './SearchPage';

let components = [
  {
    name: 'SearchPage@vtex.storefront-theme',
    constructor: SearchPage
  }
];

actions.ComponentActions.register(components);

