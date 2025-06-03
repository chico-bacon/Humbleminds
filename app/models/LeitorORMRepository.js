export class LeitorRepository {
  leitores = []

  constructor() {
    
  }

  async listar() {
    return this.leitores;
  }

  async inserir(leitor) {
      return this.leitores.push(leitor);
  } 

  async atualizar() {
      return 'Atualizando Leitores' 
  }

  async deletar() {
    return 'Deletando Leitores'
  }

  async procurarPorEmail(email) {
    let leitor = new Leitor('nome', email);
    leitor.senha = '234';
    return leitor
  }
  

}

