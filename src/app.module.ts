import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificadosModule } from './certificados/module/certificados.module';
import { DataverseModule } from './dataverse/dataverse.module';

@Module({
  imports: [CertificadosModule, DataverseModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
