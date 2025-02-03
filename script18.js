/*
    Método pop():
    Consiste em remover a última posição de um array, utilizaremos o último exemplo como base, veja:
*/
let arrEmenta = new Array('Matemática', 'Artes', 'Francês');

arrEmenta.unshift('Português');

arrEmenta.pop();//removeu o valor 'Francês' do vetor

console.log(arrEmenta)