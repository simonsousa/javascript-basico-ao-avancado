//tag
var titulo = document.getElementsByTagName('h1')[0]; // este método de seleção pega o primeiro título de um HTMLcollection, ja que por estar no plural, ele pega todos os títulos;

console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[2])//estou imprimindo no console o elemento <li> de índice 2, do HTMLcollection

var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);