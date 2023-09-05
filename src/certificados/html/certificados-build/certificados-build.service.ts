import { Injectable, HttpException} from '@nestjs/common';
import { AlunoInfo } from 'src/certificados/certificado.dto/aluno.certificado.dto';
import { HtmlTamplate } from './Htmltamplate.build';
const conversor_to_pdf = require('html-pdf-node');
const fs = require("fs") 
import { HttpStatusCode } from 'axios';
@Injectable()
export class CertificadosBuildService {
    private readonly options = { format: 'A4',landscape: true,  localUrlAccess: true};
      
    private readonly out_dir = "C:/Users/Marcos/Documents/backend_UPX/itemm-back/src/certificados/Certificados_repository"

    async generateCertificado(alunoinfo: AlunoInfo): Promise<string>{
        console.log(alunoinfo)
        let htmlContent = {content: new HtmlTamplate(alunoinfo).htmlGenerateCertificado()}
        let buffer = await conversor_to_pdf.generatePdf(htmlContent, this.options)
        return await this.createFile(this.out_dir+`/${alunoinfo.rg}.pdf`, buffer)
    }

    private createFile(path_arquivo: string , buffer: any): string{
        console.log(path_arquivo)
        fs.writeFile(path_arquivo, buffer, (err) => {
            if (err) {
                throw new HttpException("erro ao criar o arquivo", HttpStatusCode.InternalServerError)
            } else {
                console.log('PDF salvo com sucesso como'+path_arquivo);
            }
        });
        return path_arquivo
    }
}
