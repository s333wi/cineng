import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PelisComponent } from './pelis/pelis.component';
import { PeliDetailsComponent } from './pelis/peli-details/peli-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PelisComponent,
    PeliDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
