import { IsBoolean,IsDate, IsDateString, IsNumber, IsOptional, IsString, isDate } from "class-validator"

export class CreateAvaliacao{
    @IsBoolean()
    cr0bb_presenca
    @IsString()//nao consigo usar o isdateString
    cr0bb_datapresenca
    
    @IsOptional()
    @IsNumber()
    cr0bb_participacao
    
    @IsOptional()
    @IsNumber()
    cr0bb_relacionamentointerpessoal

    @IsOptional()
    @IsNumber()
    cr0bb_cumprimentodemetas
    
    @IsOptional()
    @IsNumber()
    cr0bb_habilidadestecnicas?

    @IsString()
    cr0bb_idaluno
}