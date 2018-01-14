
  function saludar(nombre: string){
        console.log("Hola " + nombre.toUpperCase() );
  }

  let persona = {
      nombre: "Gustavo"
  };

  saludar(persona.nombre);
//variables
//let para definir variables ejemplo let nombre;
// constantes se define con const ejemplo const OPCIONES = "todas";

//plantilla literales

  let nombre:string = "Gustavo";
  let apellido:string = "Herrera";
  let edad:number = 33;

  //let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
  //esto seria la forma usando platnilla literal del ES6
  let texto = ` Hola ${ nombre } ${ apellido } ${ (edad) }`;

  //console.log(texto);

  /*
    funciones obligatoria, por defecto y opcional
  */

    function activar(
      quien:string,
      objeto:string="batiseñal",
      momento?:string)
    {
      let mensaje:string;

      if (momento){
        mensaje = `${quien} activo la ${objeto} en la ${momento}`;
      }else{
        mensaje = `${quien} activo la ${objeto}`;
      }

      console.log(mensaje);
    }

    activar("gordon", "batiseñal" ,"tarde");
    //------------------------------------------------------
