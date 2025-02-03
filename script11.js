/*
    Uma função também pode chamar outras funções e uma função não precisa necessariamente retornar um resultado, poderíamos por exemplo ter colocar o log da mensagem de retorno dentro da função como no exemplo:
*/ 
function verificarIdade( nomePessoa , anoDeNascimento) {
    var idade = 2025 - anoDeNascimento
    if ( idade >= 18 ) {
        
        console.log(`${nomePessoa} é maior de idade`)

    } else {

        console.log(`${nomePessoa} tem menos de 18 anos`)

    }
}
var nome = "Joana"
var nascimento = 2002

verificarIdade( nome, nascimento )

verificarIdade( "Cassiano" , 1988 )

nome = 'John'
nascimento = 1978;

verificarIdade( nome , nascimento )