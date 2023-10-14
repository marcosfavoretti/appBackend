import { Module } from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { DataverseController } from './dataverse.controller';

@Module({
  controllers: [DataverseController],
  providers: [DataverseService],
})
export class DataverseModule {}
