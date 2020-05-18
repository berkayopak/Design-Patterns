
class Caretaker {
    constructor() {
        this.values = [];
    }

    getSize(){
        return this.values.length;
    }

    addObject(object) {
        this.values.push(object);
    }

    getObject(index) {
        return this.values[index];
    }

    popLatestObject() {
        return this.values.pop()
    }
}
export default Caretaker;