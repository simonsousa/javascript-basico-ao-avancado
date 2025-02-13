/*
    REMOVENDO ELEMENTOS

    remover elementos também é muito fácil com JavaScript;

    Temos como remover o elemento diretamente e também um elemento filho;

    vamos ver na prática

*/

//removendo elemento filho
let container = document.querySelector("#container");

var p = document.querySelector("#container p");

container.removeChild(p);


//remover elemento
let subtitle = document.querySelector(".subtitle");

subtitle.remove();