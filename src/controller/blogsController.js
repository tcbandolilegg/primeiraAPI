import { promises as fs } from 'fs'
const { readFile, writeFile } = fs

const blogsPath = 'D:/Treinamento/013Inovationspace/primeiraapi/src/modal/dataBlogs.json'


const allBlogs = (_, response) => {
  response.send(blogs);
};


// request é o que vem do HTTP pra o servidor como uma pergunta através da rota
const searchBlogForId = (request, response) => {
  const blogFound = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogFound.length > 0) {
    response.status(200).send(blogFound)

  } else {
    response.status(404).send("Blog not found")
  }

};

const saveBlog = (request, response) => {

  const newId = Date()
  const newBlog = request.body

  blogs.push(
    { id: newId, ...newBlog }
  )
  try {
    fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
    response.status(201).send("Blog incluido")
  } catch (err) {
    console.error('Erro na gravação do arquivo blogs', err)
  }

};


const deleteBlog = (request, response) => {
  const blogFound = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogFound.length > 0) {
    position = blogFound.indexOf(blogFound.id);
    blogs.splice(position, 1);
    try {
      fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
      response.status(201).send("Blog Excluído")
    } catch (err) {
      console.error('Erro na gravação do arquivo blogs', err)
    }

  } else {
    response.status(404).send("Blog not found")
  }

}



const upDateBlog = (request, response) => {

  const blogFound = blogs.filter((blog) => {
    return blog.id === Number(request.params.id)
  })
  if (blogFound.length > 0) {
    position = blogFound.indexOf(blogFound.id);
    const newId = blogFound.id
    blogs.splice(position, 1);
    const newBlog = request.body
    blogs.push(
      { id: newId, ...newBlog }
    )
    try {
      fs.writeFile(`${blogsPath}`, JSON.stringify(blogs))
      response.status(201).send("Blog Alterado")
    } catch (err) {
      console.error('Erro na gravação do arquivo blogs', err)
    }
  };
}

export default { allBlogs, searchBlogForId, saveBlog, deleteBlog, upDateBlog }
