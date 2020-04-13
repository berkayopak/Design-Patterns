import Swal from 'sweetalert2'

function showError(msg) {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
}

class ObjectPool {
    constructor(size, object){
        this.pool = []
        this.size = size;
        this.active = 0;
        this.object = object;
        if(size > 0){
            for(let i=0; i < size; i++){
                const newObj = new object();
                newObj.setShape(60*(i+1), 30, 30, 'red');
                this.pool.push(newObj);
            }
        }
    }

    obtain(){
        if(this.active < this.size) {
            this.active++;
            const obtainedObj = this.pool.pop();
            obtainedObj.obtain();
            return obtainedObj;
        }
        else {
            console.log("Pool is empty!");
            showError("Pool is empty!");
        }
    }

    recycle(oRecyclable){
        if (!oRecyclable instanceof this.object) {
            console.log("Trying to recycle the wrong object for pool!");
            showError("Trying to recycle the wrong object for pool!");

        }
        if(!oRecyclable){
            console.log("Recycle object is undefined/null!");
            showError("Object is undefined/null!");

            return;
        }
        if((this.size - this.active) < this.size && !oRecyclable.oRecycled){
            oRecyclable.recycle();
            this.pool.push(oRecyclable);
            this.active--;
        }
        else if ((this.size - this.active) >= this.size){
            console.log("Pool is full!");
            showError("Pool is full!");

        }
        else {
            console.log("This object already recycled!");
            showError("This object already recycled!");
        }
    }

    getActiveCount() {
        return this.active;
    }

    getSize() {
        return this.size;
    }

    getObjects(){
        return this.pool;
    }
}

export default ObjectPool;