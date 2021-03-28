const recipesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataRecipes.json'
const recipes = require(`${recipesPath}`);
const fs = require('fs')


const allRecipes = (_, response) => {
  response.send(recipes);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchRecipeForId = (request, response) => {
  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    response.status(200).send(recipeEncontrado)

  } else {
    response.status(404).send("Recipe não encontrado")
  }

};

const saveRecipe = (request, response) => {

  const novoId = Date()
  const novoUsuario = request.body

  recipes.push(
    { id: novoId, ...novoUsuario }
  )

  try {
    fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
    response.status(201).send("Recipe incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo receitas', err)
  }

};


const deleteRecipe = (request, response) => {
  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    posicao = recipeEncontrado.indexOf(recipeEncontrado.id);
    recipes.splice(posicao, 1);
    try {
      fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
      response.status(200).send("Recipe Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo receitas', err)
    }


  } else {
    response.status(404).send("Recipe não encontrado")
  }

}



const upDateRecipe = (request, response) => {

  const recipeEncontrado = recipes.filter((recipe) => {
    return recipe.id === Number(request.params.id)
  })
  if (recipeEncontrado.length > 0) {
    posicao = recipeEncontrado.indexOf(recipeEncontrado.id);
    const novoId = recipeEncontrado.id
    recipes.splice(posicao, 1);
    const novoRecipe = request.body
    recipes.push(
      { id: novoId, ...novoRecipe }
    )
    try {
      fs.writeFile(`${recipesPath}`, JSON.stringify(recipes))
      response.status(201).send("Recipe Alterada")
    } catch (err) {
      console.error('Erro na gravação do arquivo receitas', err)
    }

  };
}

module.exports = { allRecipes, searchRecipeForId, saveRecipe, deleteRecipe, upDateRecipe }
