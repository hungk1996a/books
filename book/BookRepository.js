BookFactory = require('./BookFactory');
bookFactory = new BookFactory;

class BookRepository {
    constructor (knex) {
        this.knex = knex;
    }

    create(book) {
        return this.knex('books').insert({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher(),
            price: book.getPrice()
        });
    }

    update(book) {
        return this.knex('books').where({
            id: book.getId()
        }).update({
            title: book.getTitle(),
            author: book.getAuthor(),
            publisher_id: book.getPublisher(),
            price: book.getPrice()
        });
    }

    delete(book) {
        return this.knex('books').where({id: book.getId()})
            .del();
    }

    show() {
        return this.knex('books').select();
    }

    join() {
        return this.knex.select().from('books').leftJoin('publisher', function () {
            this.on('publisher.id', '=','publisher_id')
        })
            .then(data => data.map(element => {return bookFactory.makeFromDB(element)})
    )}
}
module.exports = BookRepository;