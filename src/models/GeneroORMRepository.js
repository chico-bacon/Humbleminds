export class GeneroRepository {

  async listar() {
  
  }

  async inserir (genero) {
    try {
      const suppe = await prismaClient.super.create({
        data: genero
      });

    response.status(201).json({
      message: "Genero registrado com sucesso",
      data: suppe
    });

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao registrar genero.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  } 

  async atualizar (nome) {
  
  }

  async deletar (genero) {
  
  }

}

