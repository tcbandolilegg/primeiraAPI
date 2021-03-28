const categoriesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataCategories.json'
const categories = require(`${categoriesPath}`)
const fs = require('fs');


const allCategories = (_, response) => {
  response.send(categories);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchCategoryForId = (request, response) => {
  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    response.status(200).send(categoryEncontrado)

  } else {
    response.status(404).send("Category não encontrado")
  }

};

const saveCategory = (request, response) => {

  const novoId = Date()
  const novoUsuario = request.body

  categories.push(
    { id: novoId, ...novoUsuario }
  )
  try {
    fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
    response.status(201).send("Category incluida")
  } catch (err) {
    console.error('Erro na gravação do arquivo categorias', err)
  }

};


const deleteCategory = (request, response) => {
  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    posicao = categoryEncontrado.indexOf(categoryEncontrado.id);
    categories.splice(posicao, 1);
    try {
      fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
      response.status(200).send("Categoria Excluída")
    } catch (err) {
      console.error('Erro na gravação do arquivo categorias', err)
    }


  } else {
    response.status(404).send("Category não encontrado")
  }

}



const upDateCategory = (request, response) => {

  const categoryEncontrado = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryEncontrado.length > 0) {
    posicao = categoryEncontrado.indexOf(categoryEncontrado.id);
    const novoId = categoryEncontrado.id
    categories.splice(posicao, 1);
    const novoCategory = request.body
    categories.push(
      { id: novoId, ...novoCategory }
    )

    try {
      fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
      response.status(201).send("Category Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo categorias', err)
    }

  };
}

module.exports = { allCategories, searchCategoryForId, saveCategory, deleteCategory, upDateCategory }

