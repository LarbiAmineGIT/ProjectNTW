import {Injectable, Logger,} from '@nestjs/common';
import {from, Observable } from 'rxjs';
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

  getAll(data): Observable<any |void>
  {
    var recettes;
    this._recetteDao.find().subscribe(res =>{
      var result = res.filter(r => r.idCategorie== data.idCategorie);
      if(data.idType !=null) result = result.filter(r => data.idType.contains(r.idType));
      if(data.niveauDifficulte !=null) result = result.filter(r => data.niveauDifficulte.contains(r.niveauDifficulte));
      if(data.nom !=null) result = result.filter(r => r.nom.includes(data.nom));
      recettes= result;
    });
    return from(recettes);
  }
}
