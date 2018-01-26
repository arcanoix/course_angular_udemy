import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Gustavo';
  nombre2 = 'gustAVo adolfO herRera aular';
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a= 0.234;

  salario = 1234.5;

  heroe = {
    nombre:"gustavo",
    clave:"programdor",
    edad: 33,
      direccion: {
        calle: "bolivar",
        casa: "840"
      }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
          setTimeout( () => resolve('llego la data'), 3500 );
  });

    fecha = new Date();

    //para el pipe personalizado domseguro
    video = 'vxB5a8Z34Ho';

    activar:boolean = true;

}
