const express = require('express');
const app = express();

const BookRepository = require('./book/BookRepository');
const BookFactory = require('./book/BookFactory');
const knex = require('./config');
const Searcher = require('./Search/Searcher');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const router = require('./router/router');
app.use(router);
app.set('repo', new BookRepository(knex));
app.set('factory', new Searcher(knex, new BookFactory()));

app.listen(3003, () => {
    console.log('run');
});