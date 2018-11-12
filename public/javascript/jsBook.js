$('document').ready(() => {
    function renderBook(data) {
        let template = $('#bookTemplate').html();
        const resultsHTML = data.map((item) => {
            return template.replace(':bookTitle:', item.title)
                .replace(':bookAuthor:', item.author)
                .replace(':bookPrice:', item.price)
                .replace(':publisherName:', item.publisher.name)
                .replace(':publisherAddress:', item.publisher.address)
        });
        resultsHTML.join('');
        $('#book-list').html(resultsHTML);
    }

    $('#search').click(() => {
        $.get('/search-basic', {
            keyword: $('#keyword').val()
        }).then(renderBook)
    });

    $('#searchAdvance').click(() => {
        $.get('/search-advance', {
            title: $('#title').val(),
            author: $('#author').val(),
            publisher: $('#publisher').val(),
        }).then(renderBook)
    });
    $('#showBooks').click(() => {
        $.get('/show').then(renderBook)
    });

    $.get('/listBook').then(editBook);
    function editBook(data) {
        let template = $('#book-edit').html();
        const resultsHTML = data.map((item) => {
            return template.replace(':titleBook:', item.title)
                .replace(':name::id', item.id)
                .replace(':name::id', item.id)
                .replace(':name::id', item.id)
        });
        resultsHTML.join('');
        $('#list-edit-book').html(resultsHTML)
    }

    $.post('/book/:id').then(detailBook);
    function detailBook(data) {
        let templace = $('#renderBook').html();
        const resultsHTML = data.map((item) => {
            return templace.replace(':bookTitle:', item.title)
                .replace(':bookAuthor:', item.author)
                .replace(':publisherName:', item.publisher.name)
                .replace(':publisherAddress:', item.publisher.address)
                .replace(':bookPrice:', item.price)
        });
        resultsHTML.join('');
        $('#detailBook').html(resultsHTML);
    }
});