import { prismaClient } from "../database/prismaClient.js";

export class LivroRepository {
  async listar(request, response) {
    try {
      const listaLivros = await prismaClient.livro.findMany();
      response.status(201).json(listaLivros);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao listar livro.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async buscarPorId(id, request, response) {
    try {
      const livro = await prismaClient.livro.findUnique({
        where: { 
          id: id
        }
      });
      response.status(201).json(livro);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao buscar livro.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async inserir(livro, request, response) {
    try {
        await prismaClient.livro.create({
        data: livro
      });
      
      response.status(201).json({
        message: "livro registrado com sucesso",
      });

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao registrar livro.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  } 

  async alterar (id, livro, request, response) {
    try {
      await prismaClient.livro.update({
        where: { id: id },
        data: livro
      })
      response.status(201).json({
        message: "livro registrado com sucesso",
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao atualizar livro.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async deletar (id, request, response) {
    try {
      const livro = await prismaClient.livro.delete({
        where: { id: id }
      });
      response.status(201).json(livro);
    } catch (error) {
        console.error(error);
        response.status(500).json({
          message: "Erro ao buscar livro.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
}

