const express = require('express');
const router = new express.Router();
const bookRequest = require('../middlerware/index');
const BookController = require('../controller/bookController');
const bookController = new BookController;

router.get('/', bookController.showBook);
router.get('/show', bookController.showBooks);

router.post('/book', bookRequest.checkBook, bookController.createBook);

router.post('/edit/:id', bookRequest.checkBook, bookController.updateBook);

router.get('/delete/:id', bookRequest.checkBook, bookController.deleteBook);
router.get('/books', bookRequest.checkSearch, bookController.search);
router.get('/search-advance', bookRequest.checkSearch, bookController.searchBook);
router.get('/search-basic', bookRequest.checkSearch, bookController.searchBook);

router.get('/create', bookController.renderAddBook);
router.get('/book/:id', bookRequest.checkSearch, bookController.detail);
router.post('/book/:id', bookRequest.checkSearch, bookController.showBooks);
router.get('/edit/:id', bookRequest.checkSearch, bookController.renderEditBook);
router.get('/listBook', bookRequest.checkSearch, bookController.showBooks);
module.exports = router;