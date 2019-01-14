function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var persona = {
    nombre: "Gustavo"
};
saludar(persona.nombre);
//variables
//let para definir variables ejemplo let nombre;
// constantes se define con const ejemplo const OPCIONES = "todas";
//plantilla literales
var nombre = "Gustavo";
var apellido = "Herrera";
var edad = 33;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
//esto seria la forma usando platnilla literal del ES6
var texto = " Hola " + nombre + " " + apellido + " " + (edad);
console.log(texto);
/*
  funciones obligatoria, por defecto y opcional
*/
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("gordon", "batiseñal", "noche");
//------------------------------------------------------
// variables
var nombres;
var apellidos;
var mayor;
var telefono;
var hoy = new Date();
var cualquier;
var spiderman = {
    nombres: "peter",
    edad: 20
};
// funciones de flecha
// 
var mifuncion = function (a) {
    return a;
};
var mifunctionF = function (a) { return a; };
var mifunction2 = function (a, b) { return a + b; };
var mifunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hul = {
    nombre: "hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Smach!!"); }, 1500);
    }
};
hul.smash();
// destructuracion de objetos y arreglos
var avenger = {
    nombrex: "steve",
    clave: "Capitan America",
    poder: "droga"
};
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
//destructuracion de objetos
var nombrex = avenger.nombrex, clave = avenger.clave, poder = avenger.poder;
console.log(nombrex, clave, poder);
// destructuracion de arreglos
var avengers = ["thor", "steve", "hulk"];
var thor = avengers[0], capi = avengers[1], hulk = avengers[2];
// promesas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('promesa terminada');
        resolve();
    }, 1500);
});
prom1.then(function () {
    console.log("ejecutarme cuando este lista");
}, function () {
    console.log("ejecutarme si sale todo mal");
});
