/*
    !       Não lógico

    <       Menor que    
    
    <=      Menor ou igual a
    
    >       Maior que
    
    >=      Maior ou igual a
    
    ==      igualdade
    
    !=      Desigualdade
    
    ===     igualdade Estrita
    
    !==     Desigualdade Estrita
    
    &&      E lógico
    
    ||      OU lógico

*/

var variavel1 = 53;
var variavel2 = true;
var variavelTexto = "zero";
var variavelNumero = "24";
var variavelLogica = false;
var variavelCurta = "texto curto";

//Decisão Lógica Composta
if (variavel2 && variavelNumero == 24) {//retorno da decisão true
    
    console.log("Retorna verdadeira");

} else {//se retorno da decisão for false

    console.log("Retorno falso");

}

//Decisões Lógicas Simples
if (variavel1 > 50) {
    console.log(variavel1 + " é maior que 50");
}

if (variavelTexto != 'um') {
    console.log(variavelTexto + " é diferente de um");
}

if (!variavelLogica) {
    console.log("Negação da variável lógica é " + !variavelLogica);
}

if(variavelTexto != variavel1) {
    console.log("Valor das variáveis é diferente");
}