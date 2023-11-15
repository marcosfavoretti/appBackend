import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MicrosoftToken } from 'src/MicrosoftToken/Microsoft.token';
import { HttpException } from '@nestjs/common';
import { DataverseQueries } from '../interfaces/Dataverse.Queries.Interface';
import { UpdateDto } from '../dataverse.dto/update.dto';
import { type } from 'os';
import { Logindto } from '../dataverse.dto/Login.dto';
import { LoginDataverse } from '../interfaces/DataverseLogin';
import { CadastroDto } from '../dataverse.dto/insertLogin.dto';

@Injectable()
export class DataverseService {
    constructor(){}
    async verifyLogin(logindto: Logindto, dataverseLogin: LoginDataverse) {
        //const https_config = await dataverseLogin.getData();
        //const res = await axios.get(https_config.url, https_config.header);
        const res = await this.getData(dataverseLogin)
        const found_user = res.value.find((filt) => {
          return filt.cr0bb_usuario === logindto.user && filt.cr0bb_senha === logindto.password;
        });
    
        if (!found_user) throw new HttpException('Nenhum usuário encontrado', 404);
        return found_user;

    }
    async verifyAvaiable(new_login: CadastroDto, dataverseLogin: LoginDataverse){
      const {value} = await this.getData(dataverseLogin)
      const filter = value.find((filt)=>{
        if(filt.cr0bb_usuario === new_login.cr0bb_usuario && new_login.cr0bb_senha === filt.cr0bb_senha){
          return filt
        }
      })      
      if(filter) throw new HttpException('Usuario ja em uso', 500)
      return
    }
    async getData(query: DataverseQueries, filter?: string){
       let https_config = await query.getData();
       
       let res = axios.get(https_config.url, https_config.header).then(
        (res) => {
          if (filter === undefined) return res.data;
          else {
            let filteredArray = res.data.value.filter((filt) => filt.cr0bb_idaluno === filter);
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
       
      let res = axios.post(https_config.url, https_config.data, https_config.header).then(
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
      return res    
    }

      private convertObjectKeysToStrings(obj: Object) {
        const entries = Object.entries(obj);
        for (let [key, value] of entries) {
          obj[key] = String(value)//passo tudo para string
        }
        return obj
      }

}
