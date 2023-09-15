import { Controller, Get, Param, Res, StreamableFile} from '@nestjs/common';
import { CertificadosService } from './services/certificados.service';
import { AlunoInfo } from './certificado.dto/aluno.certificado.dto';
import { createReadStream } from 'fs';




import type { Response } from 'express';

@Controller('certificados')
export class CertificadosController {
  constructor(private readonly certificadosService: CertificadosService) {
  }

    @Get("generate/:rg/:empresa/:inicio/:fim")
    async sendCertificado(@Param() param : AlunoInfo, @Res({ passthrough: true }) res: Response): Promise<StreamableFile>{
        
      let path = await this.certificadosService.generate(param)//passo minhas infos para criar meu arquivo
      const file = createReadStream((path))
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${param.rg}.pdf"`,
      });
      return new StreamableFile(file);
    }

}


