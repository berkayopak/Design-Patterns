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

class TransportationDevice
{
    /*
    get engine() {
        return this._engine;
    }

    set engine(value) {
        this._engine = value;
    }
    */
    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor() {
        this._name = "";
        this._speed = 0.00;
        /*this._engine = null;*/
    }

    /*
    //Sorun yaratiyor, cunku bisiklet de bir ulasim aracidir fakat motoru yoktur. Bisikleti de buradan turetemeyecegimiz icin Liskov Substitution prensibine uymamis olur.
    startEngine() {
        console.log("Engine started.");
        showNotification("","Engine started.","");
    }
    */
}

export default TransportationDevice;