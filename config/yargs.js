
const argv=require('yargs')
        .option('b', {
            alias: 'base',                        
            type: 'number',
            describe:'Es la base demla tabla de multiplicar  '
        })
        .option('h',{
            alias:'hasta',
            type:'number'
        })
        .option('l', {
            alias: 'listar',                        
            type: 'boolean',
            default:false,
            describe:'Muestra la tabla en consola'
            
        })
        .check((argv,options)=>{
            if(isNaN(argv.b) || isNaN(argv.h)){
                throw 'La base y el hasta tiene que ser un numero'
            }
            return true
        })
        .argv 


module.exports = argv;