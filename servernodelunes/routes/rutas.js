//Importar una clase de expres para separar mis rutas
const {Router}= require('express')

//usar esa clase
const rutas=Router()

//Listado de Rutas

rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.post('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.put('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.delete('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

//exportar rutas
module.exports = rutas