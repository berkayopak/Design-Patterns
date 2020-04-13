import ObjectPool from "./ObjectPool";
import Circle from "./Circle";

class SingletonObjectPool {

    constructor() {
        if (!SingletonObjectPool.instance) {
            console.log("new");
            SingletonObjectPool.instance = new ObjectPool(10, Circle);
        }
    }

    async init(){
        await SingletonObjectPool.instance.init();
    }

    getInstance() {
        return SingletonObjectPool.instance;
    }
}

const singleton_instance = new SingletonObjectPool();
Object.freeze(singleton_instance);

export default singleton_instance;