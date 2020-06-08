class ICar{
    constructor(){
        if (new.target === ICar) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.startEngine === undefined) {
            throw new TypeError("Must override method startEngine");
        }
    }
}

export default ICar;