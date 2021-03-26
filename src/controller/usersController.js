const users = require('../modal/users.json');
// const express = require('express');
const fs = require('fs');


const listarTodosUsers = (_, response) => {
  response.send(users);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const pesquisaPorId = (request, response) => {
  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    response.status(200).send(userEncontrado)

  } else {
    response.status(404).send("User não encontrado")
  }

};

const salvarUser = (request, response) => {

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  users.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile("./scr/modal/users.json", JSON.stringify(users), (err) => { console.log(err) })
  response.status(201).send("User incluido")
};


const apagarUser = (request, response) => {
  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    posicao = userEncontrado.indexOf(userEncontrado.id);
    users.splice(posicao, 1);
    fs.writeFile("./scr/modal/users.json", JSON.stringify(users), (err) => { console.log(err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("User não encontrado")
  }

}

module.exports = { listarTodosUsers, pesquisaPorId, salvarUser, apagarUser }