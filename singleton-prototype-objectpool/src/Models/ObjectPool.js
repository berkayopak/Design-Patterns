import Swal from 'sweetalert2'

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
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Pool is empty!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    recycle(oRecyclable){
        if (!oRecyclable instanceof this.object) {
            throw new Error("Trying to recycle the wrong object for pool.");
        }
        console.log(oRecyclable);
        if((this.size - this.active) < this.size && !oRecyclable.oRecycled){
            oRecyclable.recycle();
            this.pool.push(oRecyclable);
            this.active--;
        }
        else if ((this.size - this.active) >= this.size){
            console.log("Pool is full!");
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Pool is full!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            console.log("This object already recycled!");
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'This object already recycled!',
                showConfirmButton: false,
                timer: 1500
            })
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