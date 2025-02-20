class Principal {

    constructor(nome, idade, peso, altura) {
        
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = this._peso / (this._altura * this._altura);
    
    }

    //é equivalente á um set imc
    calcularIMC() {
        return (this._peso / (this_.altura * this._altura)).toFixed(2);
    }

    //get: pegar, retornar uma informação
    get nome () {
        return this._nome;
    }

    get idade () {
        return this._idade;
    }

    get peso () {
        return this._peso;
    }

    get altura () {
        return this._altura;
    }

    get imc () {
        return this._imc;
    }

    //set: configurar, alterar, editar
    set nome(novoNome){
        this._nome = novoNome;
    }

    set idade(novaIdade){
        this._idade = novaIdade;
    }

}

let pessoa1 = new Principal("Edson maia", 40, 84.5, 1.70)

console.log(`Nome: ${pessoa1.nome}`)
console.log(`Idade: ${pessoa1.idade}`)
console.log(`Altura: ${pessoa1.altura}`)
console.log(`IMC: ${(pessoa1.imc)}`)


pessoa1.nome = 'Edvaldo Martins';
pessoa1.idade = 25;
