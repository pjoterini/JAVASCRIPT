
// OBJECT LITERAL
// const book1 = {
//     title: 'book one',
//     author: 'john doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was wrtitten by ${this.author} in ${this.year}`
//     }
// }

// const book2 = {
//     title: 'book two',
//     author: 'jane doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was wrtitten by ${this.author} in ${this.year}`
//     }
// }

// CONSTRUCTOR es5

// function Book(title, author, year) {
//    this.title = title
//    this.author = author
//    this.year = year

//    this.getSummary = function() {
//          return `${this.title} was wrtitten by ${this.author} in ${this.year}`
//      }
// }

// Dzięki takiemy syntaxowi nie musimy przepisywać funckji nieskonczenie wiele razy jak przy object literalach

//  INSTANTIATE - tworzenie egzemplarza
// const book1 = new Book('book one', 'john doe', '2012')
// const book2 = new Book('book otwo', 'jane doe', '2013')

// console.log(book1.getSummary())

// PROTOTYPING - to samo co powyżej, ale z CONSTUCTORA wywalamy funkcję i zapisujemy ją oddzielnie

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//  }

// Book.prototype.getSummary = function() {
//     return `${this.title} was wrtitten by ${this.author} in ${this.year}`
// }
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year
//     return`${this.title} is ${years} years old`
// }
// Book.prototype.revise = function(newYear) {
//     this.year = newYear
//     this.revised = true
// }
// console.log(book2.getAge())
// book2.revise('2020')
// console.log(book2)
// PO CO? w każdym obiekcie chcemy mieć wartości takie jak autor, tytuł... ale nie zawsze będziemy używać danej funkcji, więc składujemy ją w zakładce prototype

// INHERITANCE

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//  }

// Book.prototype.getSummary = function() {
//     return `${this.title} was wrtitten by ${this.author} in ${this.year}`
// }

// function Magazine(title, author, year, month) {
// Book.call(this, title, author, year)

// this.month = month
// }
// INHERITING PROTOTYPE
// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine('mag one', 'johnydoe', '2018', 'jan')

// console.log(mag1.getSummary())

// // OBJECT CREATE

// const bookProtos = {
//     getSummary: function () {

//     }
// }

// nieskończone bo już męcząca ta ES5..


// CLASSES ES6 --------------

class Book {
    constructor(title, author, year) {
        this.title = title 
        this.author = author
        this.year = year
    }

    getSummary() {
        return `${this.title} was written in ${this.year}`
    }
}
// INSTANTIEATING object
const book1 = new Book('book one', 'joh doe', '2012')
console.log(book1)

// SUBCLASSES

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month
    }
}

// Instantiate Magazine
const mag1 = new Magazine('mag one', 'john doey', '2021', 'march')
console.log(mag1)