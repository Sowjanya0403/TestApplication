import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
public movieDetails:any;

  constructor(private httpClient: HttpClient) { }

  //Gets MovieData
  public getMovieDetails(){
    return this.movieDetails
  }

  //Sets MovieData 
  public setMovieDetails(data:any){
     this.movieDetails = data;
  }

  // Search API
  SearchMovieslist(searchObj:any): Observable<any>{
    const apiURl = ' https://localhost:5001/api/movies/list';
    return this.httpClient.post(apiURl, searchObj);
  }
}
