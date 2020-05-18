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

class Police {
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
        this._type = "Police";
        this._emergencyMediator = null;
    }

    sendBackup(message=""){
        showNotification("Police Department", "Reinforcement sent!", message);
    }

    sendOfficer(message=""){
        showNotification("Police Department", "Officer sent!", message);
    }

    sendInvestigator(message=""){
        showNotification("Police Department", "Investigator sent!", message);
    }

    callEmergencyLine(event, message){
        this._emergencyMediator.notify(this._type, event, message);
    }
}

export default Police;