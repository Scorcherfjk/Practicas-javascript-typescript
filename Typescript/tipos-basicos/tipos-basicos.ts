//Tipos de Datos

//Declarar variables
let numeroEstudiantes:number; 
numeroEstudiantes= 40;
let cursoIniciado:boolean = true;
let nombreCurso:string = 'Angular desde cero';


// Imprimir texto 
console.log('El total de los estudiantes es: ', numeroEstudiantes);


//String multiLinea
let contenidoCurso:string = `
    Herramientas de desarrollo
    Introduccion a Typescript
    Introduccion a Angular
`;
console.log('Nombre del curso', nombreCurso);
console.log('Su contenido es: ', contenidoCurso);


// Asignar variables dentro de un string
let bienvenida:string = `Bienvenidos al curso ${nombreCurso}`;
console.log(bienvenida);


// declaracion de arreglos
let arregloA:number[] = [1, 2, 3, 4]
console.log(arregloA);
let arregloB:Array<string> = ['a', 'b', 'c'];
console.log(arregloB);


// TypeScript Enums
enum diaCurso{MARTES, VIERNES};
enum diasSemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES}

let primerDia:diaCurso = diaCurso.MARTES;


    //imprime la posicion
    console.log('El primer dia de clases es el ',primerDia);
    //imprime el valor
    console.log('El primer dia de clases es el ',diaCurso[0]);


// NO recomendable
let miVariable:any;
miVariable = 5;
miVariable = 'hola mundo';
miVariable = true;

// Declarar constantes
const PI:number = 3.1416;


//Declarar objetos de Json
let persona:any = {
    nombre: 'Luis',
    curso: 'Angular'
};
const PERSONA:any = {
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
    function holaMundoB():string {
        return 'Hola Mundo';
    }

    //especificando salida
    function holaMundoC(mensaje:string){
        console.log('mensaje: ', mensaje);  
    }

// Procedimiento (uso de palabra void)
function mensaje(mensaje:string): void {
    console.log('Mensaje: ', mensaje);  
}
mensaje('Me Gusta TypeScript');
