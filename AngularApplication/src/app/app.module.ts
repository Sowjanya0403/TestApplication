import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FormsModule } from '@angular/forms';
import { MoviesServiceService } from './Services/movies-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [MoviesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
