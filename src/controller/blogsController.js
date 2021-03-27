const users = require('../modal/dataUsers.json');

// const express = require('express');
const fs = require('fs');


const allUsers = (_, response) => {
  response.send(users);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchForId = (request, response) => {
  console.log(request.params.id)
  const userEncontrado = users.filter((user) => {
    return Number(user.id) === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    response.status(200).send(userEncontrado)

  } else {
    response.status(404).send("User não encontrado")
  }

};

const saveUser = (request, response) => {

  const novoId = request.body.cpf + Date()
  const novoUser = request.body

  users.push(
    { id: novoId, ...novoUser }
  )
  fs.writeFile("./src/modal/dataUsers.json", JSON.stringify(users), (err) => { console.log(err) })
  response.status(201).send("User incluido")
};


const deleteUser = (request, response) => {
  const userEncontrado = users.filter((user) => {
    console.log("encontrado", request.params.id)
    return Number(user.id) === Number(request.params.id)
  })
  console.log("encontrado . length", userEncontrado.length)
  if (userEncontrado.length > 0) {
    console.log("user", userEncontrado)
    posicao = users.indexOf(userEncontrado);
    console.log('ollllha offffff ', posicao)
    users.splice(posicao, 1);
    console.log(users)
    fs.writeFile("./src/modal/dataUsers.json", JSON.stringify(users), (err) => { console.log(err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("User não encontrado")
  }

}

module.exports = { allUsers, searchUserForId, saveUser, deleteUser, upDateUser }