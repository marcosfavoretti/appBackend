import { Test, TestingModule } from '@nestjs/testing';
import { DataverseService } from './dataverse.service';

describe('DataverseService', () => {
  let service: DataverseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataverseService],
    }).compile();

    service = module.get<DataverseService>(DataverseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
