// 8. Número de aes (letra "a")
// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la
// letra "a":

// // código de prueba
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0
function numeroDeAes(palabra){
    let counter=0;
    for (let value of palabra){
        if (value==='a'){
            counter++
        }
    }
    return counter
}
word=prompt('ingrese la palabra')
console.log(numeroDeAes(word))