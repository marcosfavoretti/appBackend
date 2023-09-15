import {IsString, IsDateString} from "class-validator"
export class AlunoInfo{
    @IsString()
    rg: string
    @IsString()
    empresa:string
    @IsDateString()
    inicio: Date
    @IsDateString()
    fim: Date
}