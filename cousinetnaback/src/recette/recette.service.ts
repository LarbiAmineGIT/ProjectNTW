import {ConflictException, Injectable, Logger, NotFoundException, UnprocessableEntityException,} from '@nestjs/common';
import {from, Observable, of, throwError } from 'rxjs';
import { catchError, defaultIfEmpty, filter, findIndex, map, mergeMap, tap } from 'rxjs/operators';
import { Recette} from './recette.types';
import { RecetteEntity } from './entities/recette.entity';
import { RecetteDao } from './dao/recette.dao';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { CreateRecetteDto } from './dto/create-recette.dto';

@Injectable()
export class RecetteService {

  private _listerecettes: Recette[];

  /**
   * Class constructor
   *
   * @param {RecetteDao} _recetteDao instance of the DAO
   */
  constructor(private readonly _recetteDao: RecetteDao) {

   _recetteDao.find().subscribe((recettes ) => { this._listerecettes = recettes});

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

  /**
   * Returns randomly one recette of the list
   *
   * @returns {Observable<RecetteEntity | void>}
   */
  findRandom = (): Observable<RecetteEntity | void> =>
    of(this._listerecettes[Math.round(Math.random() * this._listerecettes.length)]).pipe(
      map((recette: Recette) =>
        !!recette ? new RecetteEntity(recette) : undefined,
        ),
  );

    /**
   * Returns one recette of the list matching id in parameter
   *
   * @param {string} _id of the recette
   *
   * @returns {Observable<RecetteEntity>}
   */
     findOne = (_id: string): Observable<RecetteEntity> =>
     this._recetteDao.findById(_id).pipe(
       catchError((e) =>
         throwError(() => new UnprocessableEntityException(e.message)),
       ),
       mergeMap((recette) =>
         !!recette
           ? of(new RecetteEntity(recette))
           : throwError(
               () => new NotFoundException(`Recette with id '${_id}' not found`),
             ),
       ),
     );

     

     /**
   * Deletes one recette in people list
   *
   * @param {string} id of the recette to delete
   *
   * @returns {Observable<void>}
   */
  delete = (id: string): Observable<void> =>
  this._recetteDao.findByIdAndRemove(id).pipe(
    catchError((e) =>
      throwError(() => new UnprocessableEntityException(e.message)),
    ),
    mergeMap((recetteDeleted) =>
      !!recetteDeleted
        ? of(undefined)
        : throwError(
            () => new NotFoundException(`Recette with id '${id}' not found`),
          ),
    ),
  );

  
    /**
   * Check if recette already exists and add it in people list
   *
   * @param recette to create
   *
   * @returns {Observable<RecetteEntity>}
   */
     create = (recette: CreateRecetteDto): Observable<RecetteEntity> =>
     this._prepareNewRecette(recette).pipe(
       mergeMap((newPreparedRecette: CreateRecetteDto) =>
         this._recetteDao.save(newPreparedRecette),
       ),
       catchError((e) =>
         e.code === 11000
           ? throwError(
               () =>
                 new ConflictException(
                   `Recette with nom '${recette.nom} already exists`,
                 ),
             )
           : throwError(() => new UnprocessableEntityException(e.message)),
       ),
       map((recetteCreated) => new RecetteEntity(recetteCreated)),
     );
 

    /**
   * Add recette with good data in people list
   *
   * @param recette to add
   *
   * @returns {Observable<Recette>}
   *
   * @private
   */
     private _prepareNewRecette = (
      recette: CreateRecetteDto,
    ): Observable<CreateRecetteDto> =>
      of({
        ...recette,
      });
  

    /**
   * Update a Recette in people list
   *
   * @param {string} id of the recette to update
   * @param recette data to update
   *
   * @returns {Observable<RecetteEntity>}
   */
     update = (id: string, recette: UpdateRecetteDto): Observable<RecetteEntity> =>
     this._recetteDao.findByIdAndUpdate(id, recette).pipe(
       catchError((e) =>
         e.code === 11000
           ? throwError(
               () =>
                 new ConflictException(
                   `People with lastname '${recette.nom} already exists`,
                 ),
             )
           : throwError(() => new UnprocessableEntityException(e.message)),
       ),
       mergeMap((recetteUpdated) =>
         !!recetteUpdated
           ? of(new RecetteEntity(recetteUpdated))
           : throwError(
               () => new NotFoundException(`Recette with id '${id}' not found`),
             ),
       ),
     );
 




  getAll(data): Observable<any |void>
  {
    var minPrix = data.prix[0];
    var maxPrix = data.prix[1];
    var recettes;
    this._recetteDao.find().subscribe(res =>{
      var result = res.filter(r => r.idCategorie== data.idCategorie && minPrix<this.getPrixTotal(r.ingredients) && maxPrix>this.getPrixTotal(r.ingredients) );
      if(data.idType !=null) result = result.filter(r => data.idType.contains(r.idType));
      if(data.niveauDifficulte !=null) result = result.filter(r => data.niveauDifficulte.contains(r.niveauDifficulte));
      if(data.nom !=null) result = result.filter(r => r.nom.includes(data.nom));
      recettes= res;
    });
    return from(recettes);
  }

  getPrixTotal(ingredients:any[])
  {
    var prix = 0;
    ingredients.forEach(ingredient => {
      prix += ingredient.prix * ingredient.quantite;
    });
    return prix;
  }


}
