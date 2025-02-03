/*

Agora que ja vimos a tabela-verdade, nesse tópico vamos tratar sobre uma das questões mais importantes que está presente 

em todas as linguagens de programação, chamamos de expressões (if e else) que são o que nos habilita a tomarmos decisões 

dentro do nosso código.

Estas expressões também são conhecidas como expressões de controle de estrutura, isso significa que podemos controlar o 

que será executado por nosso código ou não.

*/ 

var nome = "Ricardo";
var idade = 21;

var estaSolteiro = true;

if (estaSolteiro) {//retorno da decisão TRUE;
    
    console.log(nome + " está solteiro!");

} else {//retorno da decisão se for FALSE;

    console.log(nome + " está casado!");

}
