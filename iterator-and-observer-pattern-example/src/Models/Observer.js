class Observer{
    constructor(){
        this._product = null;
        if (new.target === Observer) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.update === undefined) {
            throw new TypeError("Must override method update");
        }
    }
}

export default Observer;