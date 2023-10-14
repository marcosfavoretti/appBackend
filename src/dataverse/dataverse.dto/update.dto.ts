import { IsString } from "class-validator";

export class UpdateDto{
    @IsString()
    id
    @IsString()
    field
    @IsString()
    data
}