const blogsPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataBlogs.json'
const blogs = require(`${blogsPath}`)
const fs = require('fs')


const allBlogs = (_, response) => {
  response.send(blogs);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchBlogForId = (request, response) => {
  const blogEncontrado = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogEncontrado.length > 0) {
    response.status(200).send(blogEncontrado)

  } else {
    response.status(404).send("Blog não encontrado")
  }

};

const saveBlog = (request, response) => {

  const novoId = Date()
  const novoUsuario = request.body

  blogs.push(
    { id: novoId, ...novoUsuario }
  )
  fs.writeFile(`${blogsPath}`, JSON.stringify(blogs), (err) => { console.log('erro fs write blog', err) })
  response.status(201).send("Blog incluido")
};


const deleteBlog = (request, response) => {
  const blogEncontrado = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogEncontrado.length > 0) {
    posicao = blogEncontrado.indexOf(blogEncontrado.id);
    blogs.splice(posicao, 1);
    fs.writeFile(`${blogsPath}`, JSON.stringify(blogs), (err) => { console.log('erro fs write blog', err) })
    response.status(200).send("Usuário Excluído")

  } else {
    response.status(404).send("Blog não encontrado")
  }

}



const upDateBlog = (request, response) => {

  const blogEncontrado = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogEncontrado.length > 0) {
    posicao = blogEncontrado.indexOf(blogEncontrado.id);
    const novoId = blogEncontrado.id
    blogs.splice(posicao, 1);
    const novoBlog = request.body
    blogs.push(
      { id: novoId, ...novoBlog }
    )
    fs.writeFile(`${blogsPath}`, JSON.stringify(blogs), (err) => { console.log('erro fs write blog', err) })
    response.status(201).send("Blog incluido")
  };
}

module.exports = { allBlogs, searchBlogForId, saveBlog, deleteBlog, upDateBlog }
