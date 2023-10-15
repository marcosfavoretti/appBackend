import { IsString } from "class-validator";

export class Logindto{
    @IsString()
    user
    @IsString()
    password
}