import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MicrosoftToken } from 'src/MicrosoftToken/Microsoft.token';
import { HttpException } from '@nestjs/common';
import { DataverseQueries } from '../interfaces/Dataverse.Queries.Interface';
import { UpdateDto } from '../dataverse.dto/update.dto';
import { type } from 'os';

@Injectable()
export class DataverseService {
    constructor(){}

    async getData(query: DataverseQueries, filter?: string){
       let https_config = await query.getData();
       
       let res = axios.get(https_config.url, https_config.header).then(
        (res) => {
          if (filter === undefined) return res.data;
          else {
            let filteredArray = res.data.value.filter((filt) => filt.cr0bb_idaluno === filter);
            console.log(filteredArray, typeof filteredArray);
            return filteredArray;
          }
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
      let https_config = await query.insertData(this.convertObjectKeysToStrings(body));//no dataverse ele ta aceitando so como string na rest api
       
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


    async updateData(query: DataverseQueries, body: UpdateDto){
      let https_config = await query.updateData(body.data, body.id, body.field);
      console.log(https_config.url)
      let res = axios.put((https_config.url) , {value: https_config.data}, https_config.header).then(
       (res)=>{
         return res.data
       }
      ).catch(
       (err)=>{
         console.log(err)
         throw new HttpException(err, 500)
       }
      )
      return res    }

      private convertObjectKeysToStrings(obj: Object) {
        console.log(obj)
        const entries = Object.entries(obj);
        for (let [key, value] of entries) {
          obj[key] = String(value)//passo tudo para string
        }
        console.log(obj)
        return obj
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
