import { prismaClient } from '../database/prismaClient.js';

export class GeneroRepository {

  async listar(request, response) {
    try {
      const listaGeneros = await prismaClient.genero.findMany();
      response.status(201).json(listaGeneros);

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao listar genero.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  }

  async buscarPorId(id, request, response) {
    try {
      const genero = await prismaClient.genero.findUnique({
        where: { 
          id: id
        }
      });
      response.status(201).json(genero);
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao buscar genero.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async inserir(genero, request, response) {
    try {
        await prismaClient.genero.create({
        data: genero
      });
      
      response.status(201).json({
        message: "Genero registrado com sucesso",
      });

    } catch (error) {
      console.error(error);
        response.status(500).json({
          message: "Erro ao registrar genero.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
  } 

  async alterar (id, genero, request, response) {
    try {
      await prismaClient.genero.update({
        where: { id: id },
        data: genero
      })
      response.status(201).json({
        message: "Genero registrado com sucesso",
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        message: "Erro ao atualizar genero.",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  async deletar (id, request, response) {
    try {
      const genero = await prismaClient.genero.delete({
        where: { id: id }
      });
      response.status(201).json(genero);
    } catch (error) {
        console.error(error);
        response.status(500).json({
          message: "Erro ao buscar genero.",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
}

