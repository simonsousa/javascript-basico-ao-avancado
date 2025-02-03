/* Lógica do script:

    imaginemos que a decisão lógica que criamos, seja se 
    
    temos mais de uma maçã, e se as maçãs são verdes. Se 
    
    tivermos duas maçãs, mas uma delas for vermelha, a 
    
    decisão retornará falso. Assim como se tivermos três 
    
    maçãs e uma for verde e duas forem vermelhas a decisão 
    
    também retornará falso. A decisão apenas retornará 
    
    verdadeiro se tivermos mais de uma maçã e todas forem 
    
    verdes

*/ 

var numeroMacas = 4;
var todasAsMacasSaoVerdes = false;

if (numeroMacas > 1 && todasAsMacasSaoVerdes === true) {
    
    console.log("Temos mais de uma maçã e todas as maçãs são verdes.");

} else {
    
    console.log("Ou não temos mais de uma maçã ou nem todas são verdes");

}
