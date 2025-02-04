/*
    Podemos alterar o texto de qualquer elemento de forma fácil com javaScript;

    Posteriormente poderemos atrelar esta ação com algum evento;

*/ 

//innerHTML

//Selecionar elemento:
let title = document.querySelector('#title');

title.innerHTML = "Testando o texto alterado!"; // altera o conteúdo da tag h1 onde tem o id='title'
