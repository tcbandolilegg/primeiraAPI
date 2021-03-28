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
  try {
    fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
    response.status(201).send("Blog incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo blogs', err)
  }

};


const deleteBlog = (request, response) => {
  const blogEncontrado = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogEncontrado.length > 0) {
    posicao = blogEncontrado.indexOf(blogEncontrado.id);
    blogs.splice(posicao, 1);
    try {
      fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
      response.status(201).send("Blog Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo blogs', err)
    }

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
    try {
      fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
      response.status(201).send("Blog Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo blogs', err)
    }
  };
}

module.exports = { allBlogs, searchBlogForId, saveBlog, deleteBlog, upDateBlog }
