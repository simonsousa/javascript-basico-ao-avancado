/*
    Trocando Elementos

    Podemos também trocar um elemento no DOM;

    Ou seja, substituir uma tag por outra e de modo bem fácil;
*/

//criar um elemento
let elem = document.createElement("h3");

elem.classList = "Testando-classe";

let texto = document.createTextNode("Este é o texto do h4");

elem.appendChild(texto);

console.log(elem);

//selecionar o elemento que quero trocar
let title = document.querySelector("#title");

console.log(title);

//selecionar o pai do elem
let pai = title.parentNode; // ou let body = document.querySelector("body");

pai.replaceChild(elem,title);