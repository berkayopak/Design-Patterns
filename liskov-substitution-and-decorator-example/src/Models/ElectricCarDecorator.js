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

class ElectricCarDecorator extends CarDecorator{
    constructor(decoratedCar){
        super(decoratedCar);
    }

    startEngine() {
        this.decoratedCar.startEngine();
        console.log("The engine runs silently.");
        showNotification("","The engine runs silently.","");
    }
}

export default ElectricCarDecorator;