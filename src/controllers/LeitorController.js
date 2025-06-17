import express from 'express';
import { Leitor } from "../models/Leitor.js";    

export class LeitorController {
    constructor (leitorRepository) {
        this.LeitorRepository = leitorRepository;
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
        let leitores = await this.leitorRepository.listar();
        res.json(leitores);
    }

    async login(request, response) {
        let email = request.body.email;
        let senha = request.body.senha;
        let leitor = await this.leitorRepository.procurarPorEmail(email);
        console.log({leitor, email, senha});
        if (leitor) {
            if (leitor.compararSenha(senha)) {
                let token = jwt.sign({...leitor}, this.segredo);
                response.cookie('token', token, {
                    secure: true,
                    httpOnly: true
                });
                response.json({ok: true});
                return
            }
        } else {
            response.json({ok: false});
        }
    }
}

//module.exports = GenerosController;
