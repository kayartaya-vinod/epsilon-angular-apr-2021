import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  searchText: string = '';
  movies: Array<any>;
  totalMovies: number;

  constructor(private movieService: MovieService) { }

  fetchMovieList() {
    this.movieService.getMovies(this.searchText)
      .subscribe(resp => {
        this.movies = resp['Search'];
        this.totalMovies = resp['totalResults'];
      }, (err) => console.log('There was an error!', err)
        , () => console.log('subscription ended'));

    // .subscribe(cb1, cb2, cb3)
  }

}
