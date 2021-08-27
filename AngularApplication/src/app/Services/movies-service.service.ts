import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private httpClient: HttpClient) { }

  SearchMovieslist(searchObj:any): Observable<any>{
    const apiURl = ' https://localhost:5001/api/movies/list';
    return this.httpClient.post(apiURl, searchObj);
  }
}
