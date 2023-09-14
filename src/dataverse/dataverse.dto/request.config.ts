export class RequestConfig{
    url: string
    header: any //aqui pode melhorar para nao deixar como any
    data?: any
    constructor(url: string, header: any, data?: any){
        this.url = url
        this.header = header
        this.data = data
    }
}