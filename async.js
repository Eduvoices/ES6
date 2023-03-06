// function funcaoPesada(){
//     let execuções = 0

//     for (let i=0; i < 1000000000; i++){
//         execuções++
//     }
//     return execuções
// }
// console.log('inicio')
// console.log(funcaoPesada())
// console.log('fim')

const funcaoPesadaPromise = new Promise((resolve, reject) => {
        try {
            let execuções = 0

            for (let i=0; i < 1000000000; i++){
                execuçõess++
            }
            resolve(execuções)
        } catch(e) {
            reject('Houve um erro na iteração')
        }
    }
)

const promiseComParâmetros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

// console.log('inicio')
// funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)) //essa tarefa não impede as demais e não é necessária para que o código siga performando
// console.log('fim')

// async function execucaoPrincipal(){
//     console.log('inicio2')
//     await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)) //o código aguarda essa tarefa ser completada
//     console.log('fim2')
// }

//outra forma de usar o await
async function execucaoPrincipal(){
    console.log('inicio2')

    promiseComParâmetros('@scooby-doo', 40028922).then(resultado => {
        console.log(resultado)
    })

    try {
        const resultado = await funcaoPesadaPromise //usando o await dessa forma é necessário usar try e catch
        console.log(resultado)
    } catch(e){
        console.log(e)
    }
    console.log('fim2')
}

execucaoPrincipal()