import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "566461bb75ec83afc46ec9bd6b6aabc0";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }
  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?${page}&api_key=`+ this.apiKey);
  }

  getMovie(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=`+ this.apiKey);
  }

}
