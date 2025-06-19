export class Livro {
    constructor(titulo, id_genero, id_editora, data_lancamento, paginas) {
        this.titulo = titulo
        this.id_genero = id_genero
        this.id_editora = id_editora
        this.data_lancamento = data_lancamento
        this.paginas = paginas
    }

    detalharLivro() {
        return {
        "id" : this.id,
        "titulo" : this.titulo,
        "id_genero" : this.id_genero,
        "id_editora" : this.id_editora,
        "data_lancamento" : this.data_lancamento,
        "paginas" : this.paginas
    }
    }

}