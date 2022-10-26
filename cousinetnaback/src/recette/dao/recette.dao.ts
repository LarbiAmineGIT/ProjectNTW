import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { CreateRecetteDto } from '../dto/create-recette.dto';
import { UpdateRecetteDto } from '../dto/update-recette.dto';
import { Recette } from '../schemas/recette.schema';

@Injectable()
export class RecetteDao {
  /**
   * Class constructor
   *
   * @param {Model<Recette>} _recetteModel instance of the model representing a Recette
   */
  constructor(
    @InjectModel(Recette.name)
    private readonly _recetteModel: Model<Recette>,
  ) {}

  /**
   * Call mongoose method, call toJSON on each result and returns RecetteModel[]
   *
   * @return {Observable<Recette[]>}
   */
  find = (): Observable<Recette[]> =>
     from(this._recetteModel.find({}).lean()).pipe(map((recette) => [].concat(recette)));
  
   /**
   * Returns one person of the list matching id in parameter
   *
   * @param {string} id of the person in the db
   *
   * @return {Observable<Recette | void>}
   */
    findById = (id: string): Observable<Recette | void> =>
    from(this._recetteModel.findById(id));

  /**
   * Check if person already exists with index and add it in people list
   *
   * @param {CreatePersonDto} person to create
   *
   * @return {Observable<Person>}
   */
 
  save = (person: CreateRecetteDto): Observable<Recette> =>
    from(new this._recetteModel(person).save());


  /**
   * Update a person in people list
   *
   * @param {string} id
   * @param {UpdatePersonDto} person
   *
   * @return {Observable<Person | void>}
   */
 
  findByIdAndUpdate = (
    id: string,
    recette: UpdateRecetteDto,
  ): Observable<Recette | void> =>
    from(
      this._recetteModel.findByIdAndUpdate(id, recette, {
        new: true,
        runValidators: true,
      }),
    );

  /**
   * Delete a person in people list
   *
   * @param {string} id
   *
   * @return {Observable<Person | void>}
   */
  findByIdAndRemove = (id: string): Observable<Recette | void> =>
    from(this._recetteModel.findByIdAndRemove(id));

}
