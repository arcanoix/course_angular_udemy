import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino: string = '';

  constructor(public _spotify: SpotifyService) {



  }

  buscarArtista(){
    if(this.termino.length == 0 ){
      return; //esto es para prevenir enviar peticiones invalidad o enviar arreglos vacios
    }

    this._spotify.getArtistas( this.termino ) // <-- se encuentra dentro del _spotify (servicio)
      .subscribe( artistas => { // subscribe es utilizado solo para ejecutar logica especializada solo en dicho componente
        console.log("informacion lista");
        console.log(artistas);
      });
  }


}
