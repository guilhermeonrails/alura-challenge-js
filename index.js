function last() {
    return this.at(-1)
}

String.prototype.last = last
Array.prototype.last = last

//            0         1        2      3  ....
//            0                         -3       -2       -1
let lista = ['Python', 'Kotlin', 'C#', 'Rust', 'Js', 'Java']
let nome = 'Gustavo'

console.log(lista.last())
console.log(nome.last())