import express from 'express';
import { Genero } from "../models/Genero.js"

export class GeneroController {
    constructor (generosRepository) {
        this.GenerosRepository = generosRepository
    }

    async listar(req, res) {
        let generos = await this.GenerosRepository.listar();
        res.json(generos);
    }

    async buscarPorId(req, res) {
        let generos = await this.GenerosRepository.listar();
        res.json(generos);
    }

    async inserir(req, res, next) {
        try {
            let genero = new Genero(req.body.nome);
            console.log(genero);
            let generosRepositoryResponse = await this.GenerosRepository.inserir(genero);
            res.json(generosRepositoryResponse);
        } catch(e) {
            next(e);
        }        
    }

    async alterar(req, res) {
        let generosRepositoryResponse = await this.GenerosRepository.alterar();
        res.json(generosRepositoryResponse);
    }

    async deletar(req, res) {
        let generosRepositoryResponse = await this.GenerosRepository.deletar();
        res.json(generosRepositoryResponse);
    }

}

//module.exports = GenerosController;
