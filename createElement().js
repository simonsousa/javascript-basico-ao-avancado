/*
    Criando elementos

    Outra possibilidade do JS e o DOM é criar elementos;

    O texto de um elemento é considerado um nó na árvore DOM

    Ou seja, temos que criar o elemento também;

*/ 
let novoParagrafo = document.createElement("p"); //cria a tag <p> dentro do HTML

let texto = document.createTextNode("Este é o conteúdo do parágrafo")//Estou criando um texto para inserir dentro de novoParagrafo

novoParagrafo.appendChild(texto); // estou inserindo o texto criando dentro da variável novoParagrafo
console.log(novoParagrafo);

var body = document.querySelector('body');// body: parent
console.log(body);

body.appendChild(novoParagrafo);

let container = document.getElementById('container');

console.log(container);

var element = document.createElement('span');

element.appendChild(document.createTextNode("texto do span"));

console.log(element);

container.appendChild(element);// insere o element dentro do container


