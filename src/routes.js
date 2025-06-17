import { Router } from "express";
import passport from 'passport';
import { GeneroController } from './controllers/GeneroController.js';
import { GeneroRepository } from './models/GeneroORMRepository.js';
import { EditoraController } from './controllers/EditoraController.js';
import { EditoraRepository } from './models/EditoraORMRepository.js';
import { LeitorController } from './controllers/LeitorController.js';
import { LeitorRepository } from './models/LeitorORMRepository.js';
import { LivroRepository } from './models/LivroORMRepository.js';
import { LivroController } from './controllers/LivroControllers.js';

const router = new Router();

const generoRepository = new GeneroRepository();
const generoController = new GeneroController(generoRepository);
const editoraRepository = new EditoraRepository();
const editoraController = new EditoraController(editoraRepository);
const leitorRepository = new LeitorRepository();
const leitorController = new LeitorController(leitorRepository);
const livroRepository = new LivroRepository()
const livroController = new LivroController(livroRepository)

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

router.post('/api/v2/generos', (req, res, next) => generoController.inserir(req, res, next))
router.get('/api/v2/generos', (req, res, next) => generoController.listar(req, res, next))

router.post('/api/v2/editoras', (req, res, next) => editoraController.inserir(req, res, next))
router.get('/api/v2/editoras', (req, res, next) => editoraController.listar(req, res, next))


router.post('/api/v2/livros', (req, res, next) => livroController.inserir(req, res, next))
router.get('/api/v2/livros', (req, res, next) => livroController.listar(req, res, next))

router.post('/api/v2/leitores', (req, res, next) => leitorController.login(req, res, next), passport.authenticate('jwt', { session: false }))

//router.post('/api/v2/leitores/login', leitorController., passport.authenticate('jwt', { session: false }))

export { router }