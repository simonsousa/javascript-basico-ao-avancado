/*
    NOTAÇÃO:

    Chamamos de notação a forma utilizada para retornar um valor de um objeto.
    As duas formas possíveis de notação para retornar os valores de um objeto são a notação de ponto e notação de colchetes, como visto no exemplo anterior.

    Sabendo agora como criar um objeto, podemos utilizar objetos para agrupar dados semelhantes, como de uma casa ou de um carro, de uma forma mais estruturada, algo que existe certa dificuldade quando utilizamos arrays para agrupar dados.

    Podemos ver também no exemplo que criamos que as propriedads de um objeto aceitam diferentes tipos de dados como valores booleanos, numéricos e textos, porém quando trabalhamos com objetos, nós podemos ir além, como por exemplo utilizar objetos, arrays ou mesmo funções dentro de objetos, veja o exemplo:

*/

var carro = {
    
    extras: ['ar-condicionado','freio abs','som'],
    
    velocidade: 0,
    
    faroisLigados: false,
    
    ligarFarois: function() {
        this.faroisLigados = true;
    },

    acelerar: function(velocidade) {
        this.velocidade += velocidade;
    },

    freiar: function() {
        this.velocidade = 0;
    },
}
console.log(carro);

carro.ligarFarois();
console.log(`Farois ligados: ${carro.faroisLigados}`);

carro.acelerar(50);

console.log(`Velocidade: ${carro.velocidade}`);

carro.freiar()

console.log(`Velocidade ${carro.velocidade}`);

/*
    Diferente do último exemplo, declaramos neste novo exemplo, arrays e funções, que podemos chamar de métodos, para propriedades do objeto nomeado (carro). Na linha 5 declaramos uma função anônima para a propriedade ligarFarois, esta função altera o valor da propriedade faroisLigados do objeto carro para true, como se fosse a função de um carro real, executamos esta função na linha 15 do exemplo.

    Na linha 8 declaramos uma função anônima com um parâmetro chamado velocidade para a propriedade acelerar do objeto carro, está definido nesta função que para cada vez que ela for chamada ela irá somar na propriedade velocidade do objeto carro, a velocidade passada por parâmetro na função anônima, executamos este método na linha 17 do exemplo passando o valor 50 por parametro.

    Na linha 11 declaramos uma função anônima para a propriedade freiar, esta função define o valor da propriedade velocidade do objeto carro para o valor 0, executamos esta função na linha 19 do exemplo.

    Veja como é o resultado dos logs gerados:

    Console
    Farois ligados: true
    Velocidade: 50
    velocidade: 0

    Experimente alterar os valores do exemplo, criar novos logs no exemplo e ver quais serão os resultados obtidos.
*/ 