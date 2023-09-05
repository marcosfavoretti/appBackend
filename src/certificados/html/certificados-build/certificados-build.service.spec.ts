import { Test, TestingModule } from '@nestjs/testing';
import { CertificadosBuildService } from './certificados-build.service';

describe('CertificadosBuildService', () => {
  let service: CertificadosBuildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificadosBuildService],
    }).compile();

    service = module.get<CertificadosBuildService>(CertificadosBuildService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
