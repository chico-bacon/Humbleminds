import express from 'express';
                
export class LivroController {
    constructor (LivrosRepository) {
        this.LivrosRepository = LivrosRepository;
    }

    async listar(req, res) {
        let listaLivros = await this.LivrosRepository.listar(req, res);
        res.json(listaLivros);
    }

    async buscarPorId(req, res, next) {
        let id = parseInt(req.params.id)
        console.log(id);
        let livro = await this.LivrosRepository.buscarPorId(id, req, res);
        res.json(livro);
    }

    async inserir(req, res, next) {
        let dataLancamento = new Date(req.body.data_lancamento);
        try {
            let livro = {
                titulo: req.body.titulo,
                id_genero: req.body.id_genero, 
                id_editora: req.body.id_editora,
                data_lancamento: dataLancamento,
                paginas: req.body.paginas
            }
            console.log(livro);
            let LivrosRepositoryResponse = await this.LivrosRepository.inserir(livro, req, res);
            res.json(LivrosRepositoryResponse);
        } catch(e) {
            next(e);
        }        
    }

    async alterar(req, res, next) {
        try{
            let dataLancamento = new Date(req.body.data_lancamento);
            console.log(dataLancamento)
            let id = parseInt(req.params.id);
            let livro = {
                titulo: req.body.titulo,
                id_genero: req.body.id_genero, 
                id_editora: req.body.id_editora,
                data_lancamento: dataLancamento,
                paginas: req.body.paginas
            }
            let LivrosRepositoryResponse = await this.LivrosRepository.alterar(id, livro, req, res);
            res.json(LivrosRepositoryResponse);
        } catch(e) {
            next(e);
        }
    }

    async deletar(req, res, next) {
        try {
            let id = parseInt(req.params.id);
            let LivrosRepositoryResponse = await this.LivrosRepository.deletar(id, req, res);
            res.json(LivrosRepositoryResponse);
        } catch(e) {
            next(e);
        }
    }
}
