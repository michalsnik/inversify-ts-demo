import { injectable } from 'inversify';
import TYPES from './types';
import { Tool } from './interfaces';

@injectable()
export default class Wrench {
  use() {
    console.log('Wrench it is!');
  }
}
