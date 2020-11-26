//const http = require("http")
//const url = require("url")
const express = require("express")
const rotasPets = require("./routes/rotasPets")

const app = express()
app.listen(3030, ()=>console.log("Servidor rodando."))

app.post("/pets/:id/castrar")
/*
let petNovo = {
    nome: "Robson",
    raca: "Viraleesho Irlandês",
    peso: 10,
    idade: 3,
    cor: "Caramelo",
    porte: "Médio",
    sexo: "m",
    dono: "Natalia",
    alergias: [],
    castrado: false,
    vacinas: [],
    higiene: []
}

//let vacina = {nome: "Rotavirose", data:"13/11/2020"}

funcoes.adicionarPet(pet)

//funcoes.vacinarPet(2, vacina)

//funcoes.castrarPet(2)

//funcoes.servicoDeHigiene(2, "bannho", "31/10/2020")

//funcoes.listarPets()

*/