const notebooks = require('https://drive.google.com/file/d/1nUykaIJKacg7IQqtYyl6uo3LmIugayZM/view?usp=sharing')
const fs = require('fs')


const allNotebooks = (_, response) => {
  response.send(notebooks);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchNotebookForId = (request, response) => {
  const notebookEncontrado = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookEncontrado.length > 0) {
    response.status(200).send(notebookEncontrado)

  } else {
    response.status(404).send("Notebook não encontrado")
  }

};

const saveNotebook = (request, response) => {

  const novoId = request.body.cpf + date()
  const novoUsuario = request.body

  notebooks.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile(`${notebooks}`, JSON.stringify(notebooks), (err) => { console.log(err) })
  response.status(201).send("Notebook incluido")
};


const deleteNotebook = (request, response) => {
  const notebookEncontrado = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookEncontrado.length > 0) {
    posicao = notebookEncontrado.indexOf(notebookEncontrado.id);
    notebooks.splice(posicao, 1);
    fs.writeFile(`${notebooks}`, JSON.stringify(notebooks), (err) => { console.log(err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("Notebook não encontrado")
  }

}



const upDateNotebook = (request, response) => {

  const notebookEncontrado = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookEncontrado.length > 0) {
    posicao = notebookEncontrado.indexOf(notebookEncontrado.id);
    const novoId = notebookEncontrado.id
    notebooks.splice(posicao, 1);
    const novoNotebook = request.body
    notebooks.push(
      { id: novoId, ...novoNotebook }
    )
    fs.writeFile(`${notebooks}`, JSON.stringify(notebooks), (err) => { console.log(err) })
    response.status(201).send("Notebook incluido")
  };
}

module.exports = { allNotebooks, searchNotebookForId, saveNotebook, deleteNotebook, upDateNotebook }
