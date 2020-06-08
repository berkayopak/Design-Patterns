import TransportationDevice from "./TransportationDevice";
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

class DevicesWithEngines extends TransportationDevice{
    get engine() {
        return this._engine;
    }

    set engine(value) {
        this._engine = value;
    }

    constructor(){
        super();
        this._engine=null;
    }

    startEngine() {
        console.log("Engine started.");
        showNotification("","Engine started.","");
    }
}

export default DevicesWithEngines;