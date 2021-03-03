const fs=require('fs')
const colors=require('colors')



const crearArchivo=async(base=5,hasta=5,listar=false)=>{

    try {   
        
        
        let salida=''
        
        
        for (let i = 1; i <=hasta; i++) {
            
            salida+=`${base}${'*'.green}${i}${'='.green}${base*i}\n`
            
        }
        
        if(listar){
            console.log('================'.green);
            console.log('Tabla del '.blue,colors.blue(base));
            console.log('================'.green);
            console.log(salida)
        }
    
    
        fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);
    
        return `Tabla del ${base}`        
    } catch (error) {
        throw error
    }


    

}



module.exports={
    crearArchivo
}