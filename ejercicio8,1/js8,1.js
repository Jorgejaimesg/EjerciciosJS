// 8. Número de caracteres
// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La
// función debe retornar el número de veces que aparece el caracter en el string.

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", e)) // 4

function numeroDeCaracteres(palabra,letra){
    let counter=0;
    for (let value of palabra){
        if (value===letra){
            counter++
        }
    }
    return counter
}
word=prompt('ingrese la palabra')
letra=prompt('ingrese la letra')
console.log(numeroDeAes(word,letra))