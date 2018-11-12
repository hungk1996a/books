const Id_Search_Condition = require('../Search/Id_Search_Condition');

class BookController {

    showBook(req, res, next) {
        req.app.get('repo').show()
            .then(() => res.render('index.njk'))
            .catch(next);
    }

    showBooks(req, res, next) {
        // req.book.setId(req.params.id);
        req.app.get('repo').joinDB()
            .then(data => res.send(data))
            .catch(next)
    }

    createBook(req, res, next) {
        const bookRepository = req.app.get('repo');
        bookRepository.create(req.book)
            .then(() => res.render('index.njk'))
            .catch(next)
    }

    updateBook(req, res, next) {
        req.book.setId(req.params.id);
        const bookRepository = req.app.get('repo');
        bookRepository.update(req.book)
            .then(data => res.redirect('/books'))
            .catch(next);
    }

    deleteBook(req, res, next) {
        req.book.setId(req.params.id);
        const bookRepository = req.app.get('repo');
        bookRepository.delete(req.book)
            .then(() => res.redirect('/books'))
            .catch(next);
    }

    searchBook(req, res, next) {
        req.app.get('factory').search(req.condition)
            .then(data => res.send(data))
            .catch(next)
    }

    search(req, res, next) {
        req.app.get('factory').search(req.condition)
            .then(() => res.render('books.njk'))
            .catch(next)
    }

    renderAddBook(req, res, next) {
        req.app.get('publishers').provideAll()
            .then(publishers => res.render('create.njk', {publishers: publishers}))
            .catch(next)
    }

    renderEditBook(req, res, next) {
        let booksPromise = req.app.get('factory').search(req.condition);
        let publishersPromise = req.app.get('publishers').provideAll();
        Promise.all([booksPromise, publishersPromise])
            .then(values => res.render('edit.njk', {book: values[0][0], publishers: values[1]}))
            .catch(next)
    }

    detail(req, res, next) {
        req.app.get('factory').search(req.condition)
            .then((data) => res.render('detail.njk'))
            .catch(next)
    }
}

module.exports = BookController;