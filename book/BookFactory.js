const Book = require('./Book');

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
}
module.exports = BookFactory;