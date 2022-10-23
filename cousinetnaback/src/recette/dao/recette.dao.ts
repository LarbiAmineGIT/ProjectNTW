import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
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
    from(this._recetteModel.find({})).pipe(map((recette) => [].concat(recette)));

    async getAll():Promise<Recette[]>{
      return await this._recetteModel.find().exec();
    }   

}
