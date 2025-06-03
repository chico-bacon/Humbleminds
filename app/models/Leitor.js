import bcrypt from 'bcrypt';

export class Leitor {
    static SALT_ROUNDS = 10;
    static saltRounds;

    constructor (nome, email){
        this.nome = nome;
        this.email = email;
    }

    set senha(senha) {
        //console.log({senha});
        if (!senha) {
            throw new Error('Senha não pode ser vazia!');
        }
        this._senha = bcrypt.hashSync(senha, Leitor.SALT_ROUNDS);
    }

    get senha() {
        return this._senha;
    }

    compararSenha(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }

}

//module.exports = Leitor;