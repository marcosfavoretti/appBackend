import { Controller, Get, Param} from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { AlunosDataverse } from './interfaces/DataverseAlunos';
import { AvaliacaoDataverse } from './interfaces/DataverseAvaliacao';

@Controller('dataverse')
export class DataverseController {
  constructor(private readonly dataverseService: DataverseService) {}
  
  @Get('alunos')
  async getAluno(@Param() param: any){
      return await this.dataverseService.getData(new AlunosDataverse())
  }

  @Get('avaliacao')
  async getAvaliacao(@Param() param: any){
      return await this.dataverseService.getData(new AvaliacaoDataverse())
  }

}
