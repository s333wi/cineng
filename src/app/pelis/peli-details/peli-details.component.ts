import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.component.html',
  styleUrls: ['./peli-details.component.css'],
})
export class PeliDetailsComponent implements OnInit {
  @Input() film: any = "";
  @Output() buyTicket: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.buyTicket = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  buyTicketFilm(): void {
      this.buyTicket.emit(this.film);
  }
}
