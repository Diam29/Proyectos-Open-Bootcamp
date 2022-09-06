const fliaSet = [{ nombre: 'Antonela' }, { nombre: 'Dora' }, { nombre: 'Lorena' }, { nombre: 'Delia' }, { nombre: 'Emiliano' }]

const fliaSet2 = new Set(fliaSet)
fliaSet2.add({ nombre: 'Diamela' }, { nombre: 'Diamela' })
console.log(fliaSet2)

fliaSet2.add({ nombre: 'Javascript' })

console.log(fliaSet2)