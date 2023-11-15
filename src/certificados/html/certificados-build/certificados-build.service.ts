import { Injectable, HttpException, HttpStatus,} from '@nestjs/common';
import { AlunoInfo } from 'src/certificados/certificado.dto/aluno.certificado.dto';
import { HtmlTamplate } from './Htmltamplate.build';
const conversor_to_pdf = require('html-pdf-node');
const fs = require("fs") 
import path from 'path';
@Injectable()
export class CertificadosBuildService {
    private readonly options = { format: 'A4',landscape: true,  localUrlAccess: true};
      
    private readonly out_dir = `${__dirname}\\Certificados_repository`

    async generateCertificado(alunoinfo: AlunoInfo): Promise<string>{
        let htmlContent = {content: new HtmlTamplate(alunoinfo).htmlGenerateCertificado()}
        let buffer = await conversor_to_pdf.generatePdf(htmlContent, this.options)
        let rg = alunoinfo.rg.replace(/\./g, "-");
        return await this.createFile(this.out_dir+`/${rg}.pdf`, buffer)
    }   

    private async createFile(path_arquivo: string , buffer: any): Promise<string>{
        let path = await this.frsFile(path_arquivo)//se existir o certificado ja com o RG preciso mudar o caminho
        fs.writeFile(path, buffer, (err) => {
            if (err) {
                throw new HttpException("erro ao criar o arquivo", HttpStatus.INTERNAL_SERVER_ERROR)
            } else {
                console.log('PDF salvo com sucesso como'+path);
            }
        });
        return path
    }

    private async frsFile(path: string, number?: number){
        let idx = number ?? 0 //se nao tem o number ele é zero
        await this.createRepository()
        if(await fs.existsSync(path)){//se tiver o arquivo já ele tem q ir somando
            let new_path = path.slice(0, path.indexOf('.pdf'))+`(${idx++})`+'.pdf'
            return await this.frsFile(new_path, idx)
        }
        return path
    }
    private async createRepository(){ //funçao de criaçao de o repositorio caso nao tenha
        if(await fs.existsSync(this.out_dir)){
            return
        }
        try{
            await fs.promises.mkdir(this.out_dir);

        }
        catch(err){
            console.log(err)
        }
        return
    }


}
