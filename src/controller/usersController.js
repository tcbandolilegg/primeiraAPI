
const usersPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataUsers.json'
const users = require(`${usersPath}`);
const fs = require('fs')


const allUsers = (_, response) => {
  response.send(users);
};

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

  const novoId = Date()
  const novoUsuario = request.body

  users.push(
    { id: novoId, ...novoUsuario }
  )
  try {
    fs.unlinkSync(`${usersPath}`)
    console.log('Arquivo excluido no incluir users')
    //file removed
  } catch (err) {
    console.error('Erro na exclusão do arquivo users', err)
  }
  console.log('Users depois do push users', users)
  try {
    fs.writeFile(`${usersPath}`, JSON.stringify(users))
    response.status(201).send("User incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo users', err)
  }
};


const deleteUser = (request, response) => {
  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    posicao = userEncontrado.indexOf(userEncontrado.id);
    users.splice(posicao, 1);
    try {
      fs.writeFile(`${users}`, JSON.stringify(users))
      response.status(200).send("Usuário Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo users', err)
    }
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
    try {
      fs.writeFile(`${users}`, JSON.stringify(users))
      response.status(200).send("Usuário Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo users', err)
    }
  };
}

module.exports = { allUsers, searchUserForId, saveUser, deleteUser, upDateUser }
