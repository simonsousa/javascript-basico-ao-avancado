/*
    DRY(Don't Repeat Yourself)

    Nós criamos funções normalmente quando precisamos executar um pedaço de código várias vezes em nosso código, então ao invés de reescrever o mesmo código dezenas de vezes, colocamos esse código dentro de uma função para que possamos reutilizar esse código várias vezes. Esse é o principio de programação DRY.
    
    Este princípio tem como finalidade prevenir uma gama exagerada de códigos repetidos em nossos scripts e utilizando funções conseguimos aplicar este princípio com facilidade

*/

/*
*    Imagine que precisamos calcular a idade de uma pessoa e depois verificar se esta pessoa é maior de idade, veja como *    ficaria este trecho de código no exemplo:
*/

// var nomePessoa = "Joana";
// var anoDeNascimento = 2013;

// var idade = 2025 - anoDeNascimento;
// if ( idade >= 18 ) {
    
//     console.log(`${nomePessoa} é maior de idade`);

// } else {

//     console.log(`${nomePessoa} tem menos de 18 anos`);

// }

// nomePessoa = "Cassiano";
// anoDeNascimento = 1988;

// idade = 2025 - anoDeNascimento;
// if ( idade >= 18 ) {
    
//     console.log(`${nomePessoa} é maior de idade`);

// } else {

//     console.log(`${nomePessoa} tem menos de 18 anos`);

// }

/*
    Este trecho de código funciona, porém imagine que tenhamos cinquenta pessoas, teríamos então que repetir estes trechos várias e várias vezes. Olhe como ficaria se utilizássemos uma função no exemplo:
*/ 

function verificarIdade( nomePessoa, anoDeNascimento ) {
    var idade = 2025 - anoDeNascimento;
    if ( idade >= 18 ) {
        
        return `${nomePessoa} é maior de idade`
    
    } else {

        return `${nomePessoa} tem menos de 18 anos`

    }
}

let nome = "Joana"
let nascimento = 2012;

console.log(verificarIdade(nome,nascimento));

console.log(verificarIdade("Cassiano",1988));

nome = 'John';
nascimento = 1978;


let texto = verificarIdade( nome , nascimento )//eu posso armazenar o resultado da minha função dentro de uma variável

console.log(texto)

/*
    Veja no novo código estamos fazendo os mesmos cálculos e verificações, porém colocamos toda a lógica dentro de uma função, evitando assim reescrever nosso código e o deixando mais limpo e organizado.
*/ 