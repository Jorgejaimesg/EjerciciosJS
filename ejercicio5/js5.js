// 5. Contar rango de números
// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos
// (excluyéndolos):
// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// // código de prueba
// console.log(contarRango(1, 9)) // 7
// console.log(contarRango(1332, 8743)) // 7410
// console.log(contarRango(5, 6)) // 0

function contarRango(num1,num2){
    let total=0
    for (let counter =num1+1; counter<num2; counter++){
        total++
    }
    console.log(total);
    return
}
let n1=prompt('ingrese el numero menor');
let n2=prompt('ingrese el numero mayor');
contarRango(n1,n2);