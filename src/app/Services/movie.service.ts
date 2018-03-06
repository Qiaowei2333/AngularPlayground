import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(path: string): Observable<Movie[]> {

    return this.http.get(`${environment.api_url}${path}`)
      .map(resp => resp as Movie[])
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message + err.statusText);
    return Observable.throw(err.message);
  }

}
