const pets = require('../models/pets')

function vacinarPet(petID, vacina) {
    let vacinou = false
    pets.forEach((cadastro, index)=>{
        if (cadastro.ID == petID){
            pets[index].vacinas.push(vacina)
            vacinou = true
            return "Vacina para o pet " + pets[index].nome + " registrada."
        } 
      }) 
    if (vacinou == false){
        return "Vacinação:\nNão encontramos o cadastro do seu pet."
    } 
}

function castrarPet(petID) {
    let castrou = false
    pets.forEach(function(cadastro, index){
        if (cadastro.ID == petID){
            if (pets[index].castrado == false){
                pets[index].castrado = true
                castrou = true
                return "A castração do pet " + pets[index].nome + " foi registrada."
            } else {
                return "O pet " + pets[index].nome + " já é castrado."
            }     
        }
    })
    if (castrou == false){
        return "Não encontramos o cadastro do seu pet."
    }
}
  
function adicionarPet(pet) {
    pet.ID = pets.length
    pets.push(pet)
}
  
function servicoDeHigiene(petID, service, date) {
    let higienizou = false
    let higiene = {servico:service, data:date}
    pets.forEach((cadastro, index)=>{
        if (cadastro.ID == petID){
            pets[index].higiene.push(higiene)
            higienizou = true
            return "A higienização do pet " + pets[index].nome + " foi registrada."
        }
    })
    if (higienizou == false){
        return "Castração:\nNão encontramos o cadastro do seu pet."
    }
}

function buscaNomePet(nome){
    return pets.find((pet) => pet.nome == nome)
}

function buscaIdPet(id){
    let match = pets.find((pet) => pet.ID == id)

    if (match != undefined) {
        return match
    } else {
        return "Pet não encontrado."
    }
}

module.exports = {
    vacinarPet,
    castrarPet,
    adicionarPet,
    servicoDeHigiene,
    buscaIdPet,
    buscaNomePet
}


