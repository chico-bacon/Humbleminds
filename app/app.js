import express from 'express';
const app = express();
const port = 3000;
import passport from 'passport';
import jwt from 'jsonwebtoken';

var opts = {}
import { Strategy, ExtractJwt} from 'passport-jwt';

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new Strategy(opts, function(jwt_payload, done) {
    console.log({ jwt_payload });
    let user = null
    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
}));

//const { generos } = require('./rotas/generos/')
//const { editoras } = require('./rotas/editoras/')

import { GeneroController } from './controllers/GeneroController.js';
import { GeneroRepository } from './models/GeneroORMRepository.js';
import { EditoraController } from './controllers/EditoraController.js';
import { EditoraRepository } from './models/EditoraORMRepository.js';
import { LeitorController } from './controllers/LeitorController.js';
import { LeitorRepository } from './models/LeitorORMRepository.js';
import { LivroRepository } from './models/LivroORMRepository.js';
import { LivroController } from './controllers/LivroControllers.js';

const generoRepository = new GeneroRepository();
const generoController = new GeneroController(generoRepository);
const editoraRepository = new EditoraRepository();
const editoraController = new EditoraController(editoraRepository);
const leitorRepository = new LeitorRepository();
const leitorController = new LeitorController(leitorRepository);
const livroRepository = new LivroRepository()
const livroController = new LivroController(livroRepository)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.use('/api/v1/leitores', leitorController.getRouter(), passport.authenticate('jwt', { session: false }));
app.use('/api/v1/generos', generoController.getRouter());
app.use('/api/v1/editoras', editoraController.getRouter());
app.use('/api/v1/livros', livroController.getRouter());
app.use((err, req, res, next) => {
    console.log({err});
    res.status(500).json(err.message);
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})
