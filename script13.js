/*
    Uma questão que ainda não vimos é a 
    
    diferença entre uma declaração(statement) 
    
    e uma expressão(expression). A grande 
    
    diferença entre uma expressão e uma 
    
    declaração é que uma expressão produz um 
    
    valor, uma saída que pode ser armazenada, 
    
    enquanto uma declaração apenas executa uma 
    
    ação, não gera um valor imediatamente para 
    
    poder ser armazenado
*/

//Declaração (Statement)
function minhaFuncao(param1) { //não está retornando ou armazenando um valor
    console.log("Executa uma ação");
}

if(1 !== 2) { //decisão lógica que tbm não está retornando nenhum valor
    console.log("Um IF é uma declaração");
}

console.log(minhaFuncao);


//Expressão(expression)
let minhaOutraFuncao = function (param1) { //estamos armazenando o valor de uma função anônima dentro da variável minhaOutraFunção
    console.log("Executa outra ação");

}

console.log(minhaOutraFuncao)


//Uma soma é uma expressão
var soma = 5 + 7//estamos realizando uma operação de soma, e armazenando a saída desta operação na variável soma

console.log(`Valor armazenado na variável ${soma}`)