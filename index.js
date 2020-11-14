//projeto global

const funcoes = require('./funcoes')

let pet = {
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

let vacina = {nome: "Rotavirose", data:"13/11/2020"}

funcoes.adicionarPet(pet)

funcoes.vacinarPet(2, vacina)

funcoes.castrarPet(2)

funcoes.servicoDeHigiene(2, "bannho", "31/10/2020")

funcoes.listarPets()