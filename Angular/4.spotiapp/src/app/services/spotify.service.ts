import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from "@angular/common/http";

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor( public http:HttpClient) {
      console.log("servicio de spotify listo");
  }

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=US&limit=20`;
    let headers = new HttpHeaders({
        'authorization':'Bearer BQASTOcVYmUyVUn2W0nsMMcvHM-78f7OIGAxTrMBpYBPDSBknAD0lreA-u3QeC9ZLOKffQI4sYuzuAHf8CejTsUZICFbCxZN8Fu8DWv8q3GUMCMgRfaCAsSCt5CzDmlK-eEy-cB7GwDh0nvgzTMSaccQA4Yi5m04Z-NvfnaUjWRDgYA'
    });

      return this.http.get(url, { headers }) // esto es un observable
                 .map( (resp: any) => { // operador map obtiene la respuesta de la peticion de un observable
                   this.artistas = resp.artists.items;
                   return this.artistas;
                 });


  }

}
