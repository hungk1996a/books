// const knex = require('../config');
// const BookFactory = require('../book/BookFactory');

class Searcher {
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }
    search(condition) {
        let factory = this.factory;
        let sqlQuery = this.connection
        .select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publisher.name', 'publisher.address')
            .from('books').leftJoin('publisher', 'publisher_id', 'publisher.id');
        condition.describe(sqlQuery);
        return sqlQuery.then(data => data.map(element => factory.makeFromDB(element)));
        }
}
module.exports = Searcher;
