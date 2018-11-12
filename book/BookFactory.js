const Book = require('./Book');
const Publisher = require('../publisher/publisher');

class BookFactory {

    /**
     *
     * @param bookRaw
     * @returns {Book}
     */
    makeFromRequest(bookRaw) {
        const book = new Book(bookRaw.title);
        book.setAuthor(bookRaw.author);
        book.setPrice(bookRaw.price);
        book.setPublisher(bookRaw.publisher_id);
        return book;
    }

    makeFromDB(bookRaw) {
        const book = new Book(bookRaw.title);
        book.setAuthor(bookRaw.author);
        book.setPrice(bookRaw.price);
        book.setId(bookRaw.id);
        const publisher = new Publisher(bookRaw.name);
        publisher.setId(bookRaw.publisher_id);
        publisher.setAddress(bookRaw.address);
        book.setPublisher(publisher);
        return book;
    }
}
module.exports = BookFactory;