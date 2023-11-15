import { RequestConfig } from "../dataverse.dto/request.config";
import { DataverseQueries } from "./Dataverse.Queries.Interface";
import { DataverseBaseClass } from "./DataverseQueries.BaseClass";

export class AvaliacaoDataverse extends DataverseBaseClass implements DataverseQueries {
    private readonly url = "https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_avaliacaos"
    
    async getData(): Promise<RequestConfig> {
        let http_header = await this.getHeader()
        return new RequestConfig(this.url, http_header)
    }

    async insertData(data: any): Promise<RequestConfig> {
        let http_header = await this.getHeader()
        return new RequestConfig(this.url, http_header, data)
    }

    async updateData(data: string, id: string, field: string): Promise<RequestConfig> {
       //trato o valor de data para ser aceito na req
        let http_header = await this.getHeader()
        return new RequestConfig(`${this.url}(${id})/${field}`, http_header, data)
    }
}