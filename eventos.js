/*
    EVENTOS

    Por meio do Js podemos mapear algumas ações dos usuários, que chamamos de eventos;

    como: movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento de página e etc;

    e então criar comportamento interessante como: animação de menu abrindo e fechando;

------------------------------------------------------

    EVENTO ONLOAD

    O onload é ativado ao carregar a página;

    Podemos depois desse evento realizar alguma ação no nosso projeto;

*/

//script carregado no cabeçalho da página html

window.onload = () => {//so vai ser executado quando todo o DOM for inicializado

    console.log("Carregou o DOM");

    let title2 = document.querySelector("#title");//com este encapsulamento, eu consigo resolver o problema

    let container = document.querySelector("#container");

    console.log(container);
    console.log(title2);

}

console.log("Carregou o JS");

let title = document.querySelector("#title");// valor: null, porque o elemento não existe nesse ponto do código

console.log(title);