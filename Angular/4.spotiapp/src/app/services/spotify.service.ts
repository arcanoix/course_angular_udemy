import { Injectable } from '@angular/core';

import { HttpClient} from "@angular/common/http";

@Injectable()
export class SpotifyService {

  constructor( public http:HttpClient) {
      console.log("servicio de spotify listo");
  }

  getArtistas(){
    let url = "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&limit=20";

      this.http.get(url)
      .subscribe(respuesta => {
          console.log(respuesta);
      });

  }

}
