const importar = require('./collectibles.js')

const hotToys = importar("hoT toYs")
const bandai = importar("baNdai")
const starWars = importar("Star wars")

//console.log(hotToys)
//console.log(bandai)
//console.log(starWars)

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]
//console.log(unifiedCollectibles)

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach((fig,i) => {
            console.log(`${i+1} - ${fig.marca} ${fig.nombre} --> precio: ${fig.precio} --> cantidad: ${fig.stock} `)
        })
    },
    figuresByBrand: function(brand){
        const figFiltradas = this.figuras.filter(({marca}) => marca.toLowerCase() === brand.toLowerCase())
        return figFiltradas
    }
} 
//collectibles.listFigures()
//console.log(collectibles.figuresByBrand("hoT toYs"))