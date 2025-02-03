/*
    Alterando atributos

    * Podemos alterar os atributos via JS e DOM;
    
    * Por exemplo: alterar o atributo alt de uma imagem;

    * Ou até um src de uma imagem;

    * Todos os atributos podem ser alterados via JS!

    * Vamos ver na prática!
*/

//ADICIONAR ATRIBUTOS
let title = document.querySelector('h1#title');
title.setAttribute("class", "testando-atributo"); /*é como se eu tivesse adicionando o atributo class="testando-atributo" na tag <h1> do meu body
*/

let subtitle = document.querySelector('.Subtitle');
subtitle.setAttribute("id","titulo-2");


let btn = document.querySelector('#btn');
btn.setAttribute("disabled", "btn-desligado");/* adicionei o atributo disabled, que desabilita o botão com valor "btn-desligado" na tag <button>
*/ 

// REMOVER ATRIBUTOS

var lista = document.querySelector('#lista');
lista.removeAttribute("id"); // remove o atributo id da tag <ul>