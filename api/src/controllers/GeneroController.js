import express from 'express';
//  import { Genero } from "../models/Genero.js"

export class GeneroController {
    constructor (generosRepository) {
        this.GenerosRepository = generosRepository
    }

    async listar(req, res) {
        let generos = await this.GenerosRepository.listar(req, res);
        res.json(generos);
    }

    async buscarPorId(req, res, next) {
        let id = parseInt(req.params.id)
        console.log(id);
        let genero = await this.GenerosRepository.buscarPorId(id, req, res);
        res.json(genero);
    }

    async inserir(req, res, next) {
        try {
            let genero = {nome: req.body.nome};
            console.log(genero);
            let generosRepositoryResponse = await this.GenerosRepository.inserir(genero, req, res);
            res.json(generosRepositoryResponse);
        } catch(e) {
            next(e);
        }        
    }

    async alterar(req, res, next) {
        try{
            let id = parseInt(req.params.id);
            let genero = {
                nome: req.body.nome
            }
            //console.log("genero: " + genero + " " + "id: " + id);
            let generosRepositoryResponse = await this.GenerosRepository.alterar(id, genero, req, res);
            res.json(generosRepositoryResponse);
        } catch(e) {
            next(e);
        }
    }

    async deletar(req, res, next) {
        try {
            let id = parseInt(req.params.id);
            let generosRepositoryResponse = await this.GenerosRepository.deletar(id, req, res);
            res.json(generosRepositoryResponse);
        } catch(e) {
            next(e);
        }
    }

}

//module.exports = GenerosController;
