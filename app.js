
//yargs permite gestonar la linea de comandos como un objeto
const { options } = require('yargs')
const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')
require('colors')







// const base=3




crearArchivo(argv.b,argv.h,argv.l)
.then(nombreArchivo=>console.log(`${nombreArchivo.rainbow} creado`))
.catch(err=>console.warn)
