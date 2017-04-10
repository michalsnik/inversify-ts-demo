import { injectable } from 'inversify';
import TYPES from './types';
import { Tool } from './interfaces';

@injectable()
export default class Hammer implements Tool {
  use() {
    console.log('Hammer time!');
  }
}
