//criando objeto com função construtora
function Pokemon(nome, tipo){
    this.nome = nome;
    this.tipo = tipo
} 

const pikachu = new Pokemon('elétrico', 'elétrico')

//criando objeto com classe
class Pokemão {
    nome = '' //essas strings vazia não são necessárias, basta usar o construtor abaixo que os atributos em questão serão criados
    tipo = ''

    #hp = 100; //basta usar # para que o atributo se torne privado(encapsulamento)

    constructor(nomePkm, tipoPkm){
        this.nome = nomePkm
        this.tipo = tipoPkm
    }

    atacar(nomeAtk) {
        console.log(`${this.nome} atacou com ${nomeAtk}`)
    }

    danoRecebido(){
        this.#hp -= 10
    }

    exibeHp(){
        console.log(this.#hp)
    }
}

//herança e polimorfismo
class Charizard extends Pokemão {}//sendo uma instância, vai herdar os atributos da classe mãe
class Bulbasauro extends Pokemão {
    constructor() {
        super('bulbasauro', 'venenoso')
    }

    atacar(){
        console.log(`${this.nome} atacou com Chicote de Vinhas}`)//polimorfismo
    }
}

const charizardDoAsh = new Charizard('charizard', 'dragão')
const charizard = new Pokemão()
charizard.nome = 'charizard'
charizard.tipo = 'fogo'

const bulbasauro = new Pokemão('bulbasauro', 'grama')
const bulbasaurodoAsh = new Bulbasauro()

charizard.atacar('lança-chamas')
console.log(charizard)
console.log(bulbasauro)
console.log(charizardDoAsh)
console.log(bulbasaurodoAsh)

console.log(charizardDoAsh instanceof Charizard)
console.log(charizardDoAsh instanceof Pokemão)

bulbasaurodoAsh.exibeHp()
bulbasaurodoAsh.danoRecebido()
bulbasaurodoAsh.exibeHp()
bulbasaurodoAsh.atacar()
