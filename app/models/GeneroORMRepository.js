export class GeneroRepository {
  generos = []

  async listar() {
    return this.generos;
  }

  async inserir (genero) {
    console.log(genero)
    this.generos.push(genero)  
  } 

  async atualizar (nome) {
      return 'Atualizando Genero' 
  }

  async deletar (genero) {
    return 'Deletando Genero'
  }

}

