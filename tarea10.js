function verdadera() {
    return true
}

console.log(verdadera())

function promesa() {
    return setTimeout(() => console.log('Hola soy una pormesa'), 5000)
}


console.log(promesa())

function* generadora() {
    let id = 0
    while (true) {
        if (id === 6) {
            return id
        }
        yield id += 2
    }
}

const gen = generadora()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


