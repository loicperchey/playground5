import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map, Observable} from 'rxjs';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl : string = 'https://formation-6e588-default-rtdb.europe-west1.firebasedatabase.app/pets.json';
movies: IMovie[] = [];


constructor(private http: HttpClient ) {
this.getMovies().subscribe();
}

postMovie(movieTitle : string): Observable<any>{
  this.http.post(this.movieUrl, {title : movieTitle})
  .subscribe(()=>{
    this.getMovies().subscribe();
  });
}



    getMovies(): Observable<IMovie[]>{
    return this.http.get(this.movieUrl).pipe(
    map((res : any) => {
      const movies: IMovie[] = [];
      for (let key in res){
        const movie:IMovie={
          id: key,
          title :res[key].title,
        };
          movies.push(movie);
      }
      this.movies= movies;
        return movies;
      })
    );
  }
  }

