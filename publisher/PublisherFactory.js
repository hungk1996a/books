const Publisher = require('./publisher');
class PublisherFactory {
    makeFromDB(publisherRaw) {
        const publisher = new Publisher(publisherRaw.name);
        publisher.setId(publisherRaw.id);
        publisher.setAddress(publisherRaw.address)
        return publisher;
    }
}
module.exports = PublisherFactory;