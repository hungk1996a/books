class AdvanceSearchCondition {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
    describe(sqlQuery) {
        return sqlQuery.where('title', 'like', '%' + this.title + '%')
            .where('author', 'like', '%' + this.author + '%')
            .where('publisher.name', 'like', '%' + this.publisher + '%')
    }
}
module.exports = AdvanceSearchCondition;