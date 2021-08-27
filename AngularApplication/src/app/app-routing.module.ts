import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';



export const routes: Routes = [
  {path:'',component:MoviesListComponent,pathMatch:'full'},
  {path:'movieDetails',component:MoviesDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
