const importar = (marca) => {
    const fs = require('fs')
    let nombreArchivo = 0
    if(marca.toLowerCase() === "hot toys") {
        nombreArchivo = "figuras1"
    }
    else if(marca.toLowerCase() === "bandai"){
        nombreArchivo = "figuras2"
    }
    else if(marca.toLowerCase() === "star wars"){
        nombreArchivo = "figuras3"
    }
    const path = `./datos/${nombreArchivo}.json`
    const marcaJSON = fs.readFileSync(path,'utf-8')
    const marcaParse = JSON.parse(marcaJSON)
    return marcaParse
} 
module.exports = importar