import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { AlunosDataverse } from './interfaces/DataverseAlunos';
import { AvaliacaoDataverse } from './interfaces/DataverseAvaliacao';

@Controller('dataverse')
export class DataverseController {
  alunos = new AlunosDataverse()
  avaliacao = new AvaliacaoDataverse()
  constructor(private readonly dataverseService: DataverseService) {}
  
  @Get('alunos')
  async getAluno(@Param() param: any){
      return await this.dataverseService.getData(this.alunos)
  }

  @Get('avaliacao')
  async getAvaliacao(@Param() param: any){
      return await this.dataverseService.getData(this.avaliacao)
  }

  @Post('avaliacao')
  async createAvaliacao(@Body() body:any){
      return await this.dataverseService.insertData(this.avaliacao, body)
  }

}
