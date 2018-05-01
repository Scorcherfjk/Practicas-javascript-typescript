//Tipos de Datos
//Declarar variables
var numeroEstudiantes;
numeroEstudiantes = 40;
var cursoIniciado = true;
var nombreCurso = 'Angular desde cero';
// Imprimir texto 
console.log('El total de los estudiantes es: ', numeroEstudiantes);
//String multiLinea
var contenidoCurso = "\n    Herramientas de desarrollo\n    Introduccion a Typescript\n    Introduccion a Angular\n";
console.log('Nombre del curso', nombreCurso);
console.log('Su contenido es: ', contenidoCurso);
// Asignar variables dentro de un string
var bienvenida = "Bienvenidos al curso " + nombreCurso;
console.log(bienvenida);
// declaracion de arreglos
var arregloA = [1, 2, 3, 4];
console.log(arregloA);
var arregloB = ['a', 'b', 'c'];
console.log(arregloB);
// TypeScript Enums
var diaCurso;
(function (diaCurso) {
    diaCurso[diaCurso["MARTES"] = 0] = "MARTES";
    diaCurso[diaCurso["VIERNES"] = 1] = "VIERNES";
})(diaCurso || (diaCurso = {}));
;
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["LUNES"] = 0] = "LUNES";
    diasSemana[diasSemana["MARTES"] = 1] = "MARTES";
    diasSemana[diasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    diasSemana[diasSemana["JUEVES"] = 3] = "JUEVES";
    diasSemana[diasSemana["VIERNES"] = 4] = "VIERNES";
})(diasSemana || (diasSemana = {}));
var primerDia = diaCurso.MARTES;
//imprime la posicion
console.log('El primer dia de clases es el ', primerDia);
//imprime el valor
console.log('El primer dia de clases es el ', diaCurso[0]);
// NO recomendable
var miVariable;
miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;
// Declarar constantes
var PI = 3.1416;
//Declarar objetos de Json
var persona = {
    nombre: 'Luis',
    curso: 'Angular'
};
var PERSONA = {
    nombre: 'Juan',
    curso: 'Angular'
};
console.log(PERSONA);
//Mutacion del objeto
PERSONA.nombre = 'Manuel';
PERSONA.curso = 'AngularJS';
console.log(PERSONA);
// Declaracion de funciones
function holaMundoA() {
    return 'Hola Mundo';
}
//Especificando salida
function holaMundoB() {
    return 'Hola Mundo';
}
//especificando salida
function holaMundoC(mensaje) {
    console.log('mensaje: ', mensaje);
}
// Procedimiento (uso de palabra void)
function mensaje(mensaje) {
    console.log('Mensaje: ', mensaje);
}
mensaje('Me Gusta TypeScript');
