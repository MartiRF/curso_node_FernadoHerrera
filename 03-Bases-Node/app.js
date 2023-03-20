const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

// console.log(process.env)
// console.log(argv)
// console.log('base:yargs', argv.base)


// const base = 3

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err))