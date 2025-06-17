import express from 'express';
import { Editora } from "../models/Editora.js";

export class EditoraController {
    constructor (editoraRepository) {
        this.EditoraRepository = editoraRepository
    }

    getRouter() {
        const rotas = express.Router();
        rotas.get('/', (req, res) => {
            this.listar(req, res);
        });

        rotas.post('/', (req, res) => {
            this.inserir(req, res)
        });

        rotas.put('/', (req, res) => {
            this.alterar(req, res)
        });

        rotas.delete('/', (req, res) => {
            this.deletar(req, res)
        });
        
        return rotas;
    }

    async listar(req, res) {
        let Editora = await this.EditoraRepository.listar();
        res.json(Editora);
    }

    async buscarPorId(req, res) {
        let Editora = await this.EditoraRepository.listar();
        res.json(Editora);
    }

    async inserir(req, res) {
        let editora = new Editora(req.body.nome);
        console.log(editora);
        let EditoraRepositoryResponse = await this.EditoraRepository.inserir(editora);
        res.json(EditoraRepositoryResponse);
    }

    async alterar(req, res) {
        let EditoraRepositoryResponse = await this.EditoraRepository.alterar();
        res.json(EditoraRepositoryResponse);
    }

    async deletar(req, res) {
        let EditoraRepositoryResponse = await this.EditoraRepository.deletar();
        res.json(EditoraRepositoryResponse);
    }

}

//module.exports = EditoraController;
