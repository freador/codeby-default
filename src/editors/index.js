import { actions } from 'sdk';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';

let components = [
  {
    name: 'AddToCartButtonEditor@vtex.storefront-theme',
    constructor: AddToCartButtonEditor
  }
];

actions.ComponentActions.register(components);
