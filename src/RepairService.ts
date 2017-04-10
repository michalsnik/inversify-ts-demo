import { injectable, inject, multiInject } from 'inversify';
import TYPES from './types';
import { Tool, RepairServiceInterface } from './interfaces';

@injectable()
export default class RepairService implements RepairServiceInterface {
  @inject(TYPES.Hammer)
  private hammer: Tool;

  @inject(TYPES.Wrench)
  private wrench: Tool;

  @multiInject(TYPES.Tool)
  private tools: Tool[];

  fixSink() {
    this.hammer.use();
    this.wrench.use();
  };
  
  nailPicture() {
    this.hammer.use();
  };

  fixAll() {
    this.tools.forEach(tool => tool.use());
  }
}
