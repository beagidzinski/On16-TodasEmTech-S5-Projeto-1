const livros = require('./database')
const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')

console.log(livros)
const resposta = read.question(`
========== Menu ==========
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de página
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número[1-5]:
`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    default:
        console.log('fim do algoritmo')
}