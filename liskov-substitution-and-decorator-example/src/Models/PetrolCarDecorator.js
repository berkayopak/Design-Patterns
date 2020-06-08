import CarDecorator from "./CarDecorator";
import ICar from "./ICar";
import Swal from "sweetalert2";

function showNotification(title, info, message) {
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: title,
        text: info,
        footer:message,
        showConfirmButton: false,
        timer: 1500
    })
}

class PetrolCarDecorator extends CarDecorator{
    constructor(decoratedCar){
        super(decoratedCar);
    }

    startEngine() {
        this.decoratedCar.startEngine();
        console.log("The engine runs loudly.");
        showNotification("","The engine runs loudly.","");
    }
}

export default PetrolCarDecorator;