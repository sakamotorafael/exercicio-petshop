const pets = require("../models/pets")
const funcoes = require("./funcoes")

const petsController = {
    home: (req, res)=>res.send("Home Page"),
    listar: (req, res)=>res.send(pets),
    petID: (req, res)=>{
        let petId = req.params.id
        res.send(funcoes.buscaIdPet(petId))
    },
    petNome: (req, res)=>{
        let petNome = req.query.nome
        res.send(funcoes.buscaNomePet(petNome))
    },
}

module.exports = petsController