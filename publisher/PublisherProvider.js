const connection = require('../config');
const Publisher = require('./publisher');
const PublisherFactory = require('./PublisherFactory');
const publisherFactory = new PublisherFactory;

class PublisherProvider {
    constructor(connection) {
        this.connection = connection;
    }
    provide(id) {
        return connection.select().from('publisher').where({id: id})
            .then(data => {
                if(data.length === 0){
                    return new Publisher("")
                }
                return publisherFactory.makeFromDB(data[0])
            })
    }
    provideAll() {
        return this.connection.select().from('publisher')
            .then(data => {
                let publishers;
                publishers = data.map(element => publisherFactory.makeFromDB(element));
                return publishers;
            })
    }
}
module.exports = PublisherProvider;