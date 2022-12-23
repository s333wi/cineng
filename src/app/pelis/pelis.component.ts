import { Component, OnInit, Input } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css'],
})
export class PelisComponent implements OnInit {
  @Input() films: any;
  constructor(private localStore: LocalService) {}

  filmSelected?: any;
  ngOnInit(): void {}

  showDetails(film: any): void {
    this.filmSelected = film;
  }

  buyTicket(film: any): void {
    if (film.current_capacity < film.total_capacity) {
      film.current_capacity += 1;
      this.filmSelected = film;
      let json: any = this.localStore.getData('cines');
      let updatedFilm = this.updateFilm(
        json,
        this.filmSelected.title,
        this.filmSelected
      );
      let updatedCinema = this.updateCinema(
        json,
        updatedFilm.name,
        updatedFilm
      );
      this.localStore.saveData('cines', JSON.stringify(updatedCinema));
    } else {
      return;
    }
  }

  updateFilm(json: any, filmTitle: string, newValue: any): any | null {
    for (const cinema of json) {
      for (const film of cinema.films) {
        if (film.title === filmTitle) {
          const updatedFilm = { ...film, ...newValue };
          const updatedFilms = cinema.films.map((f: any) =>
            f.title === filmTitle ? updatedFilm : f
          );
          return { ...cinema, films: updatedFilms };
        }
      }
    }
    return null;
  }

  updateCinema(json: any, cinemaName: string, newValue: any): any {
    const updatedJson = json.map((cinema: any) => {
      if (cinema.name !== cinemaName) {
        return cinema;
      }

      const updatedFilms = cinema.films.map((film: any) => ({
        ...film,
        ...newValue,
      }));
      console.log(cinema, newValue, updatedFilms);
      return { ...newValue };
    });
    return updatedJson;
  }
}
