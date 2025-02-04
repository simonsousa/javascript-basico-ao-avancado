/*
    Podemos alterar o texto de qualquer elemento de forma fácil com javaScript;

    Posteriormente poderemos atrelar esta ação com algum evento;

*/

// textContent -> mais utilizado, recomendado e performático

//Selecionar elemento:
let subtitle = document.querySelector('.subtitle');

console.log(subtitle)

subtitle.textContent = "testando o textContent"; //tbm altera o conteúdo da tag h2 onde tem a classe='subtitle', mas é um método mais seguro do que o innerHTML.