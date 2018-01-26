import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

          if(activar){
            let salida:string = "";
            for(let i=0; i< value.length; i++){
              salida += "*";
            }
              return salida;
          }else{
            return value;
          }

          /* otra forma de solucionar

            if(activar) {
            return value.replace(/./g, '*');
          }else{
          return value;
        }
          */

          /* otra forma
            return activar ? value.replace(/./g, '*') : value;
          */

          /*
          if(!mostrar)
              return "*".repeat(value.length);
            return value;
          */

  }

}
