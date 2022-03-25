//   Prymitywne typy danych - stringi, liczby, booleany, null, undefined, symbol

let name = 'John';
const age = 30;
const isCool = true;
const x = null;

const y = undefined;
let undefinedd;

// Konkatenacja i Template stringi

console.log('my name is ' + name + ' and i am ' + age)
console.log(`my name is ${name} and i am ${age}`)
// Property/ właśność > s.length | Method/a > s.length()
// length, toUpperCase, substring, split > zmiana w array, 

// ARRAYS, tablice - zmienne obejmujące wiele wartości

const fruits = ['apples', 'oranges', 'pears', 30, true, null];
// dodajemy item
fruits[3] = 'grapes' 
// dodajemy na koniec PUSH
// dodajemy na poczatek UNSHIFT
// wywalamy POP
// INDEXOF

// OBJECT LITERALS

const person = {
    firstName: 'john',
    age: 30,
    hobbies: ['music', 'movies'],
    addres: {
    street: 'sosnowa 10',
    city: 'warsaw'
    }
}
console.log(person.hobbies[1])
// destrukuryzacja 
const { firstName, addres: {city}} = person;
console.log(city)

const toDos = [
    {
        id: 1,
        text: 'take out trash'
    },
    {
        id:2,
        text: 'take trash in'
    }
]
console.log(toDos[1].text)

// JSON, JavaScryptObjectNotation pozwala na wymianę danych z serwerem

const todoJSON = JSON.stringify(toDos);
console.log(todoJSON)

// PĘTLA FOR
for(let i=0; i<3; i++) {
    console.log(i)
}
for(let todo of toDos) {
    console.log(todo.text)
}
// PĘTLA WHILE oldschool
let w = 0;
while(w < 3) {
    console.log(`sup ${w}`);
    w++;
}
// HIGH ORDER ARRAY METHODS> forEach, Map, Filter ...
toDos.forEach(function(todo) {
    console.log(todo.text)
})
// CONDITIONALS
const c = 2
if(c > 1 && c < 3 || c === 2) {
console.log("thats right")

} else if(c > 3 && c < 10) {
    console.log("shits wrong")
} else {
    console.log('shits very wrong')
}

const k = 11;
const color = k > 10 ? 'red' : 'blue'; 

switch(color) {
case 'red':
    console.log('color is red')
    break
case 'blue': 
    console.log('color is blue')
    break    
default:
    console.log('color is nor read or blue')
    break
}

// FUNCTIONS zwykła i strzałkowa

function addNums(num1 = 1, num2 = 2) {
    return num1 + num2
}

const addNumbs = (num1 = 1, num2 = 2) => num1 + num2
const addNumbes = num1 => num1 + 5


console.log(addNums(5,5))
console.log(addNumbs(10,5))
console.log(addNumbes(7))

// CONSTRUCTOR FUNCTION
function Persona(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    // Tworzenie daty ze stringa /\
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }
    this.getFullName = function() {
        return `${this.firstName} ${lastName}`
    }
}
// INSTANTIATE, tworzenie egzemplarza
const persona1 = new Persona('john', 'doe', '4-3-1998')
console.log(persona1.dob)
console.log(persona1.getFullName())

// PROTOTYPE METHOD, 
function Personalia(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Personalia.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Personalia.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
const personka = new Personalia('jack', 'black', '1-1-1111')
console.log(personka)

// CLASSES, syntactic sugar dla tego co powyżej

class Human {
constructor(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

getBirthYear() {
    return this.dob.getFullYear
}
getFullName() {
    return `${this.firstName} ${this.lastName}`
}
}

// the DOM - cała struktura stronki, najlepiej wizualizować w formie drzewa genealogicznego
// window to parent całej stronki, możemy np. cosole.logować - window.alert(smth)
// QUERY SELECTORY zwracają NODE LISTY na których MOŻNA używać array methods

// EVENT LISTENER

const myForm = document.querySelector('#my-form')
const nameInput =  document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
e.preventDefault();

if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.toggle('error')
    msg.innerHTML = 'Please enter all fields'

    setTimeout(() => msg.remove(), 2000)
} else {
    const li = document.createElement('li');
    li.append(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    userList.append(li)
    // CLEAR FIELDS
    nameInput.value = ''
    emailInput.value = ''
}
}