# Pacote Javascript Inspirado no Método last do Ruby

O método last é uma funcionalidade da linguagem de programação Ruby, que é utilizado para obter o último elemento de uma coleção, como um array ou uma string. Ele retorna o último elemento da coleção sem modificar a própria coleção.

## Funcionamento do Método last do Ruby
O método last é usado em coleções indexadas, como arrays ou strings. Seu funcionamento é bastante simples:

Em arrays, o método last retorna o último elemento do array.
Em strings, o método last retorna o último caractere da string.

## Criando o método last no JavaScript

Adicionamos protótipo das classes Array e String em Javascript com um novo método chamado last. Esse método é inspirado no conceito do método last do Ruby e permite obter o último elemento de um array ou o último caractere de uma string.

Vamos analisar o código passo a passo:

```js
function last() {
     return this.at(-1);
}
```

Nesta função, last, estamos definindo um novo método. O método at é usado com o índice -1 para obter o último elemento de um array ou o último caractere de uma string. A palavra-chave this é utilizada para referenciar o objeto que invocou o método.

```js
Array.prototype.last = last;
String.prototype.last = last;
```

Aqui, estamos estendendo o protótipo da classe Array e String adicionando o método last. Dessa forma, todas as instâncias de Array e String terão acesso a esse método.

```js
let lista = ['js', 'java', 'python'];
let nome = 'Gui';

console.log(nome.last()); // Saída: 'i' (último caractere da string 'Gui')
console.log(lista.last()); // Saída: 'python' (último elemento do array 'lista')
```

Neste trecho do código, criamos uma lista de palavras e uma string. Em seguida, utilizamos o método last para obter o último caractere da string e o último elemento do array. Como resultado, o código imprime no console o caractere 'i' e o elemento 'python'.


