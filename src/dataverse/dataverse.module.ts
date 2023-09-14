import { Module } from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { DataverseController } from './dataverse.controller';
import { MicrosoftTokenService } from './service/microsoft-token/microsoft-token.service';

@Module({
  controllers: [DataverseController],
  providers: [DataverseService, MicrosoftTokenService],
})
export class DataverseModule {}
