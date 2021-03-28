const notebooksPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataNotebooks.json'
const notebooks = require(`${notebooksPath}`);
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

  const novoId = Date()
  const novoUsuario = request.body

  notebooks.push(
    { id: novoId, ...novoUsuario }
  )
  try {
    fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
    response.status(201).send("Notebook incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo noteBooks', err)
  }

};


const deleteNotebook = (request, response) => {
  const notebookEncontrado = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookEncontrado.length > 0) {
    posicao = notebookEncontrado.indexOf(notebookEncontrado.id);
    notebooks.splice(posicao, 1);
    try {
      fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
      response.status(200).send("Notebook Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo noteBooks', err)
    }

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

    try {
      fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
      response.status(201).send("Notebook Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo noteBooks', err)
    }

  };
}

module.exports = { allNotebooks, searchNotebookForId, saveNotebook, deleteNotebook, upDateNotebook }
