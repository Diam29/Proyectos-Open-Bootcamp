// Notación
const ar = [1, 2, 3, 4];
console.log(ar[2]);
// array : conjunto de variables puestas en orden 
const lista = [1, 'hola', true, undefined, null];
const lista2 = new Array(2, 'chau', false, undefined, null);
const lista3 = new Array(3);
lista3[0] = 'Soy el primer elemento, index 0';
lista3[1] = 'Soy el segundo elemento';
lista3[2] = 'Soy el tercer';

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);


//Objetos
const movil = {
    anchura: 10,
    altura: 15,
    marca: 'Iphone',
    isWhite: false,
    contactos: ['Anto', 'Loree', 'Tia'],
    tarjeta: {
        marca: 'Sandisk',
        almacenamiento: 248
    }
}

//definir nuevas propiedades
movil.anyo = 2020;
movil.marca = 'Iphone 11';

console.log(movil.contactos);
console.log(movil.tarjeta.marca);
console.log(movil.marca);

// Fechas : Existen librerias de apoyo Ej: (Moment.js)
const ahora = new Date();
console.log(ahora);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);





