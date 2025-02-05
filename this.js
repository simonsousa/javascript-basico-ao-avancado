/*  
    THIS:

    Antes de irmos para o próximo tópico vamos ver uma questão de extrema importância quando trabalhamos com objetos e que precisamos ver para termos um total entendimento do exemplo em questão. No exemplo, mais especificamente nas linhas 6, 9 e 12, utilizamos a declaração this com a notação de ponto para poder modificar o valor das propriedades do objeto carro, isto foi possível, pois (this) é uma palavra reservada que se refere ao objeto atual em questão.
    Então para podermos acessar o valor da propriedade de um objeto, devemos utilizar a declaração this, seja para alterar o valor de uma propriedade ou para retornar o valor da mesma, veremos mais sobre this no decorrer do livro.

*/

const pessoa = {
    nome: 'João',
    idade: 30,
    saudar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    } // a palavra reservada this, se refere ao objeto pessoa, na notação .nome , e na notação .idade;
}
pessoa.saudar();

//----------------------------------------------------------
function dizerNome() {
    console.log(this.nome); //a palavra this, não se refere a nenhum objeto aqui
}

const pessoa1 = { nome: 'Maria'};
const pessoa2 = { nome: 'Pedro'};

pessoa1.saudar = dizerNome;//a função faz o this referenciar o object pessoa1
pessoa2.saudar = dizerNome;//a função faz o this referenciar o object pessoa2

pessoa1.saudar();
pessoa2.saudar();