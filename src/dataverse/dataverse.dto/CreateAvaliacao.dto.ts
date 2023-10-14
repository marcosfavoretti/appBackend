import { IsBoolean,IsDate, IsDateString, IsNumber, IsString, isDate } from "class-validator"

export class CreateAvaliacao{
    @IsBoolean()
    cr0bb_presenca
    @IsString()//nao consigo usar o isdateString
    cr0bb_datapresenca
    @IsNumber()
    cr0bb_participacao
    @IsNumber()
    cr0bb_relacionamentointerpessoal
    @IsNumber()
    cr0bb_cumprimentodemetas
    @IsNumber()
    cr0bb_habilidadestecnicas
    @IsString()
    cr0bb_idaluno
}