import { animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";

let gato: animal;
gato = new Gato('misifu', 'Siames');
console.log('gato', gato);
gato.desplazar();

//set nombre
gato.nombre = 'tom';

//get nombre
console.log(gato.nombre);

(gato as Gato).ronronear();