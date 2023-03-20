const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar, hasta) => {
    try {

        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base}`.red + ` x ${i} = `.yellow + `${base * i}\n`.bold.underline.red;
        }
        
        if(listar){
            console.log('++++++++++++++'.cyan)
            console.log(` Tabla del:`.bgCyan,`${base}`.bold.red)
            console.log('++++++++++++++'.cyan)
            console.log(consola)
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        // console.log(`tabla-${base}.txt`)
    
        return `tabla-${base}.txt`.bgWhite.black
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}