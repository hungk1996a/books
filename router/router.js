const express = require('express');
const router = new express.Router();
const bookRequest = require('../middlerware/index');
const BookController = require('../controller/bookController');
const bookController = new BookController;

router.get('/', bookController.showBook);

router.post('/', bookRequest.checkBook, bookController.createBook);

router.put('/:id', bookRequest.checkBook, bookController.updateBook);

router.delete('/:id', bookRequest.checkBook, bookController.deleteBook);

router.get('/get', bookController.joinBook);

module.exports = router;