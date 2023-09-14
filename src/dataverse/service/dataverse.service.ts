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

    async insertData(query: DataverseQueries){
      let https_config = await query.getData();
       
      let res = axios.post(https_config.url,https_config.data,https_config.header).then(
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

}
