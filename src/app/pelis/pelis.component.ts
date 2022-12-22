import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css'],
})
export class PelisComponent implements OnInit {
  @Input() films: any;
  constructor() {}

  filmSelected?: any;
  ngOnInit(
  ): void {}

  showDetails(film: any): void {
    this.filmSelected = film;
  }
}
