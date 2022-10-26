import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { RecetteService } from './recette.service';
import { Observable } from 'rxjs';
import { RecetteEntity } from './entities/recette.entity';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { RecetteDao } from './dao/recette.dao';
import { HttpInterceptor } from 'src/interceptors/http.interceptor';
import { HandlerParams } from './validators/handler-params';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { CreateRecetteDto } from './dto/create-recette.dto';

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
  //   return this._recetteService.find();
  // }

  @Get()
  async getAll(){
    return await this._recetteDao.find();
  }


  @Post("getAll")
  getRecettes(data):Observable<any>{
    return this._recetteService.getAll(data);
  }
  
  @Get('random')
  findRandom(): Observable<RecetteEntity | void> {
    return this._recetteService.findRandom();
  }

    /**
   * Handler to answer to GET /recette/:id route
   *
   * @param {HandlerParams} params list of route params to take recette id
   *
   * @returns Observable<RecetteEntity>
   */
     @ApiOkResponse({
      description: 'Returns the recette for the given "id"',
      type: RecetteEntity,
    })
    @ApiNotFoundResponse({
      description: 'Recette with the given "id" doesn\'t exist in the database',
    })
    @ApiUnprocessableEntityResponse({
      description: "The request can't be performed in the database",
    })
    @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
    @ApiParam({
      name: 'id',
      description: 'Unique identifier of the recette in the database',
      type: String,
      allowEmptyValue: false,
    })
    @Get(':id')
    findOne(@Param() params: HandlerParams): Observable<RecetteEntity> {
      return this._recetteService.findOne(params.id);
    }

  
   /**
   * Handler to answer to POST /people route
   *
   * @param CreateRecetteDto data to create
   *
   * @returns Observable<RecetteEntity>
   */
    @ApiCreatedResponse({
      description: 'The recette has been successfully created',
      type: RecetteEntity,
    })
    @ApiConflictResponse({
      description: 'The recette already exists in the database',
    })
    @ApiBadRequestResponse({ description: 'Payload provided is not good' })
    @ApiBody({
      description: 'Payload to create a new recette',
      type: CreateRecetteDto,
    })
    @Post()
    create(@Body() createRecetteDto: CreateRecetteDto): Observable<RecetteEntity> {
      return this._recetteService.create(createRecetteDto);
    }

   /**
   * Handler to answer to DELETE /people/:id route
   *
   * @param {HandlerParams} params list of route params to take recette id
   *
   * @returns Observable<void>
   */
    @ApiNoContentResponse({
      description: 'The recipe has been successfully deleted',
    })
    @ApiNotFoundResponse({
      description: 'Recipe with the given "id" doesn\'t exist in the database',
    })
    @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
    @ApiParam({
      name: 'id',
      description: 'Unique identifier of the recipe in the database',
      type: String,
      allowEmptyValue: false,
    })

    @Delete(':id')
    delete(@Param() params: HandlerParams): Observable<void> {
      return this._recetteService.delete(params.id);
    }

  
  /**
   * Handler to answer to PUT /recette/:id route
   *
   * @param {HandlerParams} params list of route params to take recette id
   * @param updatePersonDto data to update
   *
   * @returns Observable<RecettenEntity>
   */
   @ApiOkResponse({
    description: 'The recette has been successfully updated',
    type: RecetteEntity,
  })
  @ApiNotFoundResponse({
    description: 'recette with the given "id" doesn\'t exist in the database',
  })
  @ApiConflictResponse({
    description: 'The recette already exists in the database',
  })
  @ApiUnprocessableEntityResponse({
    description: "The request can't be performed in the database",
  })
  @ApiBadRequestResponse({
    description: 'Parameter and/or payload provided are not good',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the recette in the database',
    type: String,
    allowEmptyValue: false,
  })
  @ApiBody({ description: 'Payload to update a recette', type: UpdateRecetteDto })
  @Put(':id')
  update(
    @Param() params: HandlerParams,
    @Body() UpdateRecetteDto: UpdateRecetteDto,
  ): Observable<RecetteEntity> {
    return this._recetteService.update(params.id, UpdateRecetteDto);
  }

}
