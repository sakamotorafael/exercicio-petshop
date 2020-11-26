const express = require("express")
const router = express.Router()
const funcoes = require("../funcoes")

router.get("/", (req, res)=>{
    res.send("Home Page")
})

router.get("/pets/all", (req, res)=>{
    res.send(funcoes.listarPets())
})

router.get("/pets/:id", (req, res)=>{
    let idPet = req.params.id
    res.send(funcoes.retornaPet(idPet))
})

module.exports = router