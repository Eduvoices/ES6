const minhaFunçao = () => 'Diz arrow'

const retornaCarro = () => (
    {
        modelo: 'onix',
        fabricante: 'chevrolet'
    }
)
    // {
    //  return {
    //     modelo: 'onix',
    //     fabricante: 'chevrolet'
    // }
    //}


console.log(minhaFunçao())
console.log(retornaCarro())

//escopo das arrow
const objetoCarro = {
    velocidadeAtual: 40,
    
    acelerar: function(){
        console.log(this)
        this.velocidadeAtual += 10
    },

    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10
    }
    //ao utilizar oojs, é recomendado usar a forma convencional de funções e não a arrow
}

objetoCarro.acelerar()
objetoCarro.frear()
console.log(carro.velocidadeAtual)