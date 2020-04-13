import SingletonObjectPool from "../Models/SingletonObjectPool";

export function obtain(objPool) {
    objPool = JSON.parse(objPool);
    console.log(SingletonObjectPool.getInstance().prototype, "sdgsdg");
    objPool.__proto__ = SingletonObjectPool.getInstance().prototype;
    return objPool.obtain();
}