import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesServiceService } from '../Services/movies-service.service';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  public movieDetails :any =[];
  constructor(private router: Router,private service :MoviesServiceService) { }

  ngOnInit() {
    this.movieDetails = this.service.getMovieDetails();
  }
  
  gotBack(){
    this.router.navigateByUrl('');
  }

}
