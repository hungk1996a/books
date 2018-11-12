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
            .update({
                deleted_at: new Date()
            });
    }

    show() {
        return this.knex('books').select().where('deleted_at', null);
    }

    joinDB() {
        return this.knex.select('books.id', 'books.title', 'books.author', 'books.publisher_id',
            'books.price', 'publisher.name', 'publisher.address').from('books').leftJoin('publisher', 'publisher_id', 'publisher.id').where('deleted_at', null)
            .then(data => data.map(element => {
                return bookFactory.makeFromDB(element)
            }))
    }
}
module.exports = BookRepository;