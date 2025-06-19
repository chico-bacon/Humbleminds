import { prismaClient } from '../database/prismaClient.js'

export class EditoraRepository {
  
  async listar(request, response) {
    try {
      const listaEditoras = await prismaClient.editora.findMany();
      response.status(201).json(listaEditoras);

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao listar editora.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  }

  async buscarPorId(id, request, response) {
    try {
      const editora = await prismaClient.editora.findUnique({
        where: { 
          id: id
        }
      });
      response.status(201).json(editora);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao buscar editora.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async inserir(editora, request, response) {
    try {
        await prismaClient.editora.create({
        data: editora
      });
      
      response.status(201).json({
        message: "Editora registrado com sucesso",
      });

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao registrar editora.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  } 

  async alterar (id, editora, request, response) {
    try {
      await prismaClient.editora.update({
        where: { id: id },
        data: editora
      })
      response.status(201).json({
        message: "editora registrado com sucesso",
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao atualizar editora.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async deletar (id, request, response) {
    try {
      const editora = await prismaClient.editora.delete({
        where: { id: id }
      });
      response.status(201).json(editora);
    } catch (error) {
        console.error(error);
        response.status(500).json({
          message: "Erro ao buscar editora.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
}

