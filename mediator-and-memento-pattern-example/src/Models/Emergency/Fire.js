import Swal from 'sweetalert2';


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

class Fire {
    get emergencyMediator() {
        return this._emergencyMediator;
    }

    set emergencyMediator(value) {
        this._emergencyMediator = value;
    }
    get type() {
        return this._type;
    }
    constructor(){
        this._type = "Fire";
        this._emergencyMediator = null;
    }

    sendBackup(message=""){
        showNotification("Fire Department", "Reinforcement sent!", message);
    }

    sendFireTruck(message=""){
        showNotification("Fire Department", "Fire truck sent!", message);
    }

    callEmergencyLine(event, message){
        this._emergencyMediator.notify(this._type, event, message);
    }
}

export default Fire;