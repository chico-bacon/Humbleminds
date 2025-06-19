import express from 'express';
import { Editora } from "../models/Editora.js";

export class EditoraController {
    constructor (editoraRepository) {
        this.EditoraRepository = editoraRepository
    }

    async listar(req, res) {
        let Editora = await this.EditoraRepository.listar(req, res);
        res.json(Editora);
    }

    async buscarPorId(req, res) {
        let id = parseInt(req.params.id)
        let Editora = await this.EditoraRepository.buscarPorId(id, req, res);
        res.json(Editora);
    }

    async inserir(req, res) {
        let editora = new Editora(req.body.nome);
        console.log(editora);
        let EditoraRepositoryResponse = await this.EditoraRepository.inserir(editora, req, res);
        res.json(EditoraRepositoryResponse);
    }

    async alterar(req, res) {
        let id = parseInt(req.params.id);
        let editora = {nome: req.body.nome}
        let EditoraRepositoryResponse = await this.EditoraRepository.alterar(id, editora, req, res);
        res.json(EditoraRepositoryResponse);
    }

    async deletar(req, res) {
        let id = parseInt(req.params.id);
        let EditoraRepositoryResponse = await this.EditoraRepository.deletar(id, req, res);
        res.json(EditoraRepositoryResponse);
    }

}

//module.exports = EditoraController;
