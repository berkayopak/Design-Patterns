import Observer from "./Observer";
import Swal from 'sweetalert2';


function showNotification(msg) {
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: msg,
        showConfirmButton: false,
        timer: 1500
    })
}


class DiscountObserver extends Observer{
    constructor(product){
        super();
        this._product = product;
        this._product.attach(this);
    }

    update(){
        console.log("Price changed : " + this._product.price);
        showNotification("Product("+ this._product.title +") price changed : " + this._product.price);
    }
}

export default DiscountObserver;