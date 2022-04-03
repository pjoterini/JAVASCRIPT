// BASIC TYPES

let id: number = 5
let company: string = 'media'
let ok: string = 'sup'
let isPublished: boolean = true

let y: any = 'sup'

let ids: number[] = [1,2,3,4,4]

// ids.push('hello')

let arr: any[] = [1, true, 'sup']

// TUPLE - bardziej specyficzne określenia

let person: [number,string,boolean] = [1, 'brad', true]

// TUPLE ARRAY

let employee: [number, string][]

employee = [
    [1, 'brad'],
    [2, 'joihn'],
    [3, 'merry'],
]

// UNION możliwość przypisania różnych typów
let pid: string | number
pid = 22

// OBJECTS

type User = {
    id: number,
    namee: string
}

const user: User = {
    id: 1,
    namee:'john',
}

// FUNCTIONS 
function addNum(x:number, y:number):number {
    return x + y
}

// VOID 
function log(message: string | number): void {
    console.log(message)
}
log('sup')
log(1)

// CLASSES
class Persona {
    id: number
    name: string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }
}

const pjoti = new Persona(1, 'pjoti')
const mushu = new Persona(2, 'smushu')

console.log(pjoti, mushu)

// GENREICS

function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(['brad','dsadsa','dasda','tth'])