/*  

Com a evolução da linguagem foram criados dois seletores que acabam com toda a complexidade desta ação;
  
querySelector() e querySelectorAll();
  
Com estes podemos acessar os elementos baseados em regras de CSS;     
  
Vamos ver na pratica!

*/
let itensClasse = document.getElementsByClassName('item');

console.log(itensClasse);


// querySelectorAll()
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista')//pega somente um item
console.log(lista);

var span = document.querySelector('#paragrafo span');
console.log(span)