import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(public _spotify: SpotifyService) {
      this._spotify.getArtistas() // <-- se encuentra dentro del _spotify (servicio)
        .subscribe( resp => { // subscribe es para procesar la informacion
          console.log("informacion lista");
          console.log(resp);
        })
  }


}
