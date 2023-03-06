//rest operator
function somar(){
    let soma = 0

    for (let i=0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma
    //console.log(arguments)//  o retorno é chamado de dicionário e não é um array mas é iterável
    // return a+b
}

console.log(somar(10,20,30))

function somarComRest(...numeros){
    let soma = numeros.reduce((total, numeroAtual)=>{
        total += numeroAtual
        return total
    },0)
    return soma
}
console.log(somarComRest(10,20,30))
//não é possível passar dois argumentos rest ... e ele deve ser sempre o último argumento passado

//spread operator
const numeros = [1,2,3,4]
console.log(...numeros)

const timesFutebolSP = ['SPFC', 'Palmeiras', 'Curintia', 'Santos']
const timesFutebolRJ = ['Fluminense', 'Flamengo', 'Vasco', 'Botafogo']

// const timesJuntos = timesFutebolSP.concat(timesFutebolRJ)
const timesJuntos = [...timesFutebolSP, ...timesFutebolRJ]
console.log(timesJuntos)

//spread em objetos
const carroArmando = {
    modelo: 'gol',
    marca: 'vw',
    potencia: 1.6
}
const carroFulgencio = {
    ...carroArmando,
    potencia: 1.8
}
console.log(carroFulgencio)

//desestruturação de objetos
// const motorFulgencio = carroFulgencio.potencia //acessando o atributo do objeto de forma normal
const {potencia: motorFulgencio} = carroFulgencio //acessando com a desestruturação
const {potencia: motorArmando} = carroArmando //usando alias pra acessar o mesmo atributo em objetos diferentes

console.log(motorArmando)
console.log(motorFulgencio)

//desestruturação de arrays
const [item1, item2, item3, ...outrosTimes] = timesJuntos

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)