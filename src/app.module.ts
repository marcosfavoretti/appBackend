import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertificadosModule } from './certificados/module/certificados.module';


@Module({
  imports: [CertificadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
