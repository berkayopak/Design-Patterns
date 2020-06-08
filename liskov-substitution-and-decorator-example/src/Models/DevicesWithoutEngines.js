import TransportationDevice from "./TransportationDevice";
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

class DevicesWithoutEngines extends TransportationDevice {
    constructor(){
        super();
    }

    startMoving(){
        console.log("Started to move.");
        showNotification("","Started to move.","");
    }
}

export default DevicesWithoutEngines;