export class EditoraRepository {
  editoras = []

  async listar() {
    return this.editoras;
  }

  async inserir (editora) {
    console.log(editora)
    this.editoras.push(editora); 
  } 

  async atualizar (nome) {
      return 'Atualizando editora' 
  }

  async deletar () {
    return 'Deletando editora'
  }

}

