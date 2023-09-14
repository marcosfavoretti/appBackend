import { MicrosoftToken } from "src/MicrosoftToken/Microsoft.token"

export abstract class DataverseBaseClass{  
    
    private MicrosoftGeneratorToken = new MicrosoftToken()
    private current_token!: string 
    private http_header = {
      headers:{
        "Accept":" application/json",
        "OData-MaxVersion": '4.0',
        "OData-Version": '4.0',
        "Content-Type": "application/json; charset=utf-8",
      }
    }

    async getHeader(){
        this.http_header.headers["Authorization"] = await this.getToken();
        return this.http_header
    }

    private async getToken(){
        return await this.MicrosoftGeneratorToken.getToken()
    }

}