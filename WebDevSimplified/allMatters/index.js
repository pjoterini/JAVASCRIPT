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

