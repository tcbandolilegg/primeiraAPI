const usersPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataUsers.json'

import { promises as fs } from 'fs'
const { readFile, writeFile } = fs

const dataUsers = JSON.parse(await readFile(`${usersPath}`))
// console.log(dataUsers)

const allUsers = (_, response) => {
  response.send(dataUsers);
};

const searchUserForId = (request, response) => {
  const userFound = dataUsers.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userFound.length > 0) {
    response.status(200).send(userFound)

  } else {
    response.status(404).send("User not found")
  }

};

const saveUser = (request, response) => {

  const newId = Date()
  const newUser = request.body

  users.push(
    { id: newId, ...newUser }
  )
  try {
    fs.unlinkSync(`${usersPath}`)
    console.log('Arquivo excluido no incluir users')
    //file removed
  } catch (err) {
    console.error('Erro na exclusão do arquivo users', err)
  }
  console.log('Users depois do push users', dataUsers)
  try {
    writeFile(`${usersPath}`, JSON.stringify(dataUsers))
    response.status(201).send("User incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo users', err)
  }
};


const deleteUser = (request, response) => {
  const userFound = dataUsers.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userFound.length > 0) {
    position = userFound.indexOf(userFound.id);
    dataUsers.splice(position, 1);
    try {
      writeFile(`${usersPath}`, JSON.stringify(usersPath))
      response.status(200).send("Usuário Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo users', err)
    }
  } else {
    response.status(404).send("User not found")
  }

}

const upDateUser = (request, response) => {

  const userFound = dataUsers.filter((user) => {
    return user.id === Number(request.params.id)
  })
  if (userFound.length > 0) {
    position = userFound.indexOf(userFound.id);
    const newId = userFound.id
    users.splice(position, 1);
    const newUser = request.body
    dataUsers.push(
      { id: newId, ...newUser }
    )
    try {
      writeFile(`${dataUsers}`, JSON.stringify(dataUsers))
      response.status(200).send("Usuário Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo users', err)
    }
  };
}
export default { allUsers, searchUserForId, saveUser, deleteUser, upDateUser }
