import { Module } from '@nestjs/common';
import { CertificadosController } from '../certificados.controller';
import { CertificadosService } from '../services/certificados.service';
import { CertificadosBuildService } from '../html/certificados-build/certificados-build.service';

@Module({
  controllers: [CertificadosController],
  providers: [CertificadosService, CertificadosBuildService],
})
export class CertificadosModule {}
