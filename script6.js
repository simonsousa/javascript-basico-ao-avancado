/*
    ELSE IF

    Além de decisões lógicas simples e compostas podemos criar 
    
    também decisões lógicas caso uma decisão lógica retorne 
    
    negativo, parece estranho, porém veja o exemplo.

*/ 

var numeroPassageiros = 24;

if ( numeroPassageiros === 0 ) {

    console.log("O transporte está vazio.");

} else if ( numeroPassageiros > 0 && numeroPassageiros < 50 ){

    console.log("O transporte tem passageiros.");

} else {

    console.log("O transporte está lotado.");

}

/*
    veja que criamos uma decisão lógica para verificar se a 
    
    variável numeroPassageiros é igual a zero. Caso o retorno 
    
    desta decisão seja negativo irá para o else logo abaixo, 
    
    porém neste else não é um simples else. É um (else if) 
    
    que está verificando se a variável é maior que zero e 
    
    menor que 50. Caso esta decisão lógica retorne 
    
    verdadeiro, em nosso código irá retornar verdadeiro, irá 
    
    executar o bloco de código destinado a decisão (else if) 
    
    na linha 6. Caso esta segunda decisão lógica também 
    
    retorne falso, então sim irá ser executado o bloco de 
    
    código else que se encontra na linha 8.

    Neste exemplo que criamos, existe apenas um (else if), 
    
    mas poderíamos ter criado diversas decisões lógicas do 
    
    gênero, como por exemplo, verificar se a variável está 
    
    entre zero e vinte e cinco para saber se o transporte 
    
    está meio vazio, e assim por diante 

*/