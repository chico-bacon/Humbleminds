import express from 'express';
import { router } from './routes.js';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3000;

//const { generos } = require('./rotas/generos/')
//const { editoras } = require('./rotas/editoras/')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use('/', router)

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/admin/generos', (req, res) => {
    res.render('genero');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.use((err, req, res, next) => {
    console.log({err});
    res.status(500).json(err.message);
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})
