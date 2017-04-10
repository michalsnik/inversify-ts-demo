import { Container } from 'inversify';
import TYPES from './types';
import * as interfaces from './interfaces';
import RepairService from './RepairService';
import Hammer from './Hammer';
import Wrench from './Wrench';

// Declare bindings
const container = new Container();
container.bind<interfaces.RepairServiceInterface>(TYPES.RepairService).to(RepairService);
container.bind<interfaces.Tool>(TYPES.Hammer).to(Hammer);
container.bind<interfaces.Tool>(TYPES.Wrench).to(Wrench);

container.bind<interfaces.Tool>(TYPES.Tool).to(Hammer);
container.bind<interfaces.Tool>(TYPES.Tool).to(Wrench);

export default container;
