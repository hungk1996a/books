const express = require('express');
const router = new express.Router();
const bookRequest = require('../middlerware/index');
const BookController = require('../controller/bookController');
const bookController = new BookController;

router.get('/', bookController.showBook);

router.post('/', bookRequest.checkBook, bookController.createBook);

router.put('/:id', bookRequest.checkBook, bookController.updateBook);

router.delete('/:id', bookRequest.checkBook, bookController.deleteBook);

router.get('/books', bookRequest.checkSearch, bookController.search);
router.get('/book/:id', bookRequest.checkSearch, bookController.search);
router.get('/search-advance', bookRequest.checkSearch, bookController.search);
router.get('/search-basic', bookRequest.checkSearch, bookController.search);

module.exports = router;