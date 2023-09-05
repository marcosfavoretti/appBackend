import {IsString, IsDateString} from "class-validator"
export class AlunoInfo{
    @IsString()
    rg: string
    @IsDateString()
    inicio: Date
    @IsDateString()
    fim: Date
}