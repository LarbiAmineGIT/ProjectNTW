import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { Person } from '../schemas/person.schema';

@Injectable()
export class PeopleDao {
  /**
   * Class constructor
   *
   * @param {Model<Person>} _personModel instance of the model representing a Person
   */
  constructor(
    @InjectModel(Person.name)
    private readonly _personModel: Model<Person>,
  ) {}

  /**
   * Call mongoose method, call toJSON on each result and returns PersonModel[]
   *
   * @return {Observable<Person[]>}
   */
  find = (): Observable<Person[]> =>
    from(this._personModel.find({})).pipe(map((people) => [].concat(people)));

    async getAll():Promise<Person[]>{
      return await this._personModel.find().exec();
    }
}
