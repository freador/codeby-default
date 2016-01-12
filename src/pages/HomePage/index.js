import { actions } from 'sdk';
import HomePage from './HomePage';

let components = [
  {
    name: 'HomePage@vtex.storefront-theme',
    constructor: HomePage
  }
];

actions.ComponentActions.register(components);
