const datosPers = {
    nombre: 'Diamela',
    apellido: 'Villalba',
    edad: 40,
    altura: 1.70,
    eresDesarrollador: false
}

const miEdad = datosPers.edad
console.log(miEdad)

const datosTodos = [{ nombre: 'Antonela', apellido: 'Fasano', edad: 33, altura: 1.54, eresDesarrollador: false }, { nombre: 'Maria Luz', apellido: 'Gonzalez', edad: 46, altura: 1.68, eresDesarrollador: false }, datosPers]
console.log(datosTodos)

const nuevaLista = datosTodos.sort((a, b) => a.edad - b.edad)
console.log(nuevaLista)
