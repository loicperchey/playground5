import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private movieService : MovieService){}
  title = 'playground5';

  ngOnInit():void{
    this.movieService.getMovies().subscribe();
  }

  onAddMovie(movieTitle: string){
    this.movieService.postMovie(movieTitle).subscribe();
  }
}
