const users = require('../modal/dataUsers.json');
// const express = require('express');
const fs = require('fs');


const allUsers = (_, response) => {
  response.send(users);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchUserForId = (request, response) => {
  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    response.status(200).send(userEncontrado)

  } else {
    response.status(404).send("User não encontrado")
  }

};

const saveUser = (request, response) => {

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  users.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile("./scr/modal/users.json", JSON.stringify(users), (err) => { console.log(err) })
  response.status(201).send("User incluido")
};


const deleteUser = (request, response) => {
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



const upDateUser = (request, response) => {

  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    posicao = userEncontrado.indexOf(userEncontrado.id);
    const novoId = userEncontrado.id
    users.splice(posicao, 1);
    const novoUser = request.body
    users.push(
      { id: novoId, ...novoUser }
    )
    fs.writeFile("./scr/modal/dataUsers.json", JSON.stringify(users), (err) => { console.log(err) })
    response.status(201).send("User incluido")
  };
}

module.exports = { allUsers, searchUserForId, saveUser, deleteUser, upDateUser }
