# **API Receitas de família**

_APIs são interfaces que permitem a usuários realizar transações em arquivos_

## Esta API será consumida pelo site Receitas de Família, é um backEnd simples que visa permitir a manipulação dos dado da plataforma

## A plataforma possui 1 banco de dados simples e não relacional, todas as relações são feitas diretamente nas tabelas por pesquisa simples com chaves primarias ou estrngeiras

## **Entenda as rotas da API**

1. "/", retorna que o servidor esta no ar

## **Rotas de Usuários**

1. "com o metodo GET a rota /users", retorna todos os usuários do arquivo JSON
2. "com o metodo GET a rota "/users/:id", retorna o usuário que possuir o mesmo ID
3. "com o metodo DELETE a rota "/users/:id", exclui o usuário que possuir o mesmo ID
4. "com o metodo POST a rota "/users", inclui o usuário
5. "com o metodo UPDATE a rota "/users/:id", permite a alteração do usuário de mesmo ID

## **Rotas de Receitas**

1. "com o metodo GET a rota /recipes", retorna todos as receitas do arquivo JSON
2. "com o metodo GET a rota "/recipes/:id", retorna a receita que possuir o mesmo ID
3. "com o metodo DELETE a rota "/recipes/:id", exclui a receita que possuir o mesmo ID
4. "com o metodo POST a rota "/recipes", inclui a receita
5. "com o metodo UPDATE a rota "/recipes/:id", permite a alteração da receita de mesmo ID

## **Rotas de Cadernos de Receitas**

1. "com o metodo GET a rota /notebooks", retorna todos os Cadernos de Receitas do arquivo JSON
2. "com o metodo GET a rota "/notebooks/:id", retorna o Caderno de Receitas que possuir o mesmo ID
3. "com o metodo DELETE a rota "/notebooks/:id", exclui o Caderno de Receitas que possuir o mesmo ID
4. "com o metodo POST a rota "/notebooks", inclui o Caderno de Receitas
5. "com o metodo UPDATE a rota "/notebooks/:id", permite a alteração do Caderno de Receitas de mesmo ID

## **Rotas de Categorias**

1. "com o metodo GET a rota /categories", retorna todos os Categorias do arquivo JSON
2. "com o metodo GET a rota "/categories/:id", retorna a Categoria que possuir o mesmo ID
3. "com o metodo DELETE a rota "/categories/:id", exclui a Categoria que possuir o mesmo ID
4. "com o metodo POST a rota "/categories", inclui a Categoria
5. "com o metodo UPDATE a rota "/categories/:id", permite a alteração da Categiria de mesmo ID

## **Rotas de Artigos do Blog**

1. "com o metodo GET a rota /blogs", retorna todos os Artigos do Blog do arquivo JSON
2. "com o metodo GET a rota "/blogs/:id", retorna o Artigo do Blog que possuir o mesmo ID
3. "com o metodo DELETE a rota "/blogs/:id", exclui o Artigo do Blog que possuir o mesmo ID
4. "com o metodo POST a rota "/blogs", inclui o Artigo do Blog
5. "com o metodo UPDATE a rota "/blogs/:id", permite a alteração do Artigo do Blog de mesmo ID
