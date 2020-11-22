//funções

const pets = require('../pets')

function vacinarPet(petID, vacina) {
    let vacinou = false
    pets.forEach(function(cadastro, index){
        if (cadastro.ID == petID){
            pets[index].vacinas.push(vacina)
            vacinou = true
            console.log ("Vacina para o pet " + pets[index].nome + " registrada:")
            console.log(vacina)
        }
      })
    if (vacinou == false){
      console.log("Vacinação:\nNão encontramos o cadastro do seu pet.")
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
      return "Castração:\nNão encontramos o cadastro do seu pet."
    }
}
  
function adicionarPet(pet) {
  pet.ID = pets.length
  pets.push(pet)
}
  
function servicoDeHigiene(petID, service, date) {
    let higienizou = false
    let higiene = {servico:service, data:date}
    let mensagem = ""
    pets.forEach((cadastro, index)=>{
      if (cadastro.ID == petID){
        pets[index].higiene.push(higiene)
        higienizou = true
        mensagem = "A higienização do pet " + pets[index].nome + " foi registrada:" + 
        "\n" + higiene.servico + " em " + higiene.data
      }
    })
    if (higienizou == false){
      mensagem = "Castração:\nNão encontramos o cadastro do seu pet."
    }
    return mensagem
}

function listarPets() {
    let lista = ""
    pets.forEach((pet)=>{
      lista += pet.nome + "<br>" + "raça: " + pet.raca + "<br>" + "dono: " + pet.dono + "<br><br>"
    })
    return lista
}

function buscarPet(nome){
  let resultado = pets.find((pet) => pet.nome == nome)
  return resultado
}

function retornaPet(id){
  let match = pets.find((pet) => pet.ID == id)

  if (match != undefined) {
    //let stringVacina = pets[id]
    let stringPet = "nome: " + match.nome + "<br>" +
      "raça: " + match.raca + "<br>" +
      "peso: " + match.peso + "<br>" +
      "idade: " + match.idade + "<br>" +
      "cor: " + match.cor + "<br>" +
      "porte: " + match.porte + "<br>" +
      "sexo: " + match.sexo + "<br>" +
      "dono: " + match.dono + "<br>" +
      "castrado: " + match.castrado  
    
    return stringPet
  } else {
    return "Pet não encontrado."
  }
}

module.exports = {
    vacinarPet,
    castrarPet,
    adicionarPet,
    listarPets,
    servicoDeHigiene,
    buscarPet,
    retornaPet
}