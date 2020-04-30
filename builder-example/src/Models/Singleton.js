import Container from "./Container";

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            console.log("new");
            Singleton.instance = new Container();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

    setInstance(height, width){
        Singleton.instance.setHeight(height);
        Singleton.instance.setWidth(width);
    }
}

const singleton_instance = new Singleton();
Object.freeze(singleton_instance);

export default singleton_instance;