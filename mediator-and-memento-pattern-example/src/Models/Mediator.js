class Mediator {
    constructor() {
        if (new.target === Mediator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.notify === undefined) {
            throw new TypeError("Must override method notify");
        }
    }
}

export default Mediator;