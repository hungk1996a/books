class AdvanceSearchCondition {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
    describe(sqlQuery) {
        return sqlQuery.where('title', this.title)
            .where('author', this.author)
            .where('publisher.name', this.publisher)
    }
}
module.exports = AdvanceSearchCondition;