import { MicrosoftToken } from "src/MicrosoftToken/Microsoft.token";
import { DataverseQueries } from "./Dataverse.Queries.Interface";
import { DataverseBaseClass } from "./DataverseQueries.BaseClass";
import { RequestConfig } from "../dataverse.dto/request.config";

export class AlunosDataverse extends DataverseBaseClass implements DataverseQueries {

    async getData(filter?: string):Promise<RequestConfig>{
        let http_header = await this.getHeader()
        return new RequestConfig("https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_alunositemms", http_header)
    }
    async insertData(data: any) {
        let http_header = await this.getHeader()
        return new RequestConfig("https://org5cbe6214.api.crm2.dynamics.com/api/data/v9.2/cr0bb_alunos", http_header, data)
    }
    async updateData(data: any): Promise<RequestConfig> {
        return null;
    }
}