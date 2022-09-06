const fechaHoy = new Date()
console.log(fechaHoy)

const nacimiento = new Date('November, 16, 1981')
console.log(nacimiento.toLocaleDateString())

let comparacion = fechaHoy < nacimiento
console.log(comparacion)

const diaNac = nacimiento.getDate()
console.log(diaNac)

const mesNac = nacimiento.getMonth() + 1
console.log(mesNac)

const anyoNac = nacimiento.getFullYear()
console.log(anyoNac)

