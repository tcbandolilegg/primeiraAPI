import { promises as fs } from 'fs'
const recipesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataRecipes.json'
const { readFile, writeFile } = fs


const allRecipes = (_, response) => {
  response.send(recipes);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchRecipeForId = (request, response) => {
  const recipeFound = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeFound.length > 0) {
    response.status(200).send(recipeFound)

  } else {
    response.status(404).send("Recipe not found")
  }

};

const saveRecipe = (request, response) => {

  const newId = Date()
  const newRecipe = request.body

  recipes.push(
    { id: newId, ...newRecipe }
  )

  try {
    fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
    response.status(201).send("Recipe incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo receitas', err)
  }

};


const deleteRecipe = (request, response) => {
  const recipeFound = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeFound.length > 0) {
    position = recipeFound.indexOf(recipeFound.id);
    recipes.splice(position, 1);
    try {
      fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
      response.status(200).send("Recipe Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo receitas', err)
    }


  } else {
    response.status(404).send("Recipe not found")
  }

}



const upDateRecipe = (request, response) => {

  const recipeFound = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeFound.length > 0) {
    position = recipeFound.indexOf(recipeFound.id);
    const newId = recipeFound.id
    recipes.splice(position, 1);
    const newRecipe = request.body
    recipes.push(
      { id: newId, ...newRecipe }
    )
    try {
      fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
      response.status(201).send("Recipe Alterada")
    } catch (err) {
      console.error('Erro na gravação do arquivo receitas', err)
    }

  };
}

export default { allRecipes, searchRecipeForId, saveRecipe, deleteRecipe, upDateRecipe }
