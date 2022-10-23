import {Injectable, Logger,} from '@nestjs/common';
import {Observable } from 'rxjs';
import { defaultIfEmpty, filter, map } from 'rxjs/operators';
import { Recette} from './recette.types';
import { RecetteEntity } from './entities/recette.entity';
import { RecetteDao } from './dao/recette.dao';

@Injectable()
export class RecetteService {


  /**
   * Class constructor
   *
   * @param {RecetteDao} _recetteDao instance of the DAO
   */
  constructor(private readonly _recetteDao: RecetteDao) {
  }

  /**
   * Returns all existing recette in the list
   *
   * @returns {Observable<RecetteEntity[] | void>}
   */
  findAll = (): Observable<RecetteEntity[] | void> =>
    this._recetteDao.find().pipe(
      filter(Boolean),
      map((recette) => (recette || []).map((recette) => new RecetteEntity(recette))),
      defaultIfEmpty(undefined),
    );

  findAlll(): Observable<RecetteEntity[] | void>
  {
    Logger.log("findAlll");

    var temp2 = this._recetteDao.find().pipe(
      filter(Boolean),
      defaultIfEmpty(undefined),
    );
    Logger.log("temp2");
    Logger.log(temp2);
    temp2.forEach(r => {
      Logger.log("r");
      Logger.log(r);
    });
    
    return this._recetteDao.find().pipe(
      filter(Boolean),
      map((recette) => (recette || []).map((recette) => new RecetteEntity(recette))),
      defaultIfEmpty(undefined),
    );
  }
}
