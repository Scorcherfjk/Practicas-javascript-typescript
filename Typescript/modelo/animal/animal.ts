//deifnicion de clase

export abstract class animal {
    constructor(protected _nombre:string) {
    }

    get nombre():string{
        return `[gato cool: ${this._nombre}]`;
    }

    set nombre(nombre:string){
        if (nombre.length <= 3) {
            console.error('nombre muy corto!! ', nombre.length);
            return;
        }
        this._nombre = nombre;
    }

    abstract desplazar():void;

}