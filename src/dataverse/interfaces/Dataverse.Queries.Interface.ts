import { RequestConfig } from "../dataverse.dto/request.config";

export interface DataverseQueries{//volta o obj config para a http request
     getData():Promise<RequestConfig>;
     insertData(data: any)
}