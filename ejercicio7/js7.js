// 7. Sumar rango de números
// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función
// debe retornar la suma de los números en ese rango (incluyéndolos).
// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// // código de prueba
// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 10

function sumarRango(nInicial,nFinal){
    let total=0;
    for(let counter=nInicial;counter<=nFinal;counter++){
        total+=counter;
    }

    return total
}
let n1= parseInt (prompt('ingrese el primer numero'))
let n2=parseInt(prompt('ingrese el segundo numero'))
console.log(sumarRango(n1,n2))