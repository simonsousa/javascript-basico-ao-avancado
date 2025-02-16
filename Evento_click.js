/*
    Evento Click

    O click é ativado quando o usuário clica em um elemento em que atrelamos o evento;

    apos a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos;

*/ 
let btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function() {
    
    console.log("clicou");

    console.log(this);

    this.style.color = 'red';

});

let title = document.querySelector("#title");

title.addEventListener("click", () => {

    console.log("teste");

    let subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";//o titulo some

});

// double click
let subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", () => {

    console.log("click duplo!");

});