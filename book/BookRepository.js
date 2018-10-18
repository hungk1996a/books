class BookRepository {
    constructor (knex) {
        this.knex = knex;
    }

    /**
     *
     * @param {Book} book
     */
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

    /**
     *
     * @param {int} id
     * @returns {Promise<T | void>}
     */
    delete(book) {
        return this.knex('books').where({id: book.getId()})
            .del();
    }

    show() {
        return this.knex('books').select();
    }
}
module.exports = BookRepository;