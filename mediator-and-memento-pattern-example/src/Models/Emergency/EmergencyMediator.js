import Mediator from "../Mediator";
import Police from "./Police";
import Fire from "./Fire";
import Rescue from "./Rescue";

class EmergencyMediator extends Mediator{
    constructor(){
        super();
        this._citizen = null;
        this._police = null;
        this._fire = null;
        this._rescue = null;
    }

    register(participant) {
        switch (participant.type) {
            case "Citizen":
                this._citizen=participant;
                this._citizen.emergencyMediator=this;
                break;
            case "Police":
                this._police=participant;
                this._police.emergencyMediator=this;
                break;
            case "Fire":
                this._fire=participant;
                this._fire.emergencyMediator=this;
                break;
            case "Rescue":
                this._rescue=participant;
                this._rescue.emergencyMediator=this;
                break;
            default:break;
        }
    }

    notify(sender, event, message){
        switch (sender) {
            case "Citizen":
                switch (event) {
                    case "Fire":
                        this._fire.sendFireTruck(message);
                        break;
                    case "Criminal":
                        this._police.sendOfficer(message);
                        break;
                    case "HealthIssue":
                        this._rescue.sendAmbulance(message);
                        break;
                }
                break;
            case "Fire":
                switch (event) {
                    case "Fire":
                        this._fire.sendBackup(message);
                        break;
                    case "Criminal":
                        this._police.sendInvestigator(message);
                        break;
                    case "HealthIssue":
                        this._rescue.sendAmbulance(message);
                        break;
                }
                break;
            case "Police":
                switch (event) {
                    case "Fire":
                        this._fire.sendFireTruck(message);
                        break;
                    case "Criminal":
                        this._police.sendBackup(message);
                        break;
                    case "HealthIssue":
                        this._rescue.sendAmbulance(message);
                        break;
                }
                break;
            case "Rescue":
                switch (event) {
                    case "Fire":
                        this._fire.sendFireTruck(message);
                        break;
                    case "Criminal":
                        this._police.sendInvestigator(message);
                        break;
                    case "HealthIssue":
                        this._rescue.sendBackup(message);
                        break;
                }
                break;
            default: console.log("Undefined sender!");
        }
    }
}

export default EmergencyMediator;