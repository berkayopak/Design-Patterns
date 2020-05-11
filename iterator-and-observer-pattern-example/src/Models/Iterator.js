class Iterator {
    constructor() {
        if (new.target === Iterator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.next === undefined) {
            throw new TypeError("Must override method next");
        }
        if (this.hasNext === undefined) {
            throw new TypeError("Must override method hasNext");
        }
        if (this.reset === undefined) {
            throw new TypeError("Must override method rewind");
        }
    }
}

export default Iterator;