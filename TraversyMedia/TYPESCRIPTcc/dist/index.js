"use strict";
// BASIC TYPES
let id = 5;
let company = 'media';
let ok = 'sup';
let isPublished = true;
let y = 'sup';
let ids = [1, 2, 3, 4, 4];
// ids.push('hello')
let arr = [1, true, 'sup'];
// TUPLE - bardziej specyficzne określenia
let person = [1, 'brad', true];
// TUPLE ARRAY
let employee;
employee = [
    [1, 'brad'],
    [2, 'joihn'],
    [3, 'merry'],
];
// UNION możliwość przypisania różnych typów
let pid;
pid = 22;
const user = {
    id: 1,
    namee: 'john',
};
// FUNCTIONS 
function addNum(x, y) {
    return x + y;
}
// VOID 
function log(message) {
    console.log(message);
}
log('sup');
log(1);
// CLASSES
class Persona {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const pjoti = new Persona(1, 'pjoti');
const mushu = new Persona(2, 'smushu');
console.log(pjoti, mushu);
// GENREICS
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'dsadsa', 'dasda', 'tth']);
