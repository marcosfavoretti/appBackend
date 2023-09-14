import { PublicClientApplication } from "@azure/msal-node";
import {dataverseAmbiente} from "./AmbienteDateverse.variaveis";
import { DataverseUser } from "./Dataverse.User";

const { exec } = require('child_process');

export class MicrosoftToken{


      public getToken(){
        
        const pca = this.getAplicationContext()
        return this.generateToken(pca) //volta o token como string
        
      }

      private getAplicationContext(): PublicClientApplication{
        return new PublicClientApplication({
          auth: {
            clientId: dataverseAmbiente.clientId,
            authority: dataverseAmbiente.authority,
          },
        });
      }

      private async generateToken(pca : PublicClientApplication): Promise<string>{
        const token = pca.acquireTokenByUsernamePassword({
          username: DataverseUser.user,
          password: DataverseUser.password,
          scopes: dataverseAmbiente.scopes,
        }).then((response) => {
            return response.accessToken
        }).catch((error) => {
          console.error('Erro ao adquirir o token:', error);
          throw new Error('Não foi possivel gerar o token')
        });
        if(!token){
          throw new Error('token inexistente')
        }
        return token
      }
    }
