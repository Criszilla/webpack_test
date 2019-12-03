const path = require('path')//Packs Sistema de rutas de Node

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        precios: path.resolve(__dirname,'src/js/precios.js'),
        contacto: path.resolve(__dirname,'src/js/contacto.js'),
    },
    mode:'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    }
}