import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.component.html',
  styleUrls: ['./peli-details.component.css'],
})
export class PeliDetailsComponent implements OnInit {
  @Input() film: any;
  @Output() getDetails: EventEmitter<string>;

  constructor(private localStore: LocalService) {
    this.film = undefined;
    this.getDetails = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  buyTicket(): void {
    let cines:any = this.localStore.getData('cines');
    console.log({cines});
    if (this.film.current_capacity < this.film.total_capacity) {
      this.film.current_capacity += 1;
    } else {
      return;
    }
  }
}
