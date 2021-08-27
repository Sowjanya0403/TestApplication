import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MoviesServiceService } from '../Services/movies-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
dropdownSettings: IDropdownSettings = {};
public selectedLocation =[];
public selectedLanguage =[];
public languageList = [];
public locationList = [];
public moviesList = [];
  constructor(private moviesService:MoviesServiceService) { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.languageList = [
      { id: 1, name: 'English' },
      { id: 2, name: 'Hindi' },
      { id: 3, name: 'Telugu' },
      { id: 4, name: 'Tamil' }
    ];
    this.locationList = [
      { id: 1, name: 'PUNE' },
      { id: 2, name: 'DELHI' },
      { id: 3, name: 'BANGALORE' },
      { id: 4, name: 'CHENNAI' }
    ];
  }

  //Search Movies List
  SearchMovies(){
    let searchObj = {
      "selectedLanguage": [],
      "selectedLocation": []
    };
    this.selectedLanguage.forEach(lang =>{
      searchObj.selectedLanguage.push(lang.name)
    });
    this.selectedLocation.forEach(loc =>{
      searchObj.selectedLocation.push(loc.name)
    });
    this.moviesService.SearchMovieslist(searchObj).subscribe(data =>{
      this.moviesList = data;
      console.log(this.moviesList);
    });
  }
}
