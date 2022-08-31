// Factorial bucle For

var resultado = 1;

for (let i = 1; i <= 10; i++) {
    resultado = resultado * i;
}
console.log(resultado);

// Factorial Bucle While

var total = 1;
var contador = 0;
while (contador < 10) {
    contador++;
    total = total * contador
}
console.log(total);

// Factorial con while bifurcacion if y sentencia break

var factorial = 1;
var cont = 0;
while (cont <= 10) {
    cont++;
    factorial = factorial * cont
    if (cont === 10) {
        break
    }
}
console.log(factorial);