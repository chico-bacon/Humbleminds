export class LivroRepository {
  livros = []

  async listar() {
    return this.livros;
  }

  async inserir (livro) {
    console.log(livro);
    this.livros.push(livro);
  } 

  async atualizar () {
      return 'Atualizando Livros' 
  }

  async deletar () {
    return 'Deletando Livros'
  }

}

