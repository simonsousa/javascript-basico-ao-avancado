/*
imaginemos agora que criamos uma decisão lógica onde fazemos um teste para verificar se temos cinco carros OU se todos os carros são da mesma marca. Se tivermos cinco carros de marcas diferentes, a decisão retornará verdadeiro, pois pelo menos um dos testes retornou verdadeiro, ter cinco carros. Agora se tivermos quatro carros e todos os carros forem de marcas diferentes, a decisão retornará falso pois nenhuma das premissas retornou verdadeiro.
*/

var numeroCarros = 6;
var todosCarrosMesmaMarca = false;

if (numeroCarros === 5 || todosCarrosMesmaMarca === true) {
    
    console.log("Ou todos os carros são da mesma marca.");
    
    console.log("Ou temos cinco carros.");
    
    console.log("Ou as duas coisas juntas.");

} else {
    
    console.log("Não temos cinco carros e nem todos são da mesma marca");
    
}