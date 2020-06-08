import TransportationDevice from "./TransportationDevice";
import DevicesWithoutEngines from "./DevicesWithoutEngines";
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

class Bicycle extends DevicesWithoutEngines/*TransportationDevice*/ {
    constructor(){
        super();
    }

    startMoving(){
        console.log("Bicycle started to move.");
        showNotification("","Bicycle started to move.","");
    }

    /*
    startEngine(){
        //Bos override etmek zorunda kaliyoruz. Bu da problemi olusturuyor.
    }
    */
}

export default Bicycle;