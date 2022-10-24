import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  UseInterceptors,
} from '@nestjs/common';
import { RecetteService } from './recette.service';
import { Observable } from 'rxjs';
import { RecetteEntity } from './entities/recette.entity';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RecetteDao } from './dao/recette.dao';
import { HttpInterceptor } from 'src/interceptors/http.interceptor';

@ApiTags('recette')
@Controller('recette')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(HttpInterceptor)
export class RecetteController {
  /**
   * Class constructor
   * @param _recetteService
   */
  constructor(private readonly _recetteService: RecetteService,
    private readonly _recetteDao : RecetteDao) {}

  /**
   * Handler to answer to GET /recette route
   *
   * @returns Observable<RecetteEntity[] | void>
   */
  // @ApiOkResponse({
  //   description: 'Returns an array of recipe',
  //   type: RecetteEntity,
  //   isArray: true,
  // })
  // @ApiNoContentResponse({ description: 'No recipe exists in database' })
  // @Get()
  // findAll(): Observable<RecetteEntity[] | void> {
  //   return this._recetteService.findAlll();
  // }

  @Get()
  async getAll(){
    Logger.log("getAll");
    Logger.log("getAll");
    Logger.log("getAll");
    return await this._recetteDao.find();
  }

}
