import { Test, TestingModule } from '@nestjs/testing';
import { MicrosoftTokenService } from './microsoft-token.service';

describe('MicrosoftTokenService', () => {
  let service: MicrosoftTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrosoftTokenService],
    }).compile();

    service = module.get<MicrosoftTokenService>(MicrosoftTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
