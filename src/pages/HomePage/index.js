import { actions } from 'sdk';
import HomePage from './HomePage';

let components = [
  {
    name: 'HomePage@codeby.codeby-default',
    constructor: HomePage
  }
];

actions.ComponentActions.register(components);
