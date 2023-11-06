import { Body, Controller, Get, Param, Post, Put, Response, UsePipes, ValidationPipe} from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { AlunosDataverse } from './interfaces/DataverseAlunos';
import { AvaliacaoDataverse } from './interfaces/DataverseAvaliacao';
import { UpdateDto } from './dataverse.dto/update.dto';
import { CreateAvaliacao } from './dataverse.dto/CreateAvaliacao.dto';
import { Logindto } from './dataverse.dto/Login.dto';
import { LoginDataverse } from './interfaces/DataverseLogin';
import { CadastroDto } from './dataverse.dto/insertLogin.dto';

@Controller('dataverse')
export class DataverseController {
  alunos = new AlunosDataverse()
  avaliacao = new AvaliacaoDataverse()
  login = new LoginDataverse()

  constructor(private readonly dataverseService: DataverseService) {}
  
  @Get('alunos')
  async getAluno(@Param() param: any){
      return await this.dataverseService.getData(this.alunos)
  }

  @Get('avaliacao/:id')
  async getAvaliacaofilter(@Param() filter?: any){//passar por parametro ids
      return await this.dataverseService.getData(this.avaliacao, filter.id)
  }

  @Get('avaliacao')
  async getAvaliacao(){//passar por parametro ids
      return await this.dataverseService.getData(this.avaliacao)
  }

  @Post('avaliacao')
  @UsePipes(new ValidationPipe())
  async createAvaliacao(@Body() body: CreateAvaliacao){
      return await this.dataverseService.insertData(this.avaliacao, body)
  }

  @Put('avaliacao')
  @UsePipes(new ValidationPipe())
    async updateAvaliacao(@Body() body: UpdateDto){//criar dto para isso
    return this.dataverseService.updateData(this.avaliacao, body)
  }

  @Post("login")
  @UsePipes(new ValidationPipe())
   async verifyUser(@Body() logindto : Logindto, @Response() res){
      let response = await this.dataverseService.verifyLogin(logindto, this.login)
      res.json(response)
    }

    @Post("login/cadastro")
    @UsePipes(new ValidationPipe())
     async cadastro(@Body() logindto : CadastroDto, @Response() res){
        await this.dataverseService.verifyAvaiable(logindto, this.login)
        let response = await this.dataverseService.insertData(this.login, logindto)
        res.json(response)
      }

}
