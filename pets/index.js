let pets = [
  {
    ID: 1,
    nome: "Stark",
    raca: "SRD",
    peso: 13,
    idade: 10,
    cor: "Caramelo",
    porte: "Médio",
    sexo: "m",
    dono: "Thor Odinson",
    alergias: ["Corante Vermelho", "Frutos do mar"],
    castrado: false,
    vacinas: [
      { nome: "Antirrábica", data: "10/11/2015" },
      { nome: "BC500", data: "10/12/2015" }
    ],
    higiene: []
  },
  {
    ID: 2,
    nome: "Ted",
    raca: "Chiahuahua",
    peso: 15,
    idade: 7,
    cor: "Creme",
    porte: "Pequeno",
    sexo: "m",
    dono: "Gabas",
    alergias: ["AAS", "AntiInflamatório"],
    castrado: true,
    vacinas: [{ nome: "BC500", data: "10/12/2015" }],
    higiene: []
  },
]

module.exports = pets

