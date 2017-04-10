import 'reflect-metadata';
import container from './src/container';
import TYPES from './src/types';
import { RepairServiceInterface } from './src/interfaces';

const repairService: RepairServiceInterface = container.get<RepairServiceInterface>(TYPES.RepairService);
repairService.fixSink();
