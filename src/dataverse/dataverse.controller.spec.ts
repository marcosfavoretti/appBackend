import { Test, TestingModule } from '@nestjs/testing';
import { DataverseController } from './dataverse.controller';
import { DataverseService } from './dataverse.service';

describe('DataverseController', () => {
  let controller: DataverseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataverseController],
      providers: [DataverseService],
    }).compile();

    controller = module.get<DataverseController>(DataverseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
