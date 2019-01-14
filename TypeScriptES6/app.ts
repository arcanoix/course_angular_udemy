
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

  console.log(texto);

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

    activar("gordon", "batiseñal" ,"noche");
    //------------------------------------------------------

    // variables
    let nombres:string;
    let apellidos:string;
    let mayor:boolean;
    let telefono:number;
    let hoy:Date = new Date();
    let cualquier:any;

    let spiderman = {
        nombres:"peter",
        edad:20
    }

    // funciones de flecha
    // 
    let mifuncion = function(a){
      return a;
    }

    let mifunctionF = (a:number) => a;

    let mifunction2 = (a:number, b:number) => a + b;

    let mifunction3 = (nombre:string) => {
      nombre = nombre.toUpperCase();
      return nombre;
    }

    let hul = {
      nombre: "hulk",
      smash() {
        setTimeout( () => console.log(this.nombre + " Smach!!"), 1500);
      }
    }

    hul.smash();

    // destructuracion de objetos y arreglos
    let avenger = {
      nombrex: "steve",
      clave: "Capitan America",
      poder: "droga"
    }

    //let nombre = avenger.nombre;
    //let clave = avenger.clave;
    //let poder = avenger.poder;
    //destructuracion de objetos
    let { nombrex, clave, poder } = avenger;

    console.log(nombrex, clave, poder);

    // destructuracion de arreglos
    let avengers:string[] = ["thor","steve","hulk"];
    let   [thor, capi, hulk] = avengers;

    // promesas
    let prom1 = new Promise( function(resolve, reject) {
      setTimeout( () => {
          console.log('promesa terminada')
          resolve()
       }, 1500)

    } );

    prom1.then(function() {
        console.log("ejecutarme cuando este lista");
    }, function() {
        console.log("ejecutarme si sale todo mal");
    });