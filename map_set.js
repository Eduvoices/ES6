let meuMap = new Map()
meuMap.set('nome', 'louis')
meuMap.set('stack', 'html, css, js')
console.log(meuMap)

const nome = meuMap.get('nome')
console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has('sobrenome'))

// meuMap.clear()

console.log(meuMap.size)

//iterando o map
for (let chave of meuMap.keys()){
    console.log(chave)
} //recuperando as chaves

for (let valor of meuMap.values()){
    console.log(valor)
} //recuperando os valores

for (let entradas of meuMap.entries()){
    console.log(entradas)
} //recuperando entradas

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
} //fazendo a desestruturação

meuMap.delete('stack')
console.log(meuMap)

const cpfs = new Set() //set não pode ter intens repetidos
cpfs.add(98955882084)
cpfs.add(49884675031)
cpfs.add(25287782012) //um numero não pode começar com um 0 à esquerda, por isso, quando for o caso, deve-se usar uma string
console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values()) //no set, a chave e o valor são iguais

cpfs.forEach((valor)=> {
    console.log(valor)
}) //a função forEach pode ser usada tanto no map quanto no set

const arrays = ['Carlos Eduardo', 'Bruces Field', 'Carimbo Miguel', 'Xekira', 'Carlos Eduardo', 'Bruces Field']

const arrayComoSet = new Set([...arrays])

const arraySemItemDuplicado = [...arrayComoSet]
console.log(arrayComoSet)
console.log(arraySemItemDuplicado)