// Chamando os módulos
const moment = require('moment');
const fs = require('fs');
// Nome do arquivo a ser chamado
const nomeArquivo = 'pets.json'; //coloco o caminho do arquivo
const nomePetshop = "*** PETSHOP DH ***";
// Lendo o conteúdo do arquivo JSON
let petsJSON = fs.readFileSync(nomeArquivo)
// Converte para o formato JavaScript
let arquivoPets = JSON.parse(petsJSON);

//console.log(arquivoPets.pets);

const atualizarJson = () => {
    let listaJson = JSON.stringify(arquivoPets);
    fs.writeFileSync(nomeArquivo, listaJson, 'utf-8');
}

// Declarando função - arrow function
const adicionarPet = (infoPet) => {
    arquivosPets.pets.push(infoPet);
    atualizarJson();

}
// Executa função
// adicionarPet({
//     nome: 'Rex',
//     idade: 4,
//     raca: 'vira-lata caramelo',
//     tipo: 'cachorro',
//     vacinado: false,
//     genero: 'M',
//     servicos: []
// });
// console.log(pets);

// Declarando a função
const listarPets = (listaDePets) => {
  let vacinado // Declarando uma variável para salvar o status de vacinado
  for (let i = 0; i < listaDePets.length; i++) {
    // Checando se o pet está vacinado
    // if (listaDePets[i].vacinado) { 
    //   // Pet está vacinado
    //   vacinado = "vacinado"
    // } else { 
    //   // Pet não está vacinado
    //   vacinado = "não vacinado"
    // }
    // Retornando os dados
    console.log(`${listaDePets[i].nome}, ${listaDePets[i].idade} anos, ${listaDePets[i].raca}, ${listaDePets[i].tipo}, ${(listaDePets[i].vacinado)? "vacinado": "não vacinado"}, ${listaDePets[i].genero}`)
    for (let index = 0; index < listaDePets[i].servicos.length; index++) {
      console.log(`${listaDePets[i].servicos[index].data} - ${listaDePets[i].servicos[index].nome}`);
    }
  }
}
const vacinarPet = (pet) => {
  if (!pet.vacinado){
    pet.vacinado = true
    atualizarJson();
    console.log(`${pet.nome} foi vacinado com sucesso`);
  } else   {
    atualizarJson();
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
}
const campanhaVacina = (listaPets) => {
  let totalVacinados = 0;
  for (let i = 0; i < listaPets.length; i++) {
    if (!listaPets[i].vacinado) {
      listaPets[i].vacinado = true
      totalVacinados++
    }
  }
  atualizarJson();
  console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha!`);
}
const darBanhoPet = (pet) => {
  pet.servicos.push({
    nome: 'banho',
    data: moment().format('DD-MM-YYYY')
  })
  atualizarJson();
  console.log(`${pet.nome} acabou de tomar banho!`);
}
const tosarPet = (pet) => {
  pet.servicos.push({
    nome: 'tosa',
    data: moment().format('DD-MM-YYYY')
  })
  atualizarJson();
  console.log(`${pet.nome} está com cabelinho na régua!`);
}
const apararUnhasPet = (pet) => {
  pet.servicos.push({
    nome: 'corte de unhas',
    data: moment().format('DD-MM-YYYY')
  })
  atualizarJson();
  console.log(`${pet.nome} está de unhas aparadas!`);
}

const buscarPet = (nomePet) => {
  const petEncontrado = arquivoPets.pets.find((pet) =>{
    return pet.nome == nomePet;
  });
    console.log(petEncontrado ? petEncontrado : 'Nenhum pet encontrado com esse nome');

}

const atenderCliente = (pet, servicos) => {
  console.log( `Olá, ${pet.nome}!`);
  servicos(pet);
  console.log('Até mais!');
}

const listarVacinados = () => {
  console.log('**Vacinado!**');
  let vacinados = arquivoPets.pets.filter((pet) => {
    return pet.vacinado;
  })

  console.log(vacinados);
  console.log(`Temos ${vacinados.length} pets vacinados!`);
}

listarVacinados();

//atenderCliente(arquivoPets.pets[0], darBanhoPet);
//console.log ("----------------");
//atenderCliente(arquivoPets.pets[4], tosarPet);

//buscarPet('Xinforinfola');

//listarPets(arquivoPets.pets);
//darBanhoPet(arquivoPets.pets[1]);
//tosarPet(arquivoPets.pets[0]);
//vacinarPet(arquivoPets.pets[1]);
//apararUnhasPet(arquivoPets.pets[2]);