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
        console.log("A castração do pet " + pets[index].nome + " foi registrada.")
      } else {
        console.log("O pet " + pets[index].nome + " já é castrado.")
        castrou = true
      }     
    }
  })
  if (castrou == false){
    console.log("Castração:\nNão encontramos o cadastro do seu pet.")
  }
}
  
function adicionarPet(pet) {
  pet.ID = pets.length
  pets.push(pet)
}
  
function servicoDeHigiene(petID, service, date) {
  let higienizou = false
  let higiene = {servico:service, data:date}
  pets.forEach(function(cadastro, index){
    if (cadastro.ID == petID){
      pets[index].higiene.push(higiene)
      higienizou = true
      console.log("A higienização do pet " + pets[index].nome + " foi registrada:")
      console.log(higiene.servico + " em " + higiene.data)   
    }
  })
  if (higienizou == false){
    console.log("Castração:\nNão encontramos o cadastro do seu pet.")
  }
}

function listarPets() {
  console.log(pets)
}

module.exports = {
  vacinarPet,
  castrarPet,
  adicionarPet,
  listarPets,
  servicoDeHigiene,
}