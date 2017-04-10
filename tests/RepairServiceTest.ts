import 'reflect-metadata';
import { expect } from 'chai';
import * as sinon from 'sinon';
import container from '../src/container';
import TYPES from '../src/types';
import * as interfaces from '../src/interfaces';

describe('RepairService', () => {
  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });

  it('Uses hammer to nail a picture', () => {
    const hammerMock = {
      use: sinon.spy()
    };

    container.unbind(TYPES.Hammer);
    container.bind<interfaces.Tool>(TYPES.Hammer).toConstantValue(hammerMock);

    const repairService: interfaces.RepairServiceInterface = container.get<interfaces.RepairServiceInterface>(TYPES.RepairService);
    repairService.nailPicture();

    expect(hammerMock.use.calledOnce).eql(true);
  });
});