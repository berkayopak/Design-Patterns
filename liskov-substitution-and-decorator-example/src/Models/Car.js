import TransportationDevice from "./TransportationDevice";
import DevicesWithEngines from "./DevicesWithEngines";
import Swal from "sweetalert2";
import ICar from "./ICar";

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

class Car extends DevicesWithEngines {
    constructor(){
        super();
    }

    startEngine() {
        console.log("Car engine started.");
        showNotification("","Car engine started.","");
    }
}

export default Car;