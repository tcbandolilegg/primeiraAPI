import express from 'express'
const app = express()
app.use(express.json())
// const bodyParser = require('body-parser')  substituido pelo express.json()
// app.use(midware)

import { promises as fs } from 'fs'
const { readFile, writeFile } = fs



import index from './src/routes/index.js'
import users from './src/routes/usersRoutes.js'
import notebooks from './src/routes/notebooksRoutes.js'
import recipes from './src/routes/recipesRoutes.js'
import categories from './src/routes/categoriesRoutes.js'
import blogs from './src/routes/blogsRoutes.js'


app.use("/", index)
app.use("/users", users)
app.use("/notebooks", notebooks)
app.use("/recipes", recipes)
app.use("/categories", categories)
app.use("/blogs", blogs)

app.use((err, req, res, next) => {
  throw new Error('???')
  // console.log('Request URL:' + req.originalUrl + 'Error:' + err + Date())
  // console.log('Error:' + err + Date())
  // next()
})
// GLOBAL.usersPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataUsers.json'
const usersPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataUsers.json'
const recipesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataRecipes.json'
const notebooksPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataNotebooks.json'
const categoriesPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataCategories.json'
const blogsPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataBlogs.json'

var serverUp = 0

const port = 3000
app.listen(port, async () => {
  console.log(`****** Server Up ${port}`)
  serverUp = await doUser(serverUp)

  // console.log("****** Saindo do User com serverUpTop", serverUp)
  serverUp = await doNotebooks(serverUp)

  // console.log("****** Saindo do Notebook com serverUpTop", serverUp)
  serverUp = await doRecipes(serverUp)

  // console.log("****** Saindo do Recipes com serverUpTop", serverUp)
  serverUp = await doCategories(serverUp)

  // console.log("****** Saindo do Categories com serverUpTop", serverUp)
  serverUp = await doBlogs(serverUp)

  // console.log("****** Saindo do Blogs com serverUpTop", serverUp)

  // console.log('****** Todos os DB do sistema', serverUpTot)
  if (serverUp == 5) {
    console.log(serverUp, '****** Tudo certo com todos os BD')
  }
})

async function doUser(serverUp) {

  // console.log("****** teste")
  // console.log(`****** dataUser up ${usersPath}`)

  try {
    await readFile(`${usersPath}`)
    // console.log('****** User encontrado com sucessso')
    serverUp = serverUp + 1
  } catch{
    // console.log('****** Error de cara, User não subiu')
    const initialUsers = {
      id: 1,
      userLogin: "",
      nome: "",
      idade: 0,
      cpf: "",
      rg: "",
      data_nasc: Date(),
      sexo: "",
      mae: "",
      pai: "",
      email: "",
      foto: "",
      senha: "",
    }
    try {
      await writeFile(`${usersPath}`, JSON.stringify(initialUsers))
      // console.log('****** Users create')
      serverUp = serverUp + 1
    } catch{
      // console.log('****** Users not create')

    }
  }
  // console.log('User', serverUp)
  return serverUp
}

async function doNotebooks(serverUp) {
  // console.log(`****** dataNotebooks up ${notebooksPath}`)
  try {
    await readFile(`${notebooksPath}`)
    // console.log('****** Notebook encontrado com sucessso')
    serverUp = serverUp + 1
  } catch{
    // console.log('****** Error de cara, Notebok não subiu')
    const initialNotebook = {
      id: 1,
      decricao: "",
      origem: ""

    }
    try {
      await writeFile(`${notebooksPath}`, JSON.stringify(initialNotebook))
      // console.log('****** Notebook create')
      serverUp = serverUp + 1
    } catch{
      console.log('****** Notebook not create')
    }
  }
  // console.log('Notebook', serverUp)
  return serverUp

}

async function doRecipes(serverUp) {
  // console.log(`****** dataRecipes up ${recipesPath}`)
  try {
    await readFile(`${recipesPath}`)
    // console.log('****** Recipe encontrado com sucessso')
    serverUp = serverUp + 1
  } catch{
    // console.log('****** Error de cara, Recipe não subiu')
    const initialRecipe = {
      id: 1,
      id_caderno: 0,
      id_user: 0,
      quem_criou_receita: "",
      foto: "",
      categoria: "",
      nome_receita: "",
      ingredientes: "",
      modo_preparo_texto: "",
      modo_preparo_audio: "",
      data_insercao: "",
      numero_de_visualizacoes: "",
    }
    try {
      await writeFile(`${recipesPath}`, JSON.stringify(initialRecipe))
      // console.log('****** Recipe create')
      serverUp = serverUp + 1
    } catch{
      // console.log('****** Recipe not create')
    }
  }
  // console.log('Recipe', serverUp)
  return serverUp

}

async function doCategories(serverUp) {
  // console.log(`****** dataCategories up ${categoriesPath}`)
  try {
    await readFile(`${categoriesPath}`)
    // console.log('****** Category encontrado com sucessso')
    serverUp = serverUp + 1
  } catch{
    // console.log('****** Error de cara, Category não subiu')
    const initialCategory = {
      id: 1,
      decricao: "",
      sabor: ""
    }
    try {
      await writeFile(`${categoriesPath}`, JSON.stringify(initialCategory))
      // console.log('****** Category create')
      serverUp = serverUp + 1
    } catch{
      // console.log('****** Category not create')
    }
  }
  // console.log('Category', serverUp)
  return serverUp

}

async function doBlogs(serverUp) {
  // console.log(`****** dataBlogs up ${blogsPath}`)
  try {
    await readFile(`${blogsPath}`)
    // console.log('****** Blog encontrado com sucessso')
    serverUp = serverUp + 1
  } catch{
    // console.log('****** Error de cara, Blog não subiu')
    const initialBlog = {
      id: 1,
      titulo: "",
      imagem_1: "",
      matéria: "",
      ingredientes: "",
      imagem_2: "",
      modo_preparo: "",
      video: ""

    }
    try {
      await writeFile(`${blogsPath}`, JSON.stringify(initialBlog))
      // console.log('****** Blog create')
      serverUp = serverUp + 1
    } catch{
      // console.log('****** Blog not create')
    }
  }
  // console.log('Blog', serverUp)
  return serverUp

}



