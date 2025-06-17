export class Genero {
    constructor(nome) {
        this.nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        if (!nome) {
            throw new Error('nome não pode ser em branco')
        };
        this._nome = nome; 
    }

    detalharGenero() {
        return {
            "id" : this.id,
            "nome" : this.nome
        }
    }

}
