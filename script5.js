    /*
    COERÇÃO: igualdade apenas de valores
    
    operadores ==   (igualdade)
    operadores ===  (igualdade Restrita)

    A grande diferença entre eles é que na linguagem 
    
    JavaScript o operador de igualdade executa as 
    
    comparações com coerção de dados, enquanto o operador 
    
    de igualdade restrita não utiliza coerção.
    
    */
var variavelCoercao = 37;
var variavelSemCoercao = 37;

if (variavelCoercao == "37") {
    
    console.log("Comparação com coerção.");

}

if (variavelSemCoercao === "37") {
    
    console.log("Este trecho não será executado, sem coerção");

}

/*
    Vendo o exemplo, a primeira decisão lógica retornará verdadeiro, pois ao 
    
    realizar a operação de ==(igualdade) a linguagem automaticamente tentou 
    
    converter o valor de ambas as variáveis para o mesmo tipo de dado para 
    
    efetuar a comparação, retornando assim verdadeiro pois ambos os valores 
    
    são 37. Entretanto ao vermos a segunda decisão ===(Igualdade Restrita)

    tentando comparar o valor da variável com a string '37', o que retornará f
    
    falso, pois sem a coerção de dados não é possível um retorno verdadeiro 
    
    ao comparar dois tipos de dados diferentes.
    
    */