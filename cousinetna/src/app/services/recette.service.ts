import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RecetteService {
  
  API_URL:string= 'https://localhost:3000/recette';

  constructor(private _http: HttpClient) { }

  getRecettes(data: any): Observable<any> {
    return this._http.post<any>(this.API_URL+ '/getAll', data);
  }

}
