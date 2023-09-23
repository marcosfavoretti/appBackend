import { Injectable } from '@nestjs/common';
import { MicrosoftTokenService } from './microsoft-token/microsoft-token.service';
import axios from 'axios';
import { MicrosoftToken } from 'src/MicrosoftToken/Microsoft.token';
import { HttpException } from '@nestjs/common';
import { DataverseQueries } from '../interfaces/Dataverse.Queries.Interface';

@Injectable()
export class DataverseService {
    constructor(){}

    async getData(query: DataverseQueries){
       let https_config = await query.getData();
       
       let res = axios.get(https_config.url, https_config.header).then(
        (res)=>{
          return res.data
        }
       ).catch(
        (err)=>{
          console.log(err)
          throw new HttpException("nao foi possivel consultar os dados", 500)
        }
       )
       return res
    }

    async insertData(query: DataverseQueries,body: any){
      let https_config = await query.insertData(body);
       
      let res = axios.post(https_config.url,https_config.data,https_config.header).then(
       (res)=>{
         return res.data
       }
      ).catch(
       (err)=>{
         console.log(err)
         throw new HttpException("nao foi inserir os dados", 500)
       }
      )
      return res
    }
    
    /*
    {
      "cr0bb_presenca": "false",
      "cr0bb_datapresenca": "20/01/2023",
      "cr0bb_participacao": "0",
      "cr0bb_relacionamentointerpessoal": "0",
      "cr0bb_cumprimentodemetas": "0",
      "cr0bb_habilidadestecnicas": "0",
      "cr0bb_idaluno":"1"
      }
    */


}
