const redesSociais =['facebook', 'instagram', 'twitter']

// for (let i =0; i < redesSociais.length; i++){
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

redesSociais.forEach(function(redeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${redeSocial}`)
})

const alunos =['Pedro', 'Julia', 'Adriana', 'Marcelo', 'Robson']

const alunosPsi = alunos.map(function(itemAtual){
    // itemAtual = {
    //     nome: itemAtual,
    //     curso: "psicologia"
    // }

    return {
        nome: itemAtual,
        curso: "psicologia"
    }
})

console.log(alunosPsi)

const Adriana = alunosPsi.find(function(item){
    return item.nome == 'Adriana'
})

const indexAdriana = alunosPsi.findIndex(function(item){
    return item.nome == 'Adriana'
})

console.log(Adriana)
console.log(indexAdriana)

alunosPsi.push({
    nome: 'Intruso',
    curso: 'publicidade'
})

//every
const todosAlunosMesmoCurso = alunosPsi.every(function(item){
    return item.curso === 'psicologia'
})

console.log(todosAlunosMesmoCurso)

const alunoPubli = alunosPsi.some(function(item){
    return item.curso === 'publicidade'
})

const alunosDoisCursos = alunosPsi.some(function(item){
    return item.curso === 'publicidade' && item.curso === 'psicologia'
})

console.log(alunoPubli)
console.log(alunosDoisCursos)// algum aluno cursa os dois cursos? A resposta é não, o retorno será falso

function filtraAlunosdePublicidade(alunos){
    return alunos.curso === 'publicidade'
}

const filtraAlunosPublicidade2 = alunos => alunos.curso === 'publicidade' //criando a função anterior como arrow//pode-se omitir os parênteses caso haja apenas um ou nenhum argumento


const filtroAlunoPublicidade = alunosPsi.filter(filtraAlunosdePublicidade) 

console.log(filtroAlunoPublicidade)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual

    return acumulador
}, 0)

console.log(soma)

//como fazer a soma usando o for

let somaFor = 0

for (let i =0; i < nums.length; i++) {
    somaFor += nums[i]
}
console.log(somaFor)

const nomesAlunos = alunosPsi.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `

    return acumulador
}, '')

console.log(nomesAlunos)