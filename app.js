const express = require('express');
const app = express();

const BookRepository = require('./book/BookRepository');
const knex = require('./config');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const router = require('./router/router');
app.use(router);
app.set('repo', new BookRepository(knex));

app.listen(3000, () => {
    console.log('run');
});