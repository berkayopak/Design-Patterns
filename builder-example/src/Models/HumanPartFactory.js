import {Arm, Body, Head, Leg, Neck} from "./HumanParts/All";


class HumanPartFactory {

    constructor() {

    }

    getShape(part_type){
        if(part_type=="arm"){
            return new Arm();
        }
        else if(part_type=="body"){
            return new Body();
        }
        else if(part_type=="head"){
            return new Head();
        }
        else if(part_type=="leg"){
            return new Leg();
        }
        else if(part_type=="neck"){
            return new Neck();
        }
        else{
            return null;
        }
    }

}

export default HumanPartFactory;