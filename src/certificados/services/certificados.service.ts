import { Injectable } from '@nestjs/common';
import { AlunoInfo } from '../certificado.dto/aluno.certificado.dto';
import { CertificadosBuildService } from '../html/certificados-build/certificados-build.service';

@Injectable()
export class CertificadosService {
    constructor(private certificado_build: CertificadosBuildService){}
    async generate(alunoinfo: AlunoInfo): Promise<string>{
       let path = await this.certificado_build.generateCertificado(alunoinfo)
        return path
    }

}
