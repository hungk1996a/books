const express = require('express');
const app = express();
const BookRepository = require('./book/BookRepository');
const BookFactory = require('./book/BookFactory');
const knex = require('./config');
const Searcher = require('./Search/Searcher');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
const nunjucks = require('nunjucks');

nunjucks.configure('./Views', {
   autoescape: true,
   express: app
});
const PublisherProvider = require('./publisher/PublisherProvider');
const router = require('./router/router');

app.use(router);
app.set('repo', new BookRepository(knex));
app.set('factory', new Searcher(knex, new BookFactory()));
app.set('publishers', new PublisherProvider(knex));

app.listen(3000, () => {
    console.log('run');
});