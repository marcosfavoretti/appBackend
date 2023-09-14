import { Injectable } from '@nestjs/common';
import EventEmitter from 'events';
import { stdout } from 'process';
const { exec } = require('child_process');
@Injectable()
export class MicrosoftTokenService {
    public isLogger: EventEmitter
    

    async getToken( dataverse_link: string  ,user: string, password: string):Promise<any>{
       await exec(`npx dataverse-auth ${dataverse_link}`, (error, stdout, stderr) => {
            if (error) {
              console.error(`Erro ao executar o comando: ${error}`);
              throw new Error('problema ao gerar o token')
             // return;
            }
            console.log(`Saída do comando:\n${stdout}`);
          });

          return stdout
        }   

}
