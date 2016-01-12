import { actions } from 'sdk';
import CategoryPage from './CategoryPage';

let components = [
  {
    name: 'CategoryPage@vtex.storefront-theme',
    constructor: CategoryPage
  }
];

actions.ComponentActions.register(components);

