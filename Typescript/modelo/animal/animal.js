"use strict";
//deifnicion de clase
exports.__esModule = true;
var animal = /** @class */ (function () {
    function animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(animal.prototype, "nombre", {
        get: function () {
            return "[gato cool: " + this._nombre + "]";
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error('nombre muy corto!! ', nombre.length);
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return animal;
}());
exports.animal = animal;
