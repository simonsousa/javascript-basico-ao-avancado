/*
    Callback functions

    A função de callback é um recurso muito interessante e também amplamente utilizado em JS;

    Permite executar uma função depois de uma determinada ação

    conceito fundamental para entender a parte assíncrona do JS;
*/
// function exibir(num) {
//     console.log(`A operação resultou em: ${num}`);
// }


// function soma(a, b, callback) {
//     var op = a + b;
//     callback(op);
// }

// function multiplicacao(a, b, cb) {
//     var op = a * b;
//     cb(op);
// }

// soma(2, 2, exibir);

// multiplicacao(2, 4, exibir);

/*
  setTimeout e setInterval
  
  Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos;
  
  Um dos argumentos destas funções é uma callback(assíncrona) function;
 */

//setTimeout: vai executar uma função depois de um tempo
console.log("Antes do setTimeout");

setTimeout(function() {
//depois de 2 segundos, executa essa função sincrona(ou seja, de execução não imediata)
    console.log("Testando o setTimeout");//area do callback
    
},2000);

console.log("Depois do setTimeout");

//setInterval: vou estar executando uma função a cada 1 segundo por exemplo, e não para até que eu coloque uma instrução de parada
setInterval(function() {
//depois de 2 segundos, executa essa função assíncrona
    console.log("Testando setInterval");

},1000);

//funções muito complexas dentro da callback podem gerar problemas no computador do usuário