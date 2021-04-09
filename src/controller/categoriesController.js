import { promises as fs } from 'fs'
const { readFile, writeFile } = fs
const categoriesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataCategories.json'


const allCategories = (_, response) => {
  response.send(categories);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchCategoryForId = (request, response) => {
  const categoryFound = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryFound.length > 0) {
    response.status(200).send(categoryFound)

  } else {
    response.status(404).send("Category not found")
  }

};

const saveCategory = (request, response) => {

  const newId = Date()
  const newCategory = request.body

  categories.push(
    { id: newId, ...newCategory }
  )
  try {
    fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
    response.status(201).send("Category incluida")
  } catch (err) {
    console.error('Erro na gravação do arquivo categorias', err)
  }

};


const deleteCategory = (request, response) => {
  const categoryFound = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryFound.length > 0) {
    position = categoryFound.indexOf(categoryFound.id);
    categories.splice(position, 1);
    try {
      fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
      response.status(200).send("Categoria Excluída")
    } catch (err) {
      console.error('Erro na gravação do arquivo categorias', err)
    }


  } else {
    response.status(404).send("Category not found")
  }

}



const upDateCategory = (request, response) => {

  const categoryFound = categories.filter((category) => {
    return category.id === Number(request.params.id)
  })
  if (categoryFound.length > 0) {
    position = categoryFound.indexOf(categoryFound.id);
    const newId = categoryFound.id
    categories.splice(position, 1);
    const newCategory = request.body
    categories.push(
      { id: newId, ...newCategory }
    )

    try {
      fs.writeFile(`${categoriesPath}`, JSON.stringify(categories))
      response.status(201).send("Category Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo categorias', err)
    }

  };
}

export default { allCategories, searchCategoryForId, saveCategory, deleteCategory, upDateCategory }

