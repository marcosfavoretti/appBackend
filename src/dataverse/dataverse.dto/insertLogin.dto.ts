import { IsString } from "class-validator"

export class CadastroDto{
    @IsString()
    cr0bb_usuario
    @IsString()
    cr0bb_senha
}