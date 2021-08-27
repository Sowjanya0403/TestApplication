import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
  constructor() { }

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
  SearchMovies(){
    //SearchMovies
    console.log(this.selectedLanguage);
    console.log(this.selectedLocation);
  }
}
