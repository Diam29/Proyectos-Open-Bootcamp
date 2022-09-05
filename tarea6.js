const compra = ['leche', 'verduras', 'pan', 'carne', 'pescado', 'huevos', 'detergente']
compra.push('Aceite de Girasol')
console.log(compra)
compra.pop('Aceite de Girasol')
console.log(compra)

const peliculas = [
    { titulo: 'El guerrero pacifico', director: 'Victor Salva', fecha: 2006 },
    { titulo: 'Comer, rezar, amar', director: 'Ryan Murphy', fecha: 2010 },
    { titulo: 'Desobediencia', director: 'Sebastián Lelio', fecha: 2017 }
]
const pelisPost = peliculas.filter((valor => valor.fecha > 2010))
console.log(pelisPost);

const directores = peliculas.map(dir => dir.director)
console.log(directores)

const titulos = peliculas.map(tit => tit.titulo)
console.log(titulos)

const concatenado = titulos.concat(directores)
console.log(concatenado)

const propagacion = [...titulos, ...directores]
console.log(propagacion)