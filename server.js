
const express = require('express')
const app = express()
app.use(express.json())
// const bodyParser = require('body-parser')  substituido peolo express.json()
// app.use(midware)

const port = 3000

app.listen(port, () => {
  console.log(`Servidor subiu ${port}`)
})


const index = require('./src/routes/index')
const users = require('./src/routes/usersRoutes')
const recipes = require('./src/routes/recipesRoutes')
const notebooks = require('./src/routes/notebooksRoutes')
const categories = require('./src/routes/categoriesRoutes')
const blogs = require('./src/routes/blogsRoutes')


app.use("/", index);
app.use("/users", users);
app.use("/recipes", recipes);
app.use("/notebooks", notebooks);
app.use("/categories", categories);
app.use("/blogs", blogs);



