"use strict";
exports.__esModule = true;
var gato_1 = require("./modelo/animal/gato");
var gato;
gato = new gato_1.Gato('misifu', 'Siames');
console.log('gato', gato);
gato.desplazar();
//set nombre
gato.nombre = 'tom';
//get nombre
console.log(gato.nombre);
gato.ronronear();
