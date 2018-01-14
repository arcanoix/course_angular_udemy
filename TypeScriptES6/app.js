"use strict";
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
//console.log(texto);
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
activar("gordon", "batiseñal", "tarde");
