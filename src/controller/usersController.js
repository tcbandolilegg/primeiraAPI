const users = require('https://drive.google.com/file/d/1CdhQ5kRBI3Tul1Qxjo4q6coIVrKFrw3c/view?usp=sharing')
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

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  users.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile(`${users}`, JSON.stringify(users), (err) => { console.log(err) })
  response.status(201).send("User incluido")
};


const deleteUser = (request, response) => {
  const userEncontrado = users.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userEncontrado.length > 0) {
    posicao = userEncontrado.indexOf(userEncontrado.id);
    users.splice(posicao, 1);
    fs.writeFile(`${users}`, JSON.stringify(users), (err) => { console.log(err) })
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
    fs.writeFile(`${users}`, JSON.stringify(users), (err) => { console.log(err) })
    response.status(201).send("User incluido")
  };
}

module.exports = { allUsers, searchUserForId, saveUser, deleteUser, upDateUser }
