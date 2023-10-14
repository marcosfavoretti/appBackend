import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { DataverseService } from './service/dataverse.service';
import { AlunosDataverse } from './interfaces/DataverseAlunos';
import { AvaliacaoDataverse } from './interfaces/DataverseAvaliacao';
import { UpdateDto } from './dataverse.dto/update.dto';
import { CreateAvaliacao } from './dataverse.dto/CreateAvaliacao.dto';

@Controller('dataverse')
export class DataverseController {
  alunos = new AlunosDataverse()
  avaliacao = new AvaliacaoDataverse()

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

}
