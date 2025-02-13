/*
    Alterando CSS com JS

    É muito comum alterar CSS com JavaScript também;

    As regras de CSS ficam de forma inline;

    Substituindo a maioria das outras regras criadas;

*/

//Selecionando elemento
let title = document.querySelector("#title");


// adiciona o estilo
title.style.color = "red"; // fica inline na tag


//background-color
title.style.backgroundColor = "yellow"; // camelCase


// selecionar elemento
var subtitle = document.querySelector(".subtitle");

//adicionar vários estilos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px"