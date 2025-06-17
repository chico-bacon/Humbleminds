import express from 'express';
import { Livro } from '../models/Livro.js'
                
export class LivroController {
    constructor (LivrosRepository) {
        this.LivrosRepository = LivrosRepository;
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
        let livros = await this.LivrosRepository.listar();
        res.json(livros);
    }

}

//module.exports = GenerosController;
