import { RequestConfig } from "../dataverse.dto/request.config";
import { DataverseQueries } from "./Dataverse.Queries.Interface";
import { DataverseBaseClass } from "./DataverseQueries.BaseClass";

export class AvaliacaoDataverse extends DataverseBaseClass implements DataverseQueries{

    async getData(filter?: string):Promise<RequestConfig> {
        let http_header = await this.getHeader()
        return new RequestConfig("https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_avaliacaos", http_header)
    }
   
    async insertData(data: any): Promise<RequestConfig> {
        let http_header = await this.getHeader()
        return new RequestConfig("https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_avaliacaos", http_header, data)
    }

}