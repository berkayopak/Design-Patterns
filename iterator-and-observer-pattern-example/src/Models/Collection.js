class Collection {
    constructor() {
        if (new.target === Collection) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.createIterator === undefined) {
            throw new TypeError("Must override method createIterator");
        }
    }
}

export default Collection;