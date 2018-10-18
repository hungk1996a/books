class Book {
    constructor(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setAuthor(author) {
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    setPublisher(publisher) {
        this.publisher = publisher;
    }

    getPublisher() {
        return this.publisher;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}
module.exports = Book;