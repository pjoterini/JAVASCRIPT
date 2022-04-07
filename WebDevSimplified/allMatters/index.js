//  W jaki sposób przeglądarka otwiera HTML ???

// wczytywanie od góry do dołu. gdy trrafi na plik który trzeba pobrać, zaczyna pobieranie i jednocześnie dalej wczytuje kod. script.js zatrzymuje wczytywanie html i i zaczyna pobieranie a następnie egzekwuje swój kod. dopiero potem wczytywana jest reszta HTML.

// ASYNC sprawia, że wczytywanie HTML i pobieranie JS odbywa się jednocześnie, jednak po pobraniu JS zaczyna się ezgzekwowanie skryptu, po którego skończeniu wczytywana jest reszta HTML. Jeśli masz dużo async tagów, jest szansa, że będą się one wczytywać w różnej kolejności przy kolejnych próbach.

// DEFER tak jak powyżej, tylko egzekwowanie JS zaczyna się dopiero po wczytaniu całego HTML. Jeśli plik html ma kilka skryptów to zawsze będą one wczytane we właściwej kolejności.

// VAR, LET, CONST ???

// VAR > function scoped - dostępne w całym pliku, można w nieskończoność przypisywać im nowe wartości. VAR pozwala na stworzenie zmiennej gdziekolwiek w kodzie, ale wcześniej stworzone funkcje nie będą widziały wartości danej zmiennej.
// LET CONST > block scoped - dostępne tylko w bloku np If statement, const nie pozwala przypisywać nowych wartości, a let tak. w obydwu przypadkach możemy zmieniać właściwości np. keyvalues w obiektach.

// CLOSURES - zamknięcie

//1. Gdy funkcja1 jest zdefiniowana w środku funkcji2, to funkcja1 ma dostęp do zmiennych funkcji2 nawet jeśli funkcja2 zakończyła już swoje działanie i jej zmienne nie są już dostępne poza funkcją2

//2.  Funkcje które mają dostęp do danych z poza ich zakresu określonego przez NAWIASY KLAMROWE {}

// PURE FUNCTIONS - funkcje egzekwujące jedynie argumenty określone wewnątrz danej funkcji np.   function Pure(a,b) {
// return a + b
// }    WSZYSTKO INNE TO CLOSURES, funkcje czerpiące z GLOBAL SCOPE | OUTER FUNCTIONS 

// OUTER FUNCTION NIE MA dostępu do zmiennych INNER FUNCTION

// REFERENCE vs VALUE

// wartość prymitywnych zmiennych zapisywana jest w pamięci jako VALUE, każda jest unikatowa np. dla > let x = 5; let y = x obydwie zmienne  mają oddzielne VALUE. Gdy w ten sam sposób zapiszemy arraye to obydwa będą mieć to samo REFERENCE VALUE czyli 0x01 zapisane w oddzielnym bloku pamięci. zmiana wartości jednego z arrayow zmieni REFERENCE VALUE a zatem wartość obydwóch arrayów zmieni się.

for(var i = 1; i <= 5; i++) {
    function calculate(x) {
        setTimeout(function() {
            console.log(x)
        }, x * 1000)
    }
    calculate(i)
}


// FUNCTIONAL PROGRAMMING 

const radiuses = [3, 1, 2, 4]

const area = function (param) {
    return Math.PI * param * param
}


const calculateSmth = function (radius, logic) {
    const output = []
    for (let i = 0; i < radiuses.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculateSmth(radiuses, area))

// PROMISES

let k = [321,312,3,213]

let p = new Promise((resolve, reject) => {
let a = 1 + 1
if (a == 2) {
    resolve(5)
} else {
    reject()
}
})

p.then((added) => {
    k.push(added)
    console.log(k)
}). catch((messgae) => {
    console.log('this is in the catch' + messgae)
})

// THIS KEYWORD

// Implicit binding - cokolwiek znajduje się na lewo od przywoływanej funkcji/metody jest odnośnikiem 'this'
let me = {
    name: 'pjoter',
    call: function() {
        console.log(this.name)
    },
    nicknames: ['pjoti', 'maci'],
    callin: function() {
        this.nicknames.forEach(name => {
        console.log(this.name)
    })},
    insider: {
        surname: 'gorski',
        check: function() {
            console.log(this.surname)
        }
    }
}
me.call()
me.callin()
me.insider.check()
// Explicit binding - dosadnie określamy co jest odnośnikiem 'this' przy pomocy metod call, apply, bind gdy np. funkcja znajduje się POZA obiektem.
let sayName = function(){
    console.log('my name is ' + this.name)
}
sayName.call(me)
//  PIERWSZY ARGUMENT to nasze ODNIESIENIEn pozostałe działają jak zwykłe argumenty
let languages = ['js', 'ruby']
let sayNameAndLangs = function(lang1, lang2){
    console.log('my name is ' + this.name + lang1 + lang2)
}
sayNameAndLangs.call(me, languages[0], languages[1])
// APPLY pozwala na łatwiejsze uzywanie arrayów jako argumentów
sayNameAndLangs.apply(me, languages)
// BIND działa jak CALL ale zamiast PRZYWOŁYWAĆ DANĄ FUNKCJE, ZWRACA JA JAKO ZMIENNA DO PRZYWOŁANIA PÓŹNIEJ
let newFn = sayNameAndLangs.bind(me, languages[0], languages[1])
newFn()
// w przypadku użycia constructor function nowopowstały obiekt otrzymuje odnośnik 'this'


