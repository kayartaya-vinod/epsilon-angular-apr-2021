import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'http://www.omdbapi.com/?apikey=aa9e49f'

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovies(searchToken: string, pageNum: number = 1): Observable<any> {
    return this.http.get(`${URL}&s=${searchToken}&page=${pageNum}`);
  }

  public getMovie(imdbID: string): Observable<any> {
    // return a single movie by imdbID
    return null;
  }
}
