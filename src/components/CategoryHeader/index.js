import { actions } from 'sdk';
import CategoryHeader from './CategoryHeader';

let components = [
  {
    name: 'CategoryHeader@vtex.storefront-theme',
    constructor: CategoryHeader
  }
];

actions.ComponentActions.register(components);

