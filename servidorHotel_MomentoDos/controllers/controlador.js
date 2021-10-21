//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarJugador(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un jugador"
    })

}

function buscarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoybuscando un jugador"
    })

}

function buscarJugadores(peticion = request, respuesta = response) {

    respuesta.json({
        mensaje: "estoy buscando todos los jugadores"
    })

}

function editarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id

    respuesta.json({
        mensaje: "estoy editando un jugador"
    })

}

function eliminarJugador(peticion = request, respuesta = response) {

    let id = peticion.params.id
    let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy eliminando un jugador"
    })

}

module.exports = {

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}