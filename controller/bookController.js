class BookController {

    showBook(req, res, next) {
        const bookRepository = req.app.get('repo');
        bookRepository.show()
            .then(data => res.send(data))
            .catch(next);
    }

    joinBook(req, res, next) {
        const bookRepository = req.app.get('repo');
        bookRepository.join()
            .then(data => res.send(data))
            .catch(next);
    }

    createBook(req, res, next) {
        const bookRepository = req.app.get('repo');
        bookRepository.create(req.book)
            .then(data => res.send(data))
            .catch(next);
    }

    updateBook(req, res, next) {
        req.book.setId(req.params.id);
        const bookRepository = req.app.get('repo');
        bookRepository.update(req.book)
            .then(data => res.send("success"))
            .catch(next);
    }

    deleteBook(req, res, next) {
        req.book.setId(req.params.id);
        const bookRepository = req.app.get('repo');
        bookRepository.delete(req.book)
            .then(data => res.send('success'))
            .catch(next);
    }
}
module.exports = BookController;