import { promises as fs } from 'fs'
const { readFile, writeFile } = fs
const notebooksPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataNotebooks.json'



const allNotebooks = (_, response) => {
  response.send(notebooks);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchNotebookForId = (request, response) => {
  const notebookFound = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookFound.length > 0) {
    response.status(200).send(notebookFound)

  } else {
    response.status(404).send("Notebook not found")
  }

};

const saveNotebook = (request, response) => {

  const newId = Date()
  const newNotebook = request.body

  notebooks.push(
    { id: newId, ...newNotebook }
  )
  try {
    fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
    response.status(201).send("Notebook incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo noteBooks', err)
  }

};


const deleteNotebook = (request, response) => {
  const notebookFound = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookFound.length > 0) {
    position = notebookFound.indexOf(notebookFound.id);
    notebooks.splice(position, 1);
    try {
      fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
      response.status(200).send("Notebook Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo noteBooks', err)
    }

  } else {
    response.status(404).send("Notebook not found")
  }

}



const upDateNotebook = (request, response) => {

  const notebookFound = notebooks.filter((notebook) => {
    return notebook.id === Number(request.params.id)
  })
  if (notebookFound.length > 0) {
    position = notebookFound.indexOf(notebookFound.id);
    const newId = notebookFound.id
    notebooks.splice(position, 1);
    const newNotebook = request.body
    notebooks.push(
      { id: newId, ...newNotebook }
    )

    try {
      fs.writeFile(`${notebooksPath}`, JSON.stringify(notebooks))
      response.status(201).send("Notebook Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo noteBooks', err)
    }

  };
}

export default { allNotebooks, searchNotebookForId, saveNotebook, deleteNotebook, upDateNotebook }
