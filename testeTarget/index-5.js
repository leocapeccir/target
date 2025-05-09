// 

function inverteString (string) {

    let resultado = ''

    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i]
    }

    return resultado
}

console.log(inverteString('Consegui a vaga !'))
