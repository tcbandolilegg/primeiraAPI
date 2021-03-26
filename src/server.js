
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


app.use("/", index);
app.use("/users", users);
