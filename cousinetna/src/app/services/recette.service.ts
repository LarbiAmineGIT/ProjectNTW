import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Recette } from '../types/recette.type';
import { defaultIfEmpty, filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RecetteService{

    private readonly _backendURL: any;

    constructor(private _http: HttpClient){
        this._backendURL = {};

        let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
        if (environment.backend.port) {
          baseUrl += `:${environment.backend.port}`;
        }
        
        // @ts-ignore
       Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

    }




    /*Fonction qui retourne toutes les recettes */
   
  fetch(): Observable<any[]> {
    return this._http.get<Recette[]>(this._backendURL.allRecette)
      .pipe(
        filter((recettes: Recette[]) => !!recettes),
        defaultIfEmpty([])
      );
    }

    /*Fonction qui une recette au hasard */

    fetchRandom(): Observable<Recette> {
        return this._http.get<Recette>(this._backendURL.randomRecette)
          .pipe(
            filter((recette: Recette) => !!recette),
          );
    }

    /*Fonction qui une recette par id */

    fetchOne(id: string): Observable<Recette> {
        return this._http.get<Recette>(this._backendURL.oneRecette.replace(':id', id));
    }

    /*Fonction qui créé une recette */
    create(recette: Recette): Observable<any> {
        return this._http.post<Recette>(this._backendURL.allRecette, recette, this._options());
    }
      
    /*Fonction qui update une recette par id */
    update(id: string, recette: Recette): Observable<any> {
        return this._http.put<Recette>(this._backendURL.oneRecette.replace(':id', id), recette, this._options());
    }

    /*Fonction qui update une recette par id */
    delete(id: string): Observable<string> {
        return this._http.delete(this._backendURL.oneRecette.replace(':id', id))
          .pipe(
            map(() => id)
          );
    }

    getRecettes(data: any): Observable<any> {
        return this._http.post<any>(this._backendURL.API_URL, data);
    }

    private _options(headerList: object = {}): any {
        return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
    }
}

