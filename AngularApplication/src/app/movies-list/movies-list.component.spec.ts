import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MoviesListComponent } from './movies-list.component';
import { MoviesServiceService } from '../Services/movies-service.service';
import { FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let service: MoviesServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,NgMultiSelectDropDownModule, RouterTestingModule,HttpClientModule],
      declarations: [ MoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MoviesServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Search Movies', fakeAsync(() => {
    const mockReponseObj = [
      {
          "language": "HINDI",
          "location": "PUNE",
          "plot": "Harry's fourth year at Hogwarts is about to start and he is enjoying the summer vacation with his friends. They get the tickets to The Quidditch World Cup Final but after the match is over, people dressed like Lord Voldemort's 'Death Eaters' set a fire to all the visitors' tents, coupled with the appearance of Voldemort's symbol, the 'Dark Mark' in the sky, which causes a frenzy across the magical community. That same year, Hogwarts is hosting 'The Triwizard Tournament', a magical tournament between three well-known schools of magic : Hogwarts, Beauxbatons and Durmstrang. The contestants have to be above the age of 17, and are chosen by a magical object called Goblet of Fire. On the night of selection, however, the Goblet spews out four names instead of the usual three, with Harry unwittingly being selected as the Fourth Champion. Since the magic cannot be reversed, Harry is forced to go with it and brave three exceedingly difficult tasks.",
          "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
          "soundEffects": [
              "RX6",
              "SDDS"
          ],
          "stills": [
              "https://i.imgur.com/i3aD05u.png",
              "https://i.imgur.com/ABinULO.gif",
              "https://i.imgur.com/Wflfyct.gif"
          ],
          "title": "Harry Potter and the Goblet of Fire",
          "imdbID": "tt0330373",
          "listingType": "NOW_SHOWING",
          "imdbRating": "7.7"
      }
  ];
    component.selectedLanguage =["HINDI"];
    component.selectedLocation = ["PUNE"];
   spyOn(service,'SearchMovieslist').and.returnValue(of(mockReponseObj));
   component.SearchMovies();
  }));
  it('navigation to Movie Details', () => {
   component.navigateToDetails("");
  });
});
