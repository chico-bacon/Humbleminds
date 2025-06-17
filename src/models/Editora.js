export class Editora {
    constructor(nome) {
        this.nome = nome
    }

    detalharEditora() {
        return {
            "id" : this.id,
            "nome" : this.nome
        }
    }

}