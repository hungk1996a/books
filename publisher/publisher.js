class Publisher {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}
module.exports = Publisher;